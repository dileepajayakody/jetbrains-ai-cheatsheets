# Infrastructure — cheat-sheet hosting

AWS CDK app that provisions hosting for the generated cheat sheets:

- **Private S3 bucket** — origin only, no public access.
- **CloudFront distribution** — Origin Access Control + HTTPS (`redirect-to-https`),
  `index.html` as the root object. Optional custom domain.
- **GitHub OIDC IAM role** — assumable by this repo's Actions workflow, scoped to
  `s3:*` on the bucket and `cloudfront:CreateInvalidation` on the distribution.
  **No long-lived AWS keys.**

## Deploy (CDK)

```bash
cd infra
npm install
npx cdk bootstrap          # once per account/region
npm run deploy             # prints outputs below
```

Set the GitHub repo (used in the OIDC trust policy) in `cdk.json` context, or override:

```bash
npm run deploy -- -c githubRepo=OWNER/REPO -c githubBranch=main
```

Optional custom domain (cert must be an ACM cert in **us-east-1**):

```bash
npm run deploy -- -c domainName=cheatsheets.example.com -c certificateArn=arn:aws:acm:us-east-1:...
```

If your account already has a GitHub OIDC provider, reuse it instead of creating one:

```bash
npm run deploy -- -c existingOidcProviderArn=arn:aws:iam::ACCOUNT:oidc-provider/token.actions.githubusercontent.com
```

## Outputs → GitHub Actions configuration

`cdk deploy` prints:

| Output             | Use as GitHub Actions … |
| ------------------ | ----------------------- |
| `BucketName`       | variable `S3_BUCKET` |
| `DistributionId`   | variable `CLOUDFRONT_DISTRIBUTION_ID` |
| `CiDeployRoleArn`  | variable `AWS_DEPLOY_ROLE_ARN` |
| `DistributionDomain` | the live HTTPS URL |

Also set repo **variable** `AWS_REGION` and the repo **secret**
`AWS_BEARER_TOKEN_BEDROCK` (a Bedrock API key, used by the extract stage to call
Claude via Amazon Bedrock; the Playwright crawler needs no secret). See
`.github/workflows/cheatsheets.yml`. Alternatively, grant the OIDC deploy role
`bedrock:InvokeModel` and authenticate extract with SigV4 instead of a token.

## Manual bootstrap (fallback, no CDK)

If you'd rather not run CDK, create the same resources by hand and only feed the
workflow the bucket name, distribution id, region, and role ARN:

1. **S3**: create a bucket with *Block all public access* ON.
2. **CloudFront**: create a distribution with that bucket as origin using an
   **Origin Access Control** (S3); set *Viewer protocol policy* to
   *Redirect HTTP to HTTPS*; set *Default root object* to `index.html`. Apply the
   generated bucket policy that grants the distribution `s3:GetObject`.
3. **OIDC**: add IAM identity provider `token.actions.githubusercontent.com`
   (audience `sts.amazonaws.com`). Create a role trusting it with condition
   `token.actions.githubusercontent.com:sub = repo:OWNER/REPO:ref:refs/heads/main`,
   and an inline policy allowing `s3:PutObject`/`GetObject`/`DeleteObject`/`ListBucket`
   on the bucket and `cloudfront:CreateInvalidation` on the distribution.
4. Set the workflow variables/secrets as in the table above.

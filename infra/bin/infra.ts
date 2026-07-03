#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CheatsheetsStack } from '../lib/cheatsheets-stack';

const app = new cdk.App();

new CheatsheetsStack(app, 'JetBrainsAiCheatsheets', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    // CloudFront + ACM (us-east-1 certs) work from any region; us-east-1 keeps
    // an optional custom-domain certificate in the same stack.
    region: process.env.CDK_DEFAULT_REGION ?? 'us-east-1',
  },
  description: 'Private S3 + CloudFront (HTTPS) + GitHub OIDC role for the JetBrains AI cheat sheets',
});

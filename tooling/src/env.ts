import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { TOOLING_ROOT } from './paths.js';

/**
 * Load `tooling/.env` into `process.env` if it exists, so Bedrock auth vars
 * (`AWS_BEARER_TOKEN_BEDROCK` / `AWS_REGION` / AWS credentials) don't have to be
 * exported manually. Uses Node's built-in env-file parser (no dependency).
 *
 * Variables already present in the environment (e.g. exported in the shell or
 * injected by CI) take precedence over the file — so a stray `.env` placeholder
 * can't shadow a real key. Import this for its side effect before any client is
 * constructed.
 */
const envPath = resolve(TOOLING_ROOT, '.env');
if (existsSync(envPath)) {
  const preexisting = { ...process.env };
  process.loadEnvFile(envPath);
  for (const [key, value] of Object.entries(preexisting)) {
    if (value !== undefined) process.env[key] = value;
  }
}

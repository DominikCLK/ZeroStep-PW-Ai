import * as dotenv from 'dotenv';

dotenv.config({ override: true });

function requireEnvVariable(envVariable: string): string {
  const envVariableValue = process.env[envVariable];
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable ${envVariable} is not set.`);
  }

  return envVariableValue;
}

export const BASE_URL = requireEnvVariable('BASE_URL');
export const ZEROSTEP_TOKEN = requireEnvVariable('ZEROSTEP_TOKEN');
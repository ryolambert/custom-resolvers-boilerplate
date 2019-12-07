import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const { env } = process;

export const SHARD_INFO_API_URL = env.SHARD_INFO_API_URL;
export const BLOCK_INFO_API_URL = env.BLOCK_INFO_API_URL;

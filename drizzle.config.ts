import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from './lib/env';

export default defineConfig({
  out: './lib/database/migrations',
  schema: './lib/database/schema.ts',
  dialect: 'mysql',
  dbCredentials: { url: DATABASE_URL },
});

import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";

const DATABASE_URL = process.env.DATABASE_URL;

const database = drizzle({ connection: { uri: DATABASE_URL }});

export default database

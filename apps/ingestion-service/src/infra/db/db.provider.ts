import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
import { env } from "../../common/config/env.js";

export const db: NeonHttpDatabase = drizzle(env.DATABASE_URL);

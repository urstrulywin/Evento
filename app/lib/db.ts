import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
  var pgPool: Pool | undefined;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

// Create or reuse PostgreSQL pool
const pool =
  global.pgPool ??
  new Pool({
    connectionString,
  });

// Create Prisma adapter
const adapter = new PrismaPg(pool);

// Create PrismaClient (singleton)
const prisma = global.prisma ?? new PrismaClient({ adapter });

// Cache instances in development to avoid hot-reload connections
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
  global.pgPool = pool;
}

export default prisma;
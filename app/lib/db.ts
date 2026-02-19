// SPDX-License-Identifier: Apache-2.0
import "@dotenvx/dotenvx/config";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./prisma/client";

function createPrismaClient() {
  const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/sqlite.db" });
  return new PrismaClient({ adapter });
}

const g = globalThis as typeof globalThis & { __db__?: PrismaClient };

export const db = g.__db__ ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") g.__db__ = db;
process.on("beforeExit", () => void db.$disconnect());

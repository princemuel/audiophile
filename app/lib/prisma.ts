// SPDX-License-Identifier: Apache-2.0
import "@dotenvx/dotenvx/config";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./prisma/client";

var g = globalThis as typeof globalThis & { __db__?: PrismaClient };

var adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL || ":memory:" });

export var db = g.__db__ ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") g.__db__ = db;
process.on("beforeExit", () => void db.$disconnect());

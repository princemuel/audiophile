// SPDX-License-Identifier: Apache-2.0
import "@dotenvx/dotenvx/config";
import { PrismaLibSql } from "@prisma/adapter-libsql";

import { PrismaClient } from "./prisma/client";

var adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || ":memory:",
  authToken: process.env.DATABASE_TOKEN,
});
var DatabaseClient = new PrismaClient({ adapter });
var g = globalThis as typeof globalThis & { __db__?: typeof DatabaseClient };

export var db = g.__db__ ?? DatabaseClient;

if (process.env.NODE_ENV !== "production") g.__db__ = db;
process.on("beforeExit", () => void db.$disconnect());

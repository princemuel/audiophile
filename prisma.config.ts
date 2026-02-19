// SPDX-License-Identifier: Apache-2.0
import "@dotenvx/dotenvx/config";

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: { url: env("DATABASE_URL") },
  migrations: {
    path: "prisma/migrations",
    seed: `node --import=tsx prisma/seed.ts`,
  },
});

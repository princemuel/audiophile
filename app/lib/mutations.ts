import { db } from "@/lib/db";

import type { Prisma } from "./prisma/client";

export async function createOrder(data: Prisma.OrderCreateInput) {
  return db.order.create({ data, include: { orders: true } });
}

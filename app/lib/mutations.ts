import { db } from "@/lib/prisma";

import type { Prisma } from "./prisma/client";

export async function createOrder(data: Prisma.OrderCreateInput) {
  return db.order.create({ data, include: { orders: true } });
}

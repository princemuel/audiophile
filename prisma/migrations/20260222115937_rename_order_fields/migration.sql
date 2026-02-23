/*
  Warnings:

  - You are about to drop the column `emoneynumber` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `emoneypin` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `payment` on the `orders` table. All the data in the column will be lost.
  - Added the required column `payment_method` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "payment_account_number" TEXT,
    "payment_pin" TEXT,
    "shipping" DECIMAL NOT NULL DEFAULT 50.00,
    "total" DECIMAL NOT NULL
);
INSERT INTO "new_orders" ("address", "city", "country", "created_at", "email", "id", "name", "phone", "shipping", "total", "updated_at", "zipcode") SELECT "address", "city", "country", "created_at", "email", "id", "name", "phone", "shipping", "total", "updated_at", "zipcode" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE INDEX "orders_email_idx" ON "orders"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

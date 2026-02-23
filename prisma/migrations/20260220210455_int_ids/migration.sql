/*
  Warnings:

  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `order_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `order_id` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `product_id` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emoneyNumber` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `emoneyPin` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `orders` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `product_images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `product_images` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `product_id` on the `product_images` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `product_includes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `product_includes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `product_id` on the `product_includes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `category_id` on the `products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `related_products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `product_id` on the `related_products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `related_id` on the `related_products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `payment` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_categories" ("id", "name", "slug") SELECT "id", "name", "slug" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");
CREATE TABLE "new_order_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_order_items" ("id", "name", "order_id", "price", "product_id", "quantity") SELECT "id", "name", "order_id", "price", "product_id", "quantity" FROM "order_items";
DROP TABLE "order_items";
ALTER TABLE "new_order_items" RENAME TO "order_items";
CREATE INDEX "order_items_order_id_idx" ON "order_items"("order_id");
CREATE INDEX "order_items_product_id_idx" ON "order_items"("product_id");
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
    "payment" TEXT NOT NULL,
    "emoneynumber" TEXT,
    "emoneypin" TEXT,
    "shipping" DECIMAL NOT NULL DEFAULT 50.00,
    "total" DECIMAL NOT NULL
);
INSERT INTO "new_orders" ("address", "city", "country", "created_at", "email", "id", "name", "phone", "shipping", "total", "updated_at", "zipcode") SELECT "address", "city", "country", "created_at", "email", "id", "name", "phone", "shipping", "total", "updated_at", "zipcode" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE INDEX "orders_email_idx" ON "orders"("email");
CREATE TABLE "new_product_images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "kind" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,
    CONSTRAINT "product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_product_images" ("desktop", "id", "kind", "mobile", "product_id", "tablet") SELECT "desktop", "id", "kind", "mobile", "product_id", "tablet" FROM "product_images";
DROP TABLE "product_images";
ALTER TABLE "new_product_images" RENAME TO "product_images";
CREATE INDEX "product_images_product_id_idx" ON "product_images"("product_id");
CREATE UNIQUE INDEX "product_images_product_id_kind_key" ON "product_images"("product_id", "kind");
CREATE TABLE "new_product_includes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    CONSTRAINT "product_includes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_product_includes" ("id", "item", "product_id", "quantity") SELECT "id", "item", "product_id", "quantity" FROM "product_includes";
DROP TABLE "product_includes";
ALTER TABLE "new_product_includes" RENAME TO "product_includes";
CREATE INDEX "product_includes_product_id_idx" ON "product_includes"("product_id");
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "new" BOOLEAN NOT NULL DEFAULT false,
    "price" DECIMAL NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("category_id", "created_at", "description", "features", "id", "name", "new", "price", "slug", "updated_at") SELECT "category_id", "created_at", "description", "features", "id", "name", "new", "price", "slug", "updated_at" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");
CREATE INDEX "products_category_id_idx" ON "products"("category_id");
CREATE TABLE "new_related_products" (
    "product_id" INTEGER NOT NULL,
    "related_id" INTEGER NOT NULL,

    PRIMARY KEY ("product_id", "related_id"),
    CONSTRAINT "related_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "related_products_related_id_fkey" FOREIGN KEY ("related_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_related_products" ("product_id", "related_id") SELECT "product_id", "related_id" FROM "related_products";
DROP TABLE "related_products";
ALTER TABLE "new_related_products" RENAME TO "related_products";
CREATE INDEX "related_products_product_id_idx" ON "related_products"("product_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

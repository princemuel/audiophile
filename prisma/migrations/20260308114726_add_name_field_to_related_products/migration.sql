/*
  Warnings:

  - Added the required column `name` to the `related_products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_related_products" (
    "product_id" INTEGER NOT NULL,
    "related_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,

    PRIMARY KEY ("product_id", "related_id"),
    CONSTRAINT "related_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "related_products_related_id_fkey" FOREIGN KEY ("related_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_related_products" ("desktop", "mobile", "product_id", "related_id", "tablet") SELECT "desktop", "mobile", "product_id", "related_id", "tablet" FROM "related_products";
DROP TABLE "related_products";
ALTER TABLE "new_related_products" RENAME TO "related_products";
CREATE INDEX "related_products_product_id_idx" ON "related_products"("product_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

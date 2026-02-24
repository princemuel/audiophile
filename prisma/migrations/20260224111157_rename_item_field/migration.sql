/*
  Warnings:

  - You are about to drop the column `item` on the `product_includes` table. All the data in the column will be lost.
  - Added the required column `name` to the `product_includes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product_includes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "product_includes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_product_includes" ("id", "product_id", "quantity") SELECT "id", "product_id", "quantity" FROM "product_includes";
DROP TABLE "product_includes";
ALTER TABLE "new_product_includes" RENAME TO "product_includes";
CREATE INDEX "product_includes_product_id_idx" ON "product_includes"("product_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

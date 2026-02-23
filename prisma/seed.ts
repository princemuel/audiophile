import database from "./data.json" with { type: "json" };

import { RuleBuilder, walk } from "../app/helpers/normalize";
import { db } from "../app/lib/db";
import { ImageType } from "../app/lib/prisma/client";

const stripDotRule = new RuleBuilder()
  .whenKey(/(mobile|tablet|desktop)/)
  .whenType("string")
  .stopHere()
  .transform((v) =>
    (v as string).startsWith("./") ? (v as string).split("/").slice(2).join("/") : v,
  );

const clone = structuredClone(database);
const data = (walk(clone, [stripDotRule]) ?? []) as IProduct[];

async function main() {
  // 1. Upsert categories derived from the data
  const categories = [...new Set(data.map((p) => p.category))];

  for (const slug of categories) {
    await db.category.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        name: slug.charAt(0).toUpperCase() + slug.slice(1),
      },
    });
  }

  // 2. Upsert products (without relations first)
  for (const product of data) {
    const category = await db.category.findUniqueOrThrow({
      where: { slug: product.category },
    });

    await db.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        slug: product.slug,
        name: product.name,
        category_id: category.id,
        new: product.new,
        price: product.price,
        description: product.description,
        features: product.features,
        includes: { create: product.includes },
        images: {
          create: [
            { kind: ImageType.PRODUCT, ...product.image },
            { kind: ImageType.CATEGORY_PREVIEW, ...product.categoryImage },
            { kind: ImageType.GALLERY_1, ...product.gallery.first },
            { kind: ImageType.GALLERY_2, ...product.gallery.second },
            { kind: ImageType.GALLERY_3, ...product.gallery.third },
          ],
        },
      },
    });
  }

  // 3. Wire up related products (all products must exist first)
  for (const product of data) {
    const source = await db.product.findUniqueOrThrow({
      where: { slug: product.slug },
    });

    await Promise.all(
      product.others.map(async ({ slug }) => {
        const target = await db.product.findUniqueOrThrow({
          where: { slug },
        });

        // upsert avoids duplicate key errors on re-seed
        return db.relatedProduct.upsert({
          where: { product_id_related_id: { product_id: source.id, related_id: target.id } },
          update: {},
          create: { product_id: source.id, related_id: target.id },
        });
      }),
    );
  }
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());

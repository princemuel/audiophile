import { ImageType } from "@/lib/prisma/client";
import { db } from "../app/lib/db";
import data from "./data.json";

async function main() {
  // 1. Upsert categories derived from the data
  const categories = [...new Set(data.map((p) => p.category))];

  await db.category.createMany({
    data: categories.map((slug) => ({
      slug,
      name: slug.charAt(0).toUpperCase() + slug.slice(1),
    })),
  });

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
        includes: {
          create: product.includes.map(({ quantity, item }) => ({ quantity, item })),
        },
        images: {
          create: [
            { kind: ImageType.PRODUCT, ...toImageUrls(product.image) },
            { kind: ImageType.CATEGORY_PREVIEW, ...toImageUrls(product.categoryImage) },
            { kind: ImageType.GALLERY_1, ...toImageUrls(product.gallery.first) },
            { kind: ImageType.GALLERY_2, ...toImageUrls(product.gallery.second) },
            { kind: ImageType.GALLERY_3, ...toImageUrls(product.gallery.third) },
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
          where: {
            product_id_related_id: {
              product_id: source.id,
              related_id: target.id,
            },
          },
          update: {},
          create: { product_id: source.id, related_id: target.id },
        });
      }),
    );
  }
}

function toImageUrls({
  mobile,
  tablet,
  desktop,
}: {
  mobile: string;
  tablet: string;
  desktop: string;
}) {
  return { mobile, tablet, desktop };
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());

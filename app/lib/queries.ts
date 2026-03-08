import { db } from "@/lib/prisma";
import { ImageType } from "@/lib/prisma/enums";

export async function getProductBySlug(slug: string) {
  return db.product.findUniqueOrThrow({
    where: { slug },
    include: {
      category: true,
      images: true,
      includes: true,
      related_to: {
        include: {
          related: {
            include: {
              images: {
                where: { kind: ImageType.PRODUCT },
              },
            },
          },
        },
      },
    },
  });
}

export async function getProductsByCategory(slug: string) {
  return db.product.findMany({
    where: { category: { slug } },
    include: { images: { where: { kind: ImageType.CATEGORY_PREVIEW } } },
    orderBy: { new: "desc" },
  });
}

import { db } from "@/lib/db";

import type { Route } from "./+types/$category._index";

export async function loader({ params }: Route.LoaderArgs) {
  const { category: slug } = params;

  const response = await db.category.findUnique({
    where: { slug },
    include: {
      products: {
        orderBy: { new: "desc" },
        include: { images: { where: { kind: "CATEGORY_PREVIEW" } } },
      },
    },
  });

  if (!response) throw new Response("The requested resource was not found", { status: 404 });

  return { data: response };
}

export default function Page({ loaderData: { data } }: Route.ComponentProps) {
  return (
    <main>
      <h1 id="a11ty-headline">Name: {data.name}</h1>
    </main>
  );
}

import { db } from "@/lib/db";

import type { Route } from "./+types/$category.$slug";
import { Fence } from "@/components/fence";
import { Link, type MetaArgs, type MetaDescriptor, type MetaFunction } from "react-router";
import { withBase } from "@/lib/media";
import { tw } from "@/helpers/tailwind";
import { BestAudio } from "@/components/best-audio";

import gallery from "@/assets/styles/gallery.module.css";

type Loader = typeof loader;

export const meta: Route.MetaFunction = ({ loaderData, params }) => {
  const product = loaderData.data;
  //   description: product.description,
  //   keywords: ['E-Commerce', 'Audio Devices', product.category, product.name],
  //   openGraph: {
  //     type: 'article',
  //     title: `${product.name} • ${product.category}`,
  //     description: product.description,
  //     authors: ['Prince Muel'],
  //     publishedTime: new Date().toISOString(),
  //     url: new URL(`${params.category}/${params.slug,
  //     images: {
  //       url: product.categoryImage?.mobile,
  //       alt: product.name,
  //       type: 'image/jpeg',
  //       width: 640,
  //       height: 360,
  //     },
  //   },
  //   twitter: {
  //     title: `${product.name} • ${(product.category)}`,
  //     description: product.description,
  //     card: 'summary_large_image',
  //     site: '@iamprincemuel',
  //     creator: '@iamprincemuel',
  //     images: {
  //       url: product.categoryImage?.mobile,
  //       width: 640,
  //       height: 360,
  //       alt: product.name,
  //       type: 'image/jpeg',
  //     },
  //   },
  // })
  const categoryPreview = product.images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];
  return [
    { title: `${product.name} • ${product.category.slug}` },
    { name: "description", content: product.description },
    {
      name: "keywords",
      content: ["ecommerce", "audio devices", product.category.slug, product.name].join(),
    },

    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: new URL(
        `${product.category.slug}/${product.slug}`,
        import.meta.env.PUBLIC_SITE_URL,
      ).toString(),
    },
    { property: "og:title", content: `${product.name} • ${product.category.slug}` },
    { property: "og:image:url", content: categoryPreview.mobile },
    { property: "og:image:alt", content: product.name },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "640" },

    { property: "twitter:site", content: "@iamprincemuel" },
    { property: "twitter:creator", content: "@iamprincemuel" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: `${product.name} • ${product.category.slug}` },
    { property: "twitter:description", content: product.description },
    { property: "twitter:image:url", content: categoryPreview.mobile },
    { property: "twitter:image:alt", content: product.name },
    { property: "twitter:image:type", content: "image/jpeg" },
    { property: "twitter:image:width", content: "1200" },
    { property: "twitter:image:height", content: "640" },

    { property: "article:published_time", content: product.created_at.toISOString() },
    { property: "article:modified_time", content: product.updated_at.toISOString() },
  ];
};

export async function loader({ params }: Route.LoaderArgs) {
  const { category, slug } = params;

  const response = await db.product.findUnique({
    where: { slug },
    include: {
      category: { select: { slug: true } },
      images: {
        where: { kind: { in: ["CATEGORY_PREVIEW", "GALLERY_1", "GALLERY_2", "GALLERY_3"] } },
        select: { kind: true, mobile: true, tablet: true, desktop: true },
      },
      related_to: {
        include: {
          related: {
            include: {
              images: {
                where: { kind: "CATEGORY_PREVIEW" },
                select: { mobile: true, tablet: true, desktop: true },
              },
            },
          },
        },
      },
    },
  });

  if (!response || response.category.slug !== category)
    throw new Response("The requested resource was not found", { status: 404 });

  return {
    data: {
      ...response,
      images: response.images.map(withBase),
      related_to: response.related_to.map((r) => ({
        ...r,
        related: {
          ...r.related,
          images: r.related.images.map(withBase),
        },
      })),
    },
  };
}

export default function Page({ loaderData: { data } }: Route.ComponentProps) {
  const categoryPreview = data.images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];

  return (
    <Fence as="main" style={{ "--spacer": "calc(var(--spacing) * 28)" }} className="my-28">
      <Link
        to={`/${data.category.slug}`}
        className="inline-flex w-max text-sm font-medium text-black/50 hover:text-brand-500 focus:text-brand-500"
      >
        Go back
      </Link>
      <section className="flex flex-col items-center md:flex-row">
        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        <figure>
          <picture>
            <source media="(min-width: 64em)" srcSet={categoryPreview?.desktop} />
            <source media="(min-width: 48em)" srcSet={categoryPreview?.tablet} />
            <source media="(min-width: 36em)" srcSet={categoryPreview?.mobile} />
            <img
              src={categoryPreview?.mobile}
              alt={`Featured preview of ${data.name}`}
              width={700}
              height={475}
              className="h-full w-full object-cover"
            />
          </picture>
        </figure>
        <div>
          <em className="text-sm font-normal tracking-[0.6em] text-white/50 uppercase not-italic">
            New Product
          </em>
          <h1 id="a11ty-headline">Name: {data.name}</h1>
          <p>{data.description}</p>
        </div>
      </section>

      <section>
        <h2>Features</h2>
        {data.features.split("\n\n").map((para) => (
          <p key={para.charAt(1)}>{para}</p>
        ))}

        <div className={gallery.images}>
          {data.images
            .filter((img) => img.kind.startsWith("GALLERY"))
            .map((img) => (
              <figure key={img.kind} className="overflow-hidden rounded-lg">
                <picture>
                  <source media="(min-width: 64em)" srcSet={img.desktop} />
                  <source media="(min-width: 48em)" srcSet={img.tablet} />
                  <source media="(min-width: 36em)" srcSet={img.mobile} />
                  <img
                    src={img.mobile}
                    alt={`A snapshot of ${data.name}`}
                    className="size-full object-cover"
                  />
                </picture>
              </figure>
            ))}
        </div>
      </section>

      <section aria-labelledby="best-audio">
        <BestAudio />
      </section>
    </Fence>
  );
}

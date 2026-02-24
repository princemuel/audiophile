import { db } from "@/lib/db";

import type { Route } from "./+types/$category.$slug";
import { Fence } from "@/components/fence";
import { Link, type MetaArgs, type MetaDescriptor, type MetaFunction } from "react-router";
import { withBase } from "@/lib/media";

import { BestAudio } from "@/components/best-audio";

import gallery from "@/assets/styles/gallery.module.css";
import { hasValues } from "@/helpers/utils";
import { Divide } from "lucide-react";
import { capitalize } from "@/utils/strings";

export const meta: Route.MetaFunction = ({ loaderData, params }) => {
  const product = loaderData.data;

  const categoryPreview = product.images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];
  return [
    { title: `${product.name} • ${capitalize(product.category.slug)}` },
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
    { property: "og:title", content: `${product.name} • ${capitalize(product.category.slug)}` },
    { property: "og:image:url", content: categoryPreview.mobile },
    { property: "og:image:alt", content: product.name },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "640" },

    { property: "twitter:site", content: "@iamprincemuel" },
    { property: "twitter:creator", content: "@iamprincemuel" },
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:title",
      content: `${product.name} • ${capitalize(product.category.slug)}`,
    },
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
      includes: { select: { name: true, quantity: true } },
      related_to: {
        select: {
          mobile: true,
          tablet: true,
          desktop: true,
          related: {
            select: {
              slug: true,
              name: true,
              category: { select: { slug: true } },
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
        ...withBase(r),
        related: r.related,
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

      <section
        aria-labelledby="a11ty-headline"
        className="flex flex-col items-center md:flex-row"
      >
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
          {data.new ? (
            <em className="text-sm font-normal tracking-[0.6em] text-black/50 uppercase not-italic">
              New Product
            </em>
          ) : null}

          <h1 id="a11ty-headline">Name: {data.name}</h1>
          <p>{data.description}</p>
        </div>
      </section>

      <section
        aria-labelledby="features"
        className="flex flex-col justify-between gap-14 lg:flex-row"
      >
        <hgroup className="flex flex-col gap-8">
          <h2 id="features" className="text-4xl font-bold uppercase">
            Features
          </h2>

          {data.features.split("\n\n").map((para) => (
            <p key={para.charAt(1)}>{para}</p>
          ))}
        </hgroup>

        <div className="flex basis-full flex-col gap-8 sm:flex-row lg:flex-col">
          <h3 id="included" className="text-4xl font-bold uppercase">
            In the box
          </h3>

          {hasValues(data.includes) ? (
            <dl className="flex flex-col gap-2">
              {data.includes.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <dd className="font-bold text-brand-500"> {item.quantity}x</dd>
                  <dt>{item.name}</dt>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </section>

      <section aria-label="image gallery">
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
                <figcaption className="sr-only">An image preview of {data.name}</figcaption>
              </figure>
            ))}
        </div>
      </section>

      <section aria-labelledby="related" className="flex flex-col gap-14">
        <header className="flex items-center justify-center">
          <h2 id="related" className="text-3xl font-bold uppercase sm:text-4xl">
            You may also like
          </h2>
        </header>

        <ul className="grid max-w-4xl gap-6 md:grid-cols-3">
          {data.related_to.map((product) => {
            const other = product.related;

            return (
              <li
                key={other.slug}
                className="grid grid-rows-[320px_auto_auto] justify-items-center gap-8 overflow-hidden rounded-2xl pb-8 text-center md:grid-rows-[320px_auto_auto]"
              >
                <figure className="justify-self-stretch overflow-hidden rounded-lg">
                  <picture>
                    <source media="(min-width: 64em)" srcSet={product.desktop} />
                    <source media="(min-width: 40em)" srcSet={product.tablet} />
                    <source media="(min-width: 36em)" srcSet={product.mobile} />
                    <img
                      src={product.mobile}
                      alt={`A preview pic of ${other.name}`}
                      width={1080}
                      height={1120}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </picture>
                  <figcaption className="sr-only">An image preview of {data.name}</figcaption>
                </figure>

                <h3 id="related" className="text-xl font-bold uppercase">
                  {other.name}
                </h3>
                <Link
                  to={`/${other.category.slug}/${other.slug}`}
                  viewTransition
                  className="inline-block rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
                >
                  See Product
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <nav aria-label="Secondary"></nav>

      <section aria-labelledby="best-audio">
        <BestAudio />
      </section>
    </Fence>
  );
}

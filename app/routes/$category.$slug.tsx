import { Form, Link } from "react-router";

import { hasValues } from "@/helpers/utils";
import { db } from "@/lib/db";
import { withBase } from "@/lib/media";
import { capitalize } from "@/utils/strings";

import { BestAudio } from "@/components/best-audio";
import { Fence } from "@/components/fence";

import { routes } from "@/assets";
import gallery from "@/assets/styles/gallery.module.css";

import { IconArrowRight } from "@/assets/media/icons";
import type { Route } from "./+types/$category.$slug";

export const meta: Route.MetaFunction = ({ loaderData }) => {
  const product = loaderData.data;

  const category = product.images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];
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
    { property: "og:image:url", content: category.mobile },
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
    { property: "twitter:image:url", content: category.mobile },
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
  const image = data.images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];

  return (
    <Fence
      as="main"
      aria-labelledby="a11ty-headline"
      style={{ "--spacer": "calc(var(--spacing) * 36)" }}
      className="my-36"
    >
      <Link
        to={`/${data.category.slug}`}
        className="inline-flex w-max text-sm font-medium text-black/50 hover:text-brand-500 focus:text-brand-500"
      >
        Go back
      </Link>

      <section
        aria-labelledby="a11ty-headline"
        className="flex flex-col items-center gap-10 md:flex-row md:items-stretch lg:gap-20"
      >
        <figure className="flex-1 overflow-hidden rounded-lg">
          <picture>
            <source media="(min-width: 64em)" srcSet={image?.desktop} />
            <source media="(min-width: 48em)" srcSet={image?.tablet} />
            <source media="(min-width: 36em)" srcSet={image?.mobile} />
            <img
              src={image?.mobile}
              alt={`Featured preview of the ${data.name}`}
              width={700}
              height={475}
              className="size-full object-cover"
            />
          </picture>
        </figure>

        <div className="flex flex-col gap-6 sm:items-center sm:text-center md:flex-1 md:items-start md:gap-8 md:self-center md:text-left">
          {data.new ? (
            <em className="text-sm font-normal tracking-[0.6em] text-black/50 uppercase not-italic">
              New Product
            </em>
          ) : null}

          <h1
            id="a11ty-headline"
            className="w-min text-5xl font-bold whitespace-break-spaces uppercase"
          >
            {data.name}
          </h1>
          <p>{data.description}</p>

          <p className="text-lg font-bold uppercase">
            {Intl.NumberFormat(undefined, {}).format(data.price.d[0])}
          </p>

          <section aria-label="Call to Action" className="flex items-center gap-4">
            <Form className="flex items-center rounded-sm bg-gray-50">
              <button
                type="submit"
                name="increment"
                className="px-4 py-3 font-bold text-black/50 uppercase transition-colors duration-300 hover:bg-zinc-200 hover:text-brand-500 focus:text-brand-500"
              >
                &#45;
              </button>

              <output className="px-4 py-3 text-sm font-bold">{0}</output>
              <button
                type="submit"
                name="decrement"
                className="px-4 py-3 font-bold text-black/50 uppercase transition-colors duration-300 hover:bg-zinc-200 hover:text-brand-500 focus:text-brand-500"
              >
                &#43;
              </button>
            </Form>

            <Form>
              <button
                type="submit"
                className="inline-flex rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
              >
                Add to cart
              </button>
            </Form>
          </section>
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

      <section aria-label="product image gallery">
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

      <section aria-label="related products" className="flex flex-col gap-14">
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
                  className="inline-flex rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
                >
                  See Product
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <nav aria-label="Secondary" className="grid gap-20 sm:grid-cols-3 sm:gap-2 md:gap-7">
        {routes.slice(1).map((r) => (
          <Link
            key={r.text}
            to={r.url}
            viewTransition
            className="group relative grid h-48 grid-rows-2 place-items-center gap-2 rounded-lg bg-gray-50"
          >
            <figure className="aspect-square h-48">
              <img
                src={r.Icon}
                alt={r.text}
                width="200"
                height="200"
                className="size-full object-cover"
              />
              <figcaption className="sr-only">{r.text}</figcaption>
            </figure>

            <hgroup className="flex flex-col items-center gap-2 text-center uppercase">
              <h4 className="text-lg font-bold">{r.text}</h4>
              <p className="text flex items-center gap-2 text-sm font-bold transition-colors">
                <span className="text-black/50 group-hover:text-brand-500 group-focus:text-brand-500">
                  Shop
                </span>
                <IconArrowRight />
              </p>
            </hgroup>
          </Link>
        ))}
      </nav>

      <section
        aria-labelledby="best-audio"
        className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20"
      >
        <BestAudio />
      </section>
    </Fence>
  );
}

import { Fragment } from "react";
import { Link } from "react-router";

import { db } from "@/lib/prisma";
import { withBase } from "@/lib/media";

import { BestAudio } from "@/components/best-audio";
import { Fence } from "@/components/fence";

import { routes } from "@/assets";
import { IconArrowRight } from "@/assets/media/icons";

import { capitalize } from "@/utils/strings";
import type { Route } from "./+types/$category._index";

export const meta: Route.MetaFunction = ({ loaderData, params }) => {
  const data = loaderData.data;

  const category = data.products
    .filter((product) => product.category.slug === params.category)[0]
    .images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];

  return [
    { title: `${data.name} • Audiophilos` },
    { name: "description", content: `${capitalize(data.slug)} Page` },
    {
      name: "keywords",
      content: ["audio devices", "ecommerce", "audio device", "audio", data.name].join(),
    },

    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: new URL(`${data.slug}`, import.meta.env.PUBLIC_SITE_URL).toString(),
    },
    { property: "og:title", content: `${data.name} • Audiophilos` },
    { property: "og:image:url", content: category.mobile },
    { property: "og:image:alt", content: data.name },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "640" },

    { property: "twitter:site", content: "@iamprincemuel" },
    { property: "twitter:creator", content: "@iamprincemuel" },
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:title",
      content: `${data.name} • Audiophilos`,
    },
    { property: "twitter:description", content: `${capitalize(data.slug)} Page` },
    { property: "twitter:image:url", content: category.mobile },
    { property: "twitter:image:alt", content: data.name },
    { property: "twitter:image:type", content: "image/jpeg" },
    { property: "twitter:image:width", content: "1200" },
    { property: "twitter:image:height", content: "640" },
  ];
};

export async function loader({ params }: Route.LoaderArgs) {
  const { category: slug } = params;

  const response = await db.category.findUnique({
    where: { slug },
    include: {
      products: {
        orderBy: { new: "desc" },
        include: { images: { where: { kind: "CATEGORY_PREVIEW" } }, category: true },
      },
    },
  });

  if (!response) throw new Response("The requested resource was not found", { status: 404 });

  return {
    data: {
      ...response,
      products: response.products.map((product) => ({
        ...product,
        images: product.images.map(withBase),
      })),
    },
  };
}

export default function Page({ loaderData: { data } }: Route.ComponentProps) {
  return (
    <Fence
      as="main"
      aria-labelledby="a11ty-headline"
      style={{ "--spacer": "calc(var(--spacing) * 36)" }}
      className="mb-36"
    >
      <header className="full bg-black/90 py-8 max-lg:pt-36">
        <h1 id="a11ty-headline" className="text-center text-5xl font-bold text-white uppercase">
          {data.name}
        </h1>
      </header>

      <section aria-labelledby="products" className="flex flex-col gap-36">
        <h2 id="products" className="sr-only">
          PRODUCT LIST
        </h2>

        {data.products.map((item) => {
          const image = item.images.filter((img) => img.kind === "CATEGORY_PREVIEW")[0];
          return (
            <Fragment key={item.id}>
              <article className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:even:flex-row-reverse lg:gap-20">
                <figure className="flex-1 overflow-hidden rounded-lg">
                  <picture>
                    <source media="(min-width: 64em)" srcSet={image?.desktop} />
                    <source media="(min-width: 48em)" srcSet={image?.tablet} />
                    <source media="(min-width: 36em)" srcSet={image?.mobile} />
                    <img
                      src={image?.mobile}
                      alt={`Featured preview of the ${item.name}`}
                      width={700}
                      height={475}
                      className="size-full object-cover"
                    />
                  </picture>
                </figure>

                <div className="flex flex-col items-center gap-6 text-center md:flex-1 md:items-start md:gap-8 md:self-center md:text-left">
                  {item.new ? (
                    <em className="text-sm font-normal tracking-[0.6em] text-brand-500 uppercase not-italic">
                      New Product
                    </em>
                  ) : null}

                  <h3 className="w-min text-4xl font-bold whitespace-break-spaces uppercase">
                    {item.name}
                  </h3>

                  <p>{item.description}</p>

                  <Link
                    to={`/${data.slug}/${item.slug}`}
                    viewTransition
                    className="inline-flex rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors delay-0 duration-300 ease-in hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
                  >
                    See Product
                  </Link>
                </div>
              </article>
            </Fragment>
          );
        })}
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
              <p className="text flex items-center gap-2 text-sm font-bold transition-colors delay-0 duration-300 ease-in">
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

import { Fragment } from "react";
import { Link } from "react-router";

import { db } from "@/lib/db";

import { BestAudio } from "@/components/best-audio";
import { Fence } from "@/components/fence";

import { routes } from "@/assets";
import { IconArrowRight } from "@/assets/media/icons";

import { withBase } from "@/lib/media";
import type { Route } from "./+types/$category._index";

export async function loader({ params }: Route.LoaderArgs) {
  const { category: slug } = params;

  const response = await db.category.findUnique({
    where: { slug },
    include: {
      products: {
        // orderBy: { new: "desc" },
        include: { images: { where: { kind: "CATEGORY_PREVIEW" } } },
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
      <header className="full bg-black py-8 max-lg:pt-36">
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
                    <em className="text-sm font-normal tracking-[0.6em] text-black/50 uppercase not-italic">
                      New Product
                    </em>
                  ) : null}

                  <h3 className="w-min text-5xl font-bold whitespace-break-spaces uppercase">
                    {item.name}
                  </h3>

                  <p>{item.description}</p>

                  <Link
                    to={`/${data.slug}/${item.slug}`}
                    viewTransition
                    className="inline-flex rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
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

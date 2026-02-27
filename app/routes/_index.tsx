import { Link } from "react-router";

import { db } from "@/lib/db";

import { BestAudio } from "@/components/best-audio";
import { Fence } from "@/components/fence";

import { routes } from "@/assets";

import type { Route } from "./+types/_index";

export async function loader() {
  const data = await db.product.findFirst({
    where: { new: true, category: { slug: "headphones" } },
    include: {
      category: { select: { slug: true } },
      related_from: { select: { product: true } },
      images: { where: { kind: "PRODUCT" } },
    },
  });

  return data ?? ({} as NonNullable<typeof data>);
}

export default function Page({ loaderData: data }: Route.ComponentProps) {
  return (
    <Fence
      as="main"
      aria-labelledby="a11ty-headline"
      style={{ "--spacer": "calc(var(--spacing) * 36)" }}
      // className="mb-36"
    >
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <header className="full flex flex-col items-center gap-8 bg-black py-40 text-center *:max-lg:mx-auto lg:items-start lg:text-left">
        <em className="text-sm font-normal tracking-[0.6em] text-white/50 uppercase not-italic">
          New Product
        </em>

        <h1
          id="a11ty-headline"
          className="w-min text-4xl font-bold whitespace-break-spaces text-white uppercase md:text-6xl"
        >
          {data.name}
        </h1>

        <p className="max-w-100 text-base font-medium text-white/75">
          Experience natural, lifelike audio and exceptional build quality made for the
          passionate music enthusiast.
        </p>

        <Link
          to={`/${data.category.slug}/${data.slug}`}
          className="inline-flex w-max rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
        >
          See Product
        </Link>
      </header>

      <section>
        <div className="grid gap-20 sm:grid-cols-3 sm:gap-2 md:gap-8">
          {routes.slice(1).map((route) => (
            <Link key={route.text} to={route.url} className="relative grid">
              <figure></figure>
              {route.text}
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Featured Products" className="flex flex-col gap-16">
        <article className="relative overflow-y-hidden rounded-lg bg-brand-500">
          <h2 className="w-min text-4xl font-bold whitespace-break-spaces text-white uppercase md:text-6xl">
            ZX9 SPEAKER
          </h2>
          <p className="text-base font-normal text-white">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </p>
          <Link
            to="/speakers/zx9-speaker"
            className="inline-flex items-center justify-center rounded-sm bg-black px-8 py-3 text-sm font-bold text-white uppercase transition-colors"
          >
            See Product
          </Link>
        </article>

        <article className="rounded-lg">
          <h2 className="text-3xl font-bold text-black uppercase">ZX7 SPEAKER</h2>
          <Link
            to="/speakers/zx7-speaker"
            className="inline-flex items-center justify-center rounded-sm border border-black px-8 py-3 text-sm font-bold text-black uppercase transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            See Product
          </Link>
        </article>

        <article className="rounded-lg">
          <h2 className="text-3xl font-bold text-black uppercase">YX1 EARPHONES</h2>
          <Link
            to="/earphones/yx1-earphones"
            className="inline-flex items-center justify-center rounded-sm border border-black px-8 py-3 text-sm font-bold text-black uppercase transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            See Product
          </Link>
        </article>
      </section>

      <section
        aria-labelledby="best-audio"
        className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20"
      >
        <BestAudio />
      </section>
    </Fence>
  );
}

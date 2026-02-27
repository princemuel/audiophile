import { Link } from "react-router";

import { db } from "@/lib/db";

import { BestAudio } from "@/components/best-audio";
import { Fence } from "@/components/fence";

import { routes } from "@/assets";

import { IconArrowRight } from "@/assets/media/icons";
import { tw } from "@/helpers/tailwind";
import { resolveImage } from "@/lib/media";
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
      className="mb-36"
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
          className="inline-flex w-max rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors delay-0 duration-300 ease-in hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
        >
          See Product
        </Link>
      </header>

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

      <section aria-label="Featured Products" className="flex flex-col gap-16">
        <article
          style={{ "--image": `url(${resolveImage("desktop/pattern-circles.svg")})` }}
          className={tw(
            "grid gap-8 overflow-y-hidden rounded-lg px-8 py-12 md:grid-cols-2 md:gap-24",
            "bg-brand-500 bg-cover bg-position-[center_-9rem] bg-no-repeat",
            "md:bg-position-[-16rem_-3rem] md:px-24 md:pt-24 md:pb-0 lg:gap-16 lg:pl-12",
          )}
        >
          <figure className="h-48 max-w-xs place-self-center md:h-60 lg:h-96 lg:max-w-none lg:translate-y-9">
            <img
              src={resolveImage("home/desktop/image-speaker-zx9.png")}
              width="540"
              height="680"
              sizes="100vw"
              alt="zx9 speaker"
              className="size-full rounded-lg object-cover"
            />
          </figure>

          <div className="flex flex-col items-center gap-12 text-center md:my-auto md:items-start md:text-left lg:pb-24">
            <h2 className="w-min text-4xl font-bold whitespace-break-spaces text-white uppercase md:text-6xl">
              ZX9 SPEAKER
            </h2>

            <p className="max-w-[35ch] text-white">
              Upgrade to premium speakers that are phenomenally built to deliver truly
              remarkable sound.
            </p>

            <Link
              to="/speakers/zx9-speaker"
              className="inline-flex items-center justify-center rounded-sm bg-black px-8 py-3 text-sm font-bold text-white uppercase transition-colors delay-0 duration-300 ease-in hover:bg-neutral-700 focus:bg-neutral-700"
            >
              See Product
            </Link>
          </div>
        </article>

        <article className="rounded-lg">
          <h2 className="text-3xl font-bold text-black uppercase">ZX7 SPEAKER</h2>

          <Link
            to="/speakers/zx7-speaker"
            className="inline-flex items-center justify-center rounded-sm border border-black px-8 py-3 text-sm font-bold text-black uppercase transition-colors delay-0 duration-300 ease-in hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            See Product
          </Link>
        </article>

        <article className="rounded-lg">
          <h2 className="text-3xl font-bold text-black uppercase">YX1 EARPHONES</h2>

          <Link
            to="/earphones/yx1-earphones"
            className="inline-flex items-center justify-center rounded-sm border border-black px-8 py-3 text-sm font-bold text-black uppercase transition-colors delay-0 duration-300 ease-in hover:bg-black hover:text-white focus:bg-black focus:text-white"
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

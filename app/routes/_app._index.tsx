import { Link } from "react-router";

import { routes } from "@/assets";
import { IconArrowRight } from "@/assets/media/icons";
import { BestAudio } from "@/components/best-audio";
import { Fence } from "@/components/fence";
import { tw } from "@/helpers/tailwind";
import { db } from "@/lib/db";
import { resolveImage } from "@/lib/media";

import type { Route } from "./+types/_app._index";

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
      className="mb-40"
    >
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <header
        style={{
          "--image": `url("${resolveImage("home/mobile/image-header.jpg")}")`,
          "--image-md": `url("${resolveImage("home/tablet/image-header.jpg")}")`,
          "--image-lg": `url("${resolveImage("home/desktop/image-header.jpg")}")`,
        }}
        className={tw(
          "full items-center gap-8 bg-black/90 bg-center bg-no-repeat py-40 text-center",
          "max-lg:justify-items-center lg:items-start lg:text-left",
          "bg-(image:--image) sm:bg-(image:--image-md) lg:bg-(image:--image-lg)"
        )}
      >
        <em className="text-sm font-normal tracking-[0.6em] text-white/50 uppercase not-italic">
          New Product
        </em>

        <h1
          id="a11ty-headline"
          className="w-min text-4xl font-bold whitespace-break-spaces text-white uppercase md:text-6xl"
        >
          {data.name}
        </h1>

        <p className="max-w-[40ch] text-base font-medium text-white/75">
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>

        <Link
          to={`/${data.category.slug}/${data.slug}`}
          className="inline-flex w-max items-center justify-center rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors delay-0 duration-300 ease-in hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
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

      <section aria-label="Featured Products" className="flex flex-col gap-18">
        <article
          style={{ "--image": `url("${resolveImage("home/desktop/pattern-circles.svg")}")` }}
          className={tw(
            "grid gap-8 overflow-y-hidden rounded-lg bg-(image:--image) px-8 py-12 md:grid-cols-2 md:gap-24",
            "bg-brand-500 bg-cover bg-position-[center_-9rem] bg-no-repeat",
            "md:bg-position-[-16rem_-3rem] md:px-24 md:pt-24 md:pb-0 lg:gap-18 lg:pl-12"
          )}
        >
          <figure className="h-48 max-w-xs place-self-center md:h-60 lg:h-96 lg:max-w-none lg:translate-y-8">
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

            <p className="max-w-[40ch] text-white">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>

            <Link
              to="/speakers/zx9-speaker"
              className="inline-flex items-center justify-center rounded-sm bg-black px-8 py-3 text-sm font-bold text-white uppercase transition-colors delay-0 duration-300 ease-in hover:bg-neutral-700 focus:bg-neutral-700"
            >
              See Product
            </Link>
          </div>
        </article>

        <article
          style={{
            "--image": `url("${resolveImage("home/mobile/image-speaker-zx7.jpg")}")`,
            "--image-md": `url("${resolveImage("home/tablet/image-speaker-zx7.jpg")}")`,
            "--image-lg": `url("${resolveImage("home/desktop/image-speaker-zx7.jpg")}")`,
          }}
          className={tw(
            "rounded-lg bg-position-[center_right] bg-no-repeat px-10 py-36 md:px-20 md:py-24",
            "bg-(image:--image) bg-cover sm:bg-(image:--image-md) lg:bg-(image:--image-lg)"
          )}
        >
          <div className="flex flex-col items-start gap-12">
            <h2 className="text-3xl font-bold text-black uppercase">ZX7 SPEAKER</h2>

            <Link
              to="/speakers/zx7-speaker"
              className="inline-flex items-center justify-center rounded-sm border border-black px-8 py-3 text-sm font-bold text-black uppercase transition-colors delay-0 duration-300 ease-in hover:bg-black hover:text-white focus:bg-black focus:text-white"
            >
              See Product
            </Link>
          </div>
        </article>

        <article className="grid gap-18 md:auto-cols-fr md:grid-flow-col md:gap-4 lg:gap-8">
          <figure className="h-80 overflow-hidden rounded-lg">
            <picture>
              <source
                media="(min-width: 64em)"
                srcSet={resolveImage("home/desktop/image-earphones-yx1.jpg")}
              />
              <source
                media="(min-width: 40em)"
                srcSet={resolveImage("home/tablet/image-earphones-yx1.jpg")}
              />
              <source srcSet={resolveImage("home/mobile/image-earphones-yx1.jpg")} />
              <img
                src={resolveImage("home/mobile/image-earphones-yx1.jpg")}
                alt="Featured preview of the YX1 Earphone"
                width={640}
                height={360}
                className="size-full object-cover"
              />
            </picture>
          </figure>

          <div className="my-auto flex h-80 flex-col items-start justify-center gap-8 rounded-lg bg-zinc-50 px-8 py-10">
            <h2 className="text-3xl font-bold text-black uppercase">YX1 EARPHONES</h2>

            <Link
              to="/earphones/yx1-earphones"
              viewTransition
              className="inline-flex items-center justify-center rounded-sm border border-black px-8 py-3 text-sm font-bold text-black uppercase transition-colors delay-0 duration-300 ease-in hover:bg-black hover:text-white focus:bg-black focus:text-white"
            >
              See Product
            </Link>
          </div>
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

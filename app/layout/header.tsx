import { Fragment } from "react";
import { Link, NavLink } from "react-router";

import { routes } from "@/assets";
import { IconArrowRight, IconCart, IconHamburger, IconLogo } from "@/assets/media/icons";
import { Fence } from "@/components/fence";
import { tw } from "@/helpers/tailwind";

export function Header() {
  return (
    <header
      className="relative border-b border-white/10 bg-black/90"
      style={{ anchorName: "--css-nav-menu" }}
    >
      <Fence>
        <section className="flex items-center justify-between py-9">
          <button
            type="button"
            popoverTarget="nav-menu"
            popoverTargetAction="toggle"
            aria-haspopup="menu"
            aria-label="Open Mobile Navigation"
            aria-controls="nav-menu"
            className="text-white focus-visible:outline-2 lg:hidden"
          >
            <IconHamburger />
          </button>

          <Link
            to="/"
            viewTransition
            className="text-white transition-colors delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500"
          >
            <span className="sr-only">Go to Home</span>
            <IconLogo role="img" className="fill-current stroke-transparent" />
          </Link>

          <div
            id="nav-menu"
            popover="auto"
            className={tw([
              "absolute inset-x-0 top-[anchor(bottom)] w-full bg-white opacity-0",
              "rounded-b-lg shadow-md",
              "transition transition-discrete duration-300 ease-in-out",
              "open:grid open:opacity-100 starting:open:opacity-0",
              // "md:[all:unset]! lg:static! lg:contents!",
              "lg:static lg:inset-auto lg:m-0 lg:contents",
            ])}
            style={{ positionAnchor: "--css-nav-menu" }}
          >
            <nav
              aria-label="Primary"
              className="flex flex-col justify-around gap-12 max-lg:px-10 max-lg:py-16 md:flex-row"
            >
              {routes.map((r) => (
                <Fragment key={r.text}>
                  <NavLink
                    to={r.url}
                    className="group relative hidden h-48 grid-rows-2 place-items-center gap-2 rounded-lg bg-gray-50 first:hidden max-lg:grid"
                    viewTransition
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
                  </NavLink>

                  <NavLink
                    to={r.url}
                    className={tw([
                      "text-sm font-bold uppercase max-lg:hidden",
                      "transition-colors delay-0 duration-300 ease-in",
                      "text-white aria-[current=page]:text-brand-500",
                      "hover:text-brand-500 focus:text-brand-500",
                    ])}
                  >
                    {r.text}
                  </NavLink>
                </Fragment>
              ))}
            </nav>
          </div>

          <button
            type="button"
            className="group relative text-white hover:text-brand-500 focus:text-brand-500"
          >
            <span className="sr-only">Cart Menu</span>
            <IconCart className="fill-current" />
            <span className="absolute -top-1 -right-1 inline-flex size-4 items-center justify-center rounded-full border border-white bg-brand-500 text-2xs group-hover:bg-white group-hover:text-black group-focus:text-black">
              10
            </span>
          </button>
        </section>
      </Fence>
    </header>
  );
}

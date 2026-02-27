import { Link, NavLink } from "react-router";

import { routes } from "@/assets";
import { tw } from "@/helpers/tailwind";

import { IconCart, IconLogo } from "@/assets/media/icons";
import { Fence } from "@/components/fence";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav aria-label="Primary" className="relative w-full">
        <Fence>
          <section className="flex items-center justify-between py-9">
            <Link
              to="/"
              viewTransition
              className="text-white transition-colors delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500"
            >
              <span className="sr-only">Go to Home</span>
              <IconLogo role="img" className="fill-current stroke-transparent" />
            </Link>

            <div className="flex items-center gap-8">
              {routes.map((route) => (
                <NavLink
                  key={route.text}
                  to={route.url}
                  viewTransition
                  className={tw([
                    "text-sm font-bold uppercase transition-colors delay-0 duration-300 ease-in",
                    "text-white aria-[current=page]:text-brand-500",
                    "hover:text-brand-500 focus:text-brand-500",
                  ])}
                >
                  {route.text}
                </NavLink>
              ))}
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
      </nav>
    </header>
  );
}

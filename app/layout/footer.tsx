import { routes, social } from "@/assets";
import { IconLogo } from "@/assets/media/icons";
import { Fence } from "@/components/fence";

import { tw } from "@/helpers/tailwind";
import styles from "@/layout/footer.module.css";
import { Link, NavLink } from "react-router";

export function Footer() {
  return (
    <Fence as="footer" className="bg-black/90">
      <section className="relative flex flex-col gap-8 py-36 text-white/75 before:absolute before:top-0 before:left-1/2 before:h-1 before:w-24 before:-translate-x-1/2 before:bg-brand-500 before:content-[''] before:md:left-0 before:md:translate-x-0">
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left lg:flex-row lg:justify-between">
          <Link
            to="/"
            viewTransition
            className="text-white transition-colors delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500"
          >
            <span className="sr-only">Go to Home</span>
            <IconLogo role="img" className="fill-current stroke-transparent" />
          </Link>

          <nav
            aria-label="Tertiary"
            className="flex flex-col items-center gap-6 md:flex-row md:gap-8"
          >
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
          </nav>
        </div>

        <div className={styles.footer}>
          <p className={tw("text-white/75", styles.info)}>
            Audiophilos is an all-in-one stop shop to fulfill your audio needs. We're a small
            team of music lovers and sound specialists who are devoted to helping you get the
            most out of your personal audio equipment. Come and visit our demo facility - we're
            open 7 days a week
            <span className="text-white"> 👋</span>
          </p>

          <p className={tw("font-bold text-white/50", styles.copy)}>
            Copyright &copy; {new Date().getFullYear()} Audiophilos Inc.
          </p>

          <ul
            className={tw("flex items-center gap-4", styles.social)}
            aria-label="Social Links"
          >
            {social.map((link) => {
              return (
                <li
                  key={link.text}
                  className="text-white transition-colors delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500"
                  title={`Visit my ${link.text} profile`}
                >
                  <a
                    href={link.url}
                    aria-label={link.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fill-current"
                  >
                    <span className="sr-only">{link.text}</span>
                    <link.Icon role="img" className="text-2xl" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Fence>
  );
}

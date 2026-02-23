import { Fence } from "@/components/fence";

import { tw } from "@/helpers/tailwind";
import styles from "@/layout/footer.module.css";

export function Footer() {
  return (
    <footer className="bg-black">
      <Fence>
        <section>
          <div></div>
          <div className={tw("", styles.footer)}>
            <p className="text-base text-white/75">
              Audiophilos is an all-in-one stop to fulfill your audio needs. We're a small team
              of music lovers and sound specialists who are devoted to helping you get the most
              out of your personal audio equipment. Come and visit our demo facility - we're
              open 7 days a week
              <span className="text-white"> 👋</span>
            </p>
          </div>
        </section>
      </Fence>
    </footer>
  );
}

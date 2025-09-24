import styles from '@/assets/styles/hero.module.scss';
import {
  BestAudioGear,
  Container,
  FirstFeaturedProduct,
  PageLinks,
  ProductShowcase,
  SecondFeaturedProduct,
  ThirdFeaturedProduct,
} from '@/components';
import { defineMeta } from '@/config';
import { tw } from '@/helpers';
import type { Metadata } from 'next';

export const metadata: Metadata = defineMeta({ title: 'Home' });

export default function Page() {
  return (
    <main aria-labelledby='heading' className='flex flex-col gap-48'>
      <div className={tw('bg-neutral-950', styles.wrapper)}>
        <Container>
          <ProductShowcase />
        </Container>
      </div>

      <section>
        <Container>
          <PageLinks />
        </Container>
      </section>

      <section aria-label='Featured Products' className='flex flex-col gap-16'>
        <Container>
          <FirstFeaturedProduct />
        </Container>

        <Container>
          <SecondFeaturedProduct />
        </Container>

        <Container>
          <ThirdFeaturedProduct />
        </Container>
      </section>

      <section>
        <Container>
          <BestAudioGear />
        </Container>
      </section>
    </main>
  );
}

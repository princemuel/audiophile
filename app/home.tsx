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
import { cn } from '@/helpers';

function HomeTemplate() {
  return (
    <>
      <div className={cn('bg-neutral-950', styles.wrapper)}>
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
    </>
  );
}

export { HomeTemplate };

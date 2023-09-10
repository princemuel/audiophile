import styles from '@/assets/styles/hero.module.scss';
import {
  BestAudioGear,
  Container,
  FeaturedOne,
  FeaturedThree,
  FeaturedTwo,
  Hero,
  PageLinks,
} from '@/components';
import { cn } from '@/helpers';

const HomeTemplate = () => {
  return (
    <>
      <div className={cn('bg-neutral-950', styles.wrapper)}>
        <Container>
          <Hero />
        </Container>
      </div>

      <section>
        <Container>
          <PageLinks />
        </Container>
      </section>

      <section aria-label='Featured Products' className='flex flex-col gap-16'>
        <Container>
          <FeaturedOne />
        </Container>

        <Container>
          <FeaturedTwo />
        </Container>

        <Container>
          <FeaturedThree />
        </Container>
      </section>

      <section>
        <Container>
          <BestAudioGear />
        </Container>
      </section>
    </>
  );
};

export { HomeTemplate };

import styles from '@/assets/styles/hero.module.scss';
import {
  BestAudioGear,
  CategoryLinks,
  FeaturedOne,
  FeaturedThree,
  FeaturedTwo,
  Hero,
} from '@/components';
import { cn } from '@/lib';

const HomeTemplate = () => {
  return (
    <>
      <section className={cn('bg-neutral-950', styles.wrapper)}>
        <div className={'h-container'}>
          <Hero />
        </div>
      </section>

      <section>
        <div className={cn('h-container')}>
          <CategoryLinks />
        </div>
      </section>

      <section aria-label='Featured Products' className='flex flex-col gap-16'>
        <div className={'h-container'}>
          <FeaturedOne />
        </div>
        <div className={'h-container'}>
          <FeaturedTwo />
        </div>
        <div className={'h-container'}>
          <FeaturedThree />
        </div>
      </section>

      <section>
        <div className={'h-container'}>
          <BestAudioGear />
        </div>
      </section>
    </>
  );
};

export { HomeTemplate };

import {
  BestAudioGear,
  CategoryLinks,
  FeaturedOne,
  FeaturedThree,
  FeaturedTwo,
} from '@/components';
import { cn } from '@/lib';

interface Props {}

const HomeTemplate = (props: Props) => {
  return (
    <>
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

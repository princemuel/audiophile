import { BestAudioGear, CategoryLinks } from '@/components';
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

      <section>
        <div className={cn('h-container')}>
          <BestAudioGear />
        </div>
      </section>
    </>
  );
};

export { HomeTemplate };

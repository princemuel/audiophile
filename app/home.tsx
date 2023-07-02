import { BestAudioGear, CategoryLinks, ZX9Speaker } from '@/components';
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
        <div className={cn('flex flex-col gap-20 h-container')}>
          <ZX9Speaker />
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

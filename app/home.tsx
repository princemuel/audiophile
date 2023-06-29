import { icons, links } from '@/common';
import { BestAudioGear, ResponsiveImage, Text } from '@/components';
import { capitalize, cn } from '@/lib';
import Link from 'next/link';

interface Props {}

const HomeTemplate = (props: Props) => {
  return (
    <>
      <section className={cn('h-container')}>
        <ul>
          {links.routes.slice(1).map((route) => (
            <li key={route.id}>
              <Link href={route.url}>
                <ResponsiveImage
                  src={route.image}
                  width={'438'}
                  height={'380'}
                  alt={capitalize(route.text)}
                />

                <div className='flex flex-col gap-6'>
                  <Text uppercase>{route.text}</Text>

                  <div className='flex items-center gap-6'>
                    <Text uppercase>Shop</Text>
                    <icons.chevron.right />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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

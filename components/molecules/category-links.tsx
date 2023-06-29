import { icons, links } from '@/common';
import { capitalize } from '@/lib';
import Link from 'next/link';
import { Button, ResponsiveImage, Text } from '../atoms';

const CategoryLinks = () => {
  return (
    <div className='grid grid-cols-1 gap-32 sm:grid-cols-3 sm:gap-4 md:gap-12'>
      {links.routes.slice(1).map((route) => (
        <Link
          key={route.id}
          href={route.url}
          className='relative block h-full rounded-brand bg-zinc-50 pb-8'
        >
          <ResponsiveImage
            src={route.image}
            width={'144'}
            height={'144'}
            alt={capitalize(route.text)}
            className=''
            container='w-auto h-auto flex items-center justify-center -translate-y-1/3'
          />

          <div className='-mt-20 flex flex-col items-center gap-6'>
            <Text as='h4' variant={'primary'} size={'sm'} weight={'bold'}>
              {route.text}
            </Text>

            <Button type='button' variant={'chevron'} size={'none'}>
              <span>Shop</span>
              <icons.chevron.right />
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { CategoryLinks };

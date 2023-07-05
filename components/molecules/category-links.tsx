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
          className='group relative block h-full rounded-brand bg-zinc-50 pb-8'
        >
          <ResponsiveImage
            src={route.image}
            width={'200'}
            height={'200'}
            alt={capitalize(route.text)}
            className='flex w-auto -translate-y-1/4 items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-1/3'
          />

          {/* !! HACK: Refactor this later. (negative margin) */}
          <div className='-mt-28 flex flex-col items-center gap-6'>
            <Text as='h4' variant={'primary'} size={'sm'} weight={'bold'}>
              {route.text}
            </Text>

            <Button
              type='button'
              variant={'text-primary/50'}
              size={'none'}
              className='hover:animate-pulse'
            >
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

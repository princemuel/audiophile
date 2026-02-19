import { icons } from '@/common';
import { capitalize, tw } from '@/helpers';
import NextLink from 'next/link';
import { forwardRef } from 'react';
import { Button, NextImage, Text } from '../atoms';
interface Props {
  route: IRoute;
}
export const PageLink = forwardRef(({ route, className, ...rest }, forwardedRef) => (
  // using classname to overwrite the image height
  <NextLink
    {...rest}
    href={route.url}
    className={tw(
      'group relative grid h-48 grid-rows-2 place-items-center gap-2 rounded-lg bg-gray-50',
      className
    )}
    ref={forwardedRef}
  >
    <figure className={tw('aspect-square h-48', className)}>
      <NextImage
        src={route.icon}
        width='200'
        height='200'
        alt={capitalize(route.text)}
        className='h-full w-full object-cover'
      />
    </figure>

    <div className='space-y-2 text-center'>
      <Text as='h4' variant='monochrome' size='small' weight='bold'>
        {route.text}
      </Text>

      <Button type='button' variant='accent' className='gap-2'>
        <Text
          as='span'
          size='xx-small'
          weight='bold'
          className='group-hover:text-inherit group-focus:text-inherit'
        >
          Shop
        </Text>
        <icons.chevron.right />
      </Button>
    </div>
  </NextLink>
)) as ForwardRefComponent<'a', Props>;

PageLink.displayName = 'PageLink';

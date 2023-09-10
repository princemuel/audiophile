import { icons } from '@/common';
import { capitalize } from '@/helpers';
import NextLink from 'next/link';
import { Button, NextImage, Text } from '../atoms';
interface Props {
  route: IRoute;
}
function PageLink({ route }: Props) {
  return (
    <NextLink
      href={route.url}
      className='group relative grid h-48 grid-rows-2 place-items-center gap-2 rounded-brand bg-zinc-50'
    >
      <figure className='h-48 w-48'>
        <NextImage
          src={route.icon}
          width={'200'}
          height={'200'}
          alt={capitalize(route.text)}
          className='h-full w-full object-cover'
        />
      </figure>

      <div className='> * + * space-y-2 text-center'>
        <Text as='h4' variant={'monochrome'} size={'small'} weight={'bold'}>
          {route.text}
        </Text>

        <Button type='button' variant={'accent'} className='gap-2'>
          <Text
            as='span'
            size={'xx-small'}
            weight={'bold'}
            className='group-hover:text-inherit group-focus:text-inherit'
          >
            Shop
          </Text>
          <icons.chevron.right />
        </Button>
      </div>
    </NextLink>
  );
}
export { PageLink };

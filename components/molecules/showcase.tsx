import NextLink from 'next/link';
import { Button, Text } from '../atoms';

export function ProductShowcase() {
  return (
    <section className='py-40'>
      <div className='flex flex-col items-center gap-7 text-center lg:items-start lg:text-left'>
        <Text
          as='p'
          // variant={'brand'}
          size={'x-small'}
          weight={'regular'}
          modifier={'white/50'}
          aria-live='polite'
        >
          New Product
        </Text>

        <Text
          as='h3'
          modifier='inverted'
          size={'3xl'}
          weight='bold'
          className='w-[min-content] whitespace-break-spaces'
        >
          XX99 Mark II Headphones
        </Text>

        <Text as='p' className='max-w-[40ch] text-white/75'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>

        <Button type='button' variant={'primary'} size={'medium'} asChild>
          <NextLink href={`/headphones/xx99-mark-two-headphones`}>
            See Product
          </NextLink>
        </Button>
      </div>
    </section>
  );
}

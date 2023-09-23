import NextLink from 'next/link';
import { Button, Text } from '../atoms';

interface Props {
  product: IProduct;
}

export const ProductCategoryCard = ({ product }: Props) => {
  return (
    <article className='flex flex-col items-center gap-10 md:flex-row md:items-stretch md:even:flex-row-reverse lg:gap-20'>
      <figure className='flex-1 overflow-hidden rounded-lg'>
        <picture>
          <source
            media='(min-width: 64em)'
            srcSet={product?.categoryImage?.desktop}
          />
          <source
            media='(min-width: 36em)'
            srcSet={product?.categoryImage?.tablet}
          />
          <source srcSet={product?.categoryImage?.mobile} />
          <img
            src={product?.categoryImage?.mobile}
            alt={`Featured preview of ${product?.name}`}
            width={700}
            height={475}
            placeholder='blur'
            className='h-full w-full object-cover'
          />
        </picture>
      </figure>

      <div className='flex flex-col items-center gap-6 text-center md:flex-1 md:items-start md:gap-8 md:self-center md:text-left'>
        {product?.new && (
          <Text
            as='p'
            variant={'brand'}
            size={'x-small'}
            weight={'regular'}
            aria-live='polite'
          >
            New Product
          </Text>
        )}

        <Text
          as='h3'
          variant={'monochrome'}
          size={'2xl'}
          weight={'bold'}
          className='w-[min-content] whitespace-break-spaces'
        >
          {product?.name}
        </Text>

        <Text as='p'>{product?.description}</Text>

        <Button type='button' variant={'primary'} size={'medium'} asChild>
          <NextLink href={`/${product.category}/${product?.slug}`}>
            See Product
          </NextLink>
        </Button>
      </div>
    </article>
  );
};

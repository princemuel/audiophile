import { formatAmount } from '@/helpers';
import { Text } from '../atoms';
import { AddToCartButton, ProductCardControls } from './cart-controls';

interface Props {
  product: IProduct;
}

export const ProductDetailCard = ({ product }: Props) => {
  return (
    <article className='flex flex-col items-center gap-10 md:flex-row md:items-stretch lg:gap-20'>
      <figure className='flex-1 overflow-hidden rounded-lg'>
        <picture>
          <source media='(min-width: 64em)' srcSet={product?.categoryImage?.desktop} />
          <source media='(min-width: 48em)' srcSet={product?.categoryImage?.mobile} />
          <source media='(min-width: 36em)' srcSet={product?.categoryImage?.tablet} />
          <source srcSet={product?.categoryImage?.mobile} />
          <img
            src={product?.categoryImage?.mobile}
            alt={`Featured preview of ${product?.name}`}
            width={700}
            height={475}
            className='h-full w-full object-cover'
          />
        </picture>
      </figure>

      <div className='flex flex-col gap-6 sm:items-center sm:text-center md:flex-1 md:items-start md:gap-8 md:self-center md:text-left'>
        {product?.new && (
          <Text as='p' variant='brand' size='x-small' weight='regular' aria-live='polite'>
            New Product
          </Text>
        )}

        <Text
          as='h1'
          variant='monochrome'
          size='2xl'
          weight='bold'
          className='w-[min-content] whitespace-break-spaces'
        >
          {product?.name}
        </Text>

        <Text as='p'>{product?.description}</Text>

        <Text as='p' variant='monochrome' size='small' weight='bold'>
          {formatAmount(product?.price)}
        </Text>

        <div className='flex items-center gap-4'>
          <div className='flex items-center rounded-sm bg-gray-50'>
            <ProductCardControls product={product} />
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
};

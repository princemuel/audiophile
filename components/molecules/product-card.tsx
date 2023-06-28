import { cn, formatPrice } from '@/lib';
import { Button, ResponsiveImage, Text } from '../atoms';

interface Props {
  product: IProduct;
  priority: boolean;
  cart?: boolean;
}

const ProductCard = ({ product, priority, cart }: Props) => {
  return (
    <article className={cn('flex items-center gap-20')}>
      <ResponsiveImage
        src={product.categoryImage.desktop}
        alt={product.name}
        priority={priority}
        sizes='100vw'
        style={{ width: 'auto' }}
        container='flex-1 rounded-brand overflow-clip'
      />

      <div className={cn('flex flex-1 flex-col gap-12')}>
        {product?.new && (
          <Text
            as='h4'
            variant={'secondary'}
            size={'sx'}
            uppercase
            aria-live='polite'
          >
            New Product
          </Text>
        )}

        <Text
          as='h1'
          variant={'primary'}
          size={'2xl'}
          weight={'bold'}
          aria-live='polite'
        >
          {product?.name}
        </Text>

        <Text as='p' variant={'primary/50'}>
          {product?.description}
        </Text>

        {cart && (
          <Text as='p' variant={'primary'}>
            {formatPrice(product?.price)}
          </Text>
        )}

        <div className='flex items-center gap-6'>
          {cart ? (
            <>
              <div className='flex items-center gap-4 bg-zinc-50'>
                <Button type='button' variant={'counter'} size={'sm'}>
                  <span>&#x2212;</span>
                </Button>
                <Text
                  as='output'
                  variant={'primary'}
                  size={'xs'}
                  weight={'bold'}
                >
                  1
                </Text>
                <Button type='button' variant={'counter'} size={'sm'}>
                  &#43;
                </Button>
              </div>
              <Button type='button' uppercase={true}>
                Add to cart
              </Button>
            </>
          ) : (
            <Button
              // @ts-expect-error
              href={`${product.category}/${product?.slug}`}
              uppercase={true}
            >
              See Product
            </Button>
          )}
          {/* <Button type='button' variant={'neutral'}>
            Add to cart
          </Button>
          <Button type='button' variant={'chevron'} size={'none'}>
            <span>Shop</span>
            <icons.chevron.right />
          </Button> */}
        </div>
      </div>
    </article>
  );
};

export { ProductCard };

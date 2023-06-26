import { cn, formatPrice } from '@/lib';
import { Button, ResponsiveImage, Text } from '../atoms';

interface Props {
  product: IProduct;
  priority: boolean;
  details?: boolean;
}

const ProductCardB = ({ product, priority }: Props) => {
  return (
    <article className={cn('')}>
      <ResponsiveImage
        src={product.categoryImage.desktop}
        alt={product.name}
        priority={priority}
        sizes='100vw'
        style={{ width: 'auto' }}
      />

      <div className={cn('')}>
        {product?.new && <Text>New Product</Text>}

        <Text as='h2' variant={'primary'}>
          {product?.name}
        </Text>

        <Text as='p' variant={'primary'}>
          {product?.description}
        </Text>
        <Text as='p' variant={'primary'}>
          {formatPrice(product?.price)}
        </Text>

        <div className='flex items-center gap-6'>
          <div className='flex gap-4'>
            <Button type='button'>&#x2212;</Button>
            <output>1</output>
            <Button type='button'>&#43;</Button>
          </div>
          <Button type='button'>Add to cart</Button>
        </div>
      </div>
    </article>
  );
};

export { ProductCardB };

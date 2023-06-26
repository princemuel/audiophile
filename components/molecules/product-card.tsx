import { cn } from '@/lib';
import { Button, ResponsiveImage, Text } from '../atoms';

interface Props {
  product: IProduct;
  priority: boolean;
}

const ProductCard = ({ product, priority }: Props) => {
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

        {/* @ts-expect-error  */}
        <Button href={`${product.category}/${product?.slug}`}>
          See Product
        </Button>
      </div>
    </article>
  );
};

export { ProductCard };

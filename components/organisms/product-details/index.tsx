import { FlowChild } from 'components/atoms';
import {
  ProductCard,
  ProductFeatures,
  ProductGallery,
} from 'components/molecules';

import { OtherProducts } from 'components/organisms';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <FlowChild
      aria-label={`${product?.name} Details`}
      spacer='5rem'
      className='flow'
    >
      <ProductCard
        variant='article'
        product={product}
        isPriority={true}
        direction='row'
        page='slug'
      />
      <FlowChild
        as='article'
        aria-label={`${product?.name} Features`}
        spacer='10rem'
      >
        <ProductFeatures
          features={product?.features}
          includedItems={product?.includes}
        />
      </FlowChild>

      <FlowChild
        as='article'
        aria-label={`Different pictures of ${product?.name}`}
        spacer='10rem'
      >
        <ProductGallery gallery={product?.gallery} alt={product?.name} />
      </FlowChild>

      <FlowChild
        as='article'
        aria-label='Other Similar Products'
        spacer='10rem'
      >
        <OtherProducts
          products={product?.others}
          category={product?.category}
        />
      </FlowChild>
    </FlowChild>
  );
};

export { ProductDetails };

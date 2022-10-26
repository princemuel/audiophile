import { FlowChild } from 'components/atoms';
import { ProductCard } from 'components/molecules';

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
        variant='div'
        product={product}
        isPriority={true}
        direction='row'
        page='slug'
      />
      <FlowChild aria-label={`${product?.name} Features`} spacer='10rem'>
        {/* <ProductFeatures
          features={product?.features}
          includedItems={product?.includes}
          aria-label='Items Included'
        /> */}
      </FlowChild>

      <FlowChild
        aria-label={`Different pictures of ${product?.name}`}
        spacer='10rem'
      >
        {/* <ProductGallery gallery={product?.gallery} /> */}
      </FlowChild>

      <FlowChild aria-label='Other Similar Products' spacer='10rem'>
        <OtherProducts
          products={product?.others}
          category={product?.category}
        />
      </FlowChild>
    </FlowChild>
  );
};

export { ProductDetails };

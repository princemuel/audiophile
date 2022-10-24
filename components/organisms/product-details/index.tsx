import { FlowChild } from 'components/atoms';
import { ProductCard } from 'components/molecules';

import { OtherProducts } from 'components/organisms';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <FlowChild aria-label={`${product?.name} Details`} spacer='5rem'>
      <ProductCard product={product} isPriority={true} direction='row' />
      {/* PRODUCT FEATURES */}
      {/* PRODUCT GALLERY */}
      <FlowChild aria-label="This Product's Features" spacer='10rem'>
        {/* FEATURES */}
      </FlowChild>

      <FlowChild aria-label='Items Included' spacer='10rem'>
        {/* IN THE BOX */}
      </FlowChild>

      <FlowChild aria-label='Different pictures of the Product' spacer='10rem'>
        {/* PRODUCT GALLERY */}
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

import Head from 'next/head';
import type { IProduct, NextPage } from 'types';

type Props = {
  product: IProduct;
};

const ProductPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Audiophile E-Commerce - product.name`}</title>
      </Head>
      {/* <ProductPageTemplate product={product} /> */}
    </>
  );
};

export default ProductPage;

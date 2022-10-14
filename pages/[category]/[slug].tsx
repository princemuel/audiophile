import { ProductTemplate } from 'components';
import { getProductBySlug, getProductPaths, return_url } from 'lib';
import Head from 'next/head';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferNextPropsType,
  IProduct,
  NextPage,
  Params,
} from 'types';

type Props = InferNextPropsType<typeof getStaticProps>;

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content={`${product?.description}`}
          key='description'
        />
        <meta
          property='og:description'
          content={`${product?.description}`}
          key='og:description'
        />
        <meta property='og:image' content={product?.categoryImage?.mobile} />
        <meta property='og:title' content={`${product?.name}`} key='title' />
        <title>{`Audiophile | ${product?.name}`}</title>
      </Head>
      <ProductTemplate product={product} />
    </>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps<{ product: IProduct }> = async (
  context
) => {
  const url = return_url();
  const { params } = context as { params: Params };

  try {
    const product = (await getProductBySlug(params.slug, url)) as IProduct;
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = return_url();

  const productPaths = await getProductPaths(url);
  const paths = productPaths?.map((path) => ({
    params: { category: path?.category, slug: path?.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

import { getProductBySlug, getProductPaths } from 'lib';
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
        <title>{`Audiophile E-Commerce - ${product.name}`}</title>
      </Head>
    </>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps<{ product: IProduct }> = async (
  context
) => {
  const { params } = context as { params: Params };

  try {
    const product = (await getProductBySlug(params.slug)) as IProduct;
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
  const productPaths = await getProductPaths();
  const paths = productPaths.map((path) => ({
    params: { category: path.category, slug: path.slug },
  }));

  return {
    paths,
    fallback: true,
    revalidate: 86400,
  };
};

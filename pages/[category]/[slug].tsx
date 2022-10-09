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
        <title>{`Audiophile E-Commerce - ${product?.name}`}</title>
      </Head>
    </>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps<{ product: IProduct }> = async (
  context
) => {
  const url = return_url(context) as string;
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

export const getStaticPaths: GetStaticPaths = async (context) => {
  const url = return_url(context) as string;

  const productPaths = await getProductPaths(url);
  const paths = productPaths.map((path) => ({
    params: { category: path.category, slug: path.slug },
  }));

  return {
    paths,
    fallback: true,
    revalidate: 86400,
  };
};

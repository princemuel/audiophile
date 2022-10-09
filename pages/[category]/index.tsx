import { getCategories, getProductsByCategory } from 'lib';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferNextPropsType,
  IProducts,
  NextPage,
  Params,
} from 'types';

type Props = InferNextPropsType<typeof getStaticProps>;

const CategoryPage: NextPage<Props> = () => {
  const {
    query: { category },
  } = useRouter();

  return (
    <>
      <Head>
        <title>{`Audiophile E-Commerce - ${category}`}</title>
      </Head>
      {/* CategoryPageTemplate products={products} */}
    </>
  );
};

export default CategoryPage;

export const getStaticProps: GetStaticProps<{ products: IProducts }> = async (
  context
) => {
  const { params } = context as { params: Params };

  try {
    const products = await getProductsByCategory(params.category);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: true,
    revalidate: 86400,
  };
};

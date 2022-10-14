import { CategoryTemplate } from 'components';
import { getCategories, getProductsByCategory, return_url } from 'lib';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferNextPropsType,
  IProducts,
  NextPageWithLayout,
  Params,
} from 'types';
import { capitalize } from 'utils';

type Props = InferNextPropsType<typeof getStaticProps>;

const CategoryPage: NextPageWithLayout<Props> = ({ products }) => {
  const router = useRouter();
  const category = router?.query?.category as string;

  return (
    <>
      <Head>
        <meta
          name='description'
          content="Audiophile E-Commerce's Products' Page"
          key='description'
        />
        <meta
          property='og:description'
          content="Audiophile E-Commerce's Products' Page"
          key='og:description'
        />
        <meta
          property='og:title'
          content={`${capitalize(category as string)}`}
          key='title'
        />
        <title>{`Audiophile | ${capitalize(category)}`}</title>
      </Head>
      <CategoryTemplate products={products} />
    </>
  );
};

export default CategoryPage;

export const getStaticProps: GetStaticProps<{ products: IProducts }> = async (
  context
) => {
  const url = return_url();

  const { params } = context as { params: Params };

  try {
    const products = await getProductsByCategory(params.category, url);

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

export const getStaticPaths: GetStaticPaths = async (context) => {
  const url = return_url();

  const categories = await getCategories(url);
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: true,
  };
};

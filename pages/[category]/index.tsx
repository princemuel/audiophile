import { CategoryTemplate } from 'components';
import { SEO } from 'components/atoms';
import { getByCategory, getCategories } from 'lib';
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
      <SEO
        title={`${capitalize(category)} Page`}
        description={`Audiophile ${capitalize(category)} Page`}
        openGraph={{
          title: `${capitalize(category)} Page`,
          description: `Audiophile ${capitalize(category)} Page`,
          images: [
            {
              url: `${products[0]?.image?.mobile}`,
              width: 400,
              height: 400,
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <CategoryTemplate products={products} />
    </>
  );
};

export default CategoryPage;

export const getStaticProps: GetStaticProps<{ products: IProducts }> = async (
  context
) => {
  try {
    const { params } = context as { params: Params };
    const products = await getByCategory(params.category);

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
    fallback: 'blocking',
  };
};

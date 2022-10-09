import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'types';

const CategoryPage: NextPage = () => {
  const {
    query: { category },
  } = useRouter();

  return (
    <>
      <Head>
        <title>{`Audiophile E-Commerce - ${category}`}</title>
      </Head>
      {/* <CategoryPageTemplate products={products} /> */}
    </>
  );
};

export default CategoryPage;

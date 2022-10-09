type Props = {};

import Head from 'next/head';

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile shop - checkout</title>
      </Head>
      <CheckoutPageTemplate />
    </>
  );
};

export default CheckoutPage;

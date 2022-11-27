import { GlobalStyle } from 'assets';
import { Layout } from 'components';
import Head from 'next/head';
import { Fragment } from 'react';
import type { AppPropsWithLayout } from 'types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <GlobalStyle />

      <Fragment>
        <a href='#main-content' className='skip-to-content'>
          Skip To Content
        </a>

        {getLayout(<Component {...pageProps} />)}
      </Fragment>
    </>
  );
}

export default MyApp;

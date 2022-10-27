import { HomeTemplate } from 'components';
import { SEO } from 'components/atoms';
import { RENDER_TITLE_META_TAG } from 'helpers';
import Head from 'next/head';
import type { NextPage } from 'types';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: process?.env?.VERCEL_URL,
          title: RENDER_TITLE_META_TAG(),
          images: [
            {
              url: '/assets/shared/mobile/image-xx59-headphones.jpg',
              width: 400,
              height: 400,
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Head>
        <meta
          property='og:url'
          content='https://audiozone.vercel.app/'
          key='og:url'
        />

        <title>Audiophile</title>
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;

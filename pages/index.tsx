import { HomeTemplate } from 'components';
import Head from 'next/head';
import type { NextPage } from 'types';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
          key='description'
        />
        <meta
          property='og:description'
          content='Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
          key='og:description'
        />
        <meta property='og:title' content='Audiophile E-Commerce' key='title' />
        <title>Audiophile E-Commerce</title>
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;

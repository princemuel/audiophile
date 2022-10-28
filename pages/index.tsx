import { HomeTemplate } from 'components';
import { SEO } from 'components/atoms';
import type { NextPage } from 'types';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: process?.env?.VERCEL_URL,
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

      <HomeTemplate />
    </>
  );
};

export default Home;

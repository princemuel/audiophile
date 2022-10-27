import { RENDER_DESC_META_TAG, RENDER_TITLE_META_TAG } from 'helpers';
import { NextSeo, NextSeoProps } from 'next-seo';

interface Props extends NextSeoProps {}

export const SEO = ({ title, description, ...props }: Props) => {
  return (
    <>
      <NextSeo
        twitter={{
          handle: '@iamprincemuel',
          site: '@iamprincemuel',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'og:url',
            content: process.env.VERCEL_URL || 'https://audiozone.vercel.app/',
          },
        ]}
        title={RENDER_TITLE_META_TAG(title)}
        description={RENDER_DESC_META_TAG(description)}
        openGraph={{
          url: process.env.VERCEL_URL || 'https://audiozone.vercel.app/',
          title: RENDER_TITLE_META_TAG(title),
          description: RENDER_DESC_META_TAG(description),
          siteName: 'AudioPhile',
        }}
        {...props}
      />
    </>
  );
};

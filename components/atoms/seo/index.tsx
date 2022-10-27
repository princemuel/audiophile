import { DEFAULT_DESC_META_TAG, RENDER_TITLE_META_TAG } from 'helpers';
import { NextSeo, NextSeoProps } from 'next-seo';

interface Props extends NextSeoProps {}

export const SEO = (props: Props) => {
  const { title, description } = props;
  return (
    <>
      <NextSeo
        title={RENDER_TITLE_META_TAG(title)}
        description={description || DEFAULT_DESC_META_TAG}
        openGraph={{
          url: process.env.VERCEL_URL || 'https://audiozone.vercel.app/',
          title,
          description: description || DEFAULT_DESC_META_TAG,
          siteName: 'AudioPhile',
        }}
        twitter={{
          handle: '@iamprincemuel',
          site: '@iamprincemuel',
          cardType: 'summary_large_image',
        }}
        {...props}
      />
    </>
  );
};

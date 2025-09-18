import type { NextConfig } from 'next';

const config: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactStrictMode: true,
  typedRoutes: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: { webVitalsAttribution: ['CLS', 'LCP'] },
  turbopack: { rules: { '*.inline.svg': { loaders: ['@svgr/webpack'], as: '*.js' } } },
};

export default config;

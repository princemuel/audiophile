import {
  ImageThumbnailEarphonePNG,
  ImageThumbnailHeadphonePNG,
  ImageThumbnailSpeakerPNG,
} from '@/common';
import type { Metadata } from 'next';
import { baseUrl } from './constants.config';

type MetaFunction = (data: Metadata) => Metadata;

const defineMeta: MetaFunction = (metadata) => metadata;

const title: Metadata['title'] = 'Audiophile';
const description: Metadata['description'] =
  'Browse and purchase the best audio devices on the market located at the heart of New York City. Audiophile is a premier online store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. This web application presents the products using the most user-friendly format with accessibility in mind.';
const images = [
  { url: ImageThumbnailEarphonePNG.src, alt: 'Earphone' },
  { url: ImageThumbnailHeadphonePNG.src, alt: 'Headphone' },
  { url: ImageThumbnailSpeakerPNG.src, alt: 'Speaker' },
];

export const seo = defineMeta({
  title: {
    default: title,
    template: '%s - Audiophile',
  },
  description: description,

  metadataBase: baseUrl,

  generator: 'Next.js',
  applicationName: 'Audiophile',
  referrer: 'origin-when-cross-origin',
  manifest: '/site.webmanifest',
  keywords: ['E-Commerce', 'Audio Devices'],

  creator: 'Prince Muel',
  publisher: 'Prince Muel',
  authors: [{ name: 'Prince Muel', url: 'https://github.com/princemuel' }],
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      bing: 'msvalidate.01=0',
      me: ['vansomecsam@gmail.com', 'my-link'],
    },
  },

  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: ['/shortcut-icon.png'],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },

  openGraph: {
    type: 'website',
    title,
    description,
    url: '/',
    locale: 'en_US',
    siteName: title,
    images: images.map((image) => ({
      url: image.url,
      alt: image.alt,
      type: 'image/jpeg',
      width: 1200,
      height: 630,
    })),
  },

  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: '@iamprincemuel',
    creator: '@iamprincemuel',
    images: images.map((image) => ({
      url: image.url,
      alt: image.alt,
      type: 'image/jpeg',
      width: 1200,
      height: 630,
    })),
  },

  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
});

import { capitalize } from 'helpers';

export const DEFAULT_TITLE_META_TAG = 'Home';
export const DEFAULT_DESC_META_TAG =
  'Browse and purchase the best audio devices on the market located at the heart of New York City. Audiophile is a premier online store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. This web application presents the products using the most user-friendly format with accessibility in mind.';
export const RENDER_TITLE_META_TAG = (title?: string) =>
  `Audiophile | ${title ? capitalize(title) : DEFAULT_TITLE_META_TAG}`;
export const RENDER_DESC_META_TAG = (text?: string) =>
  (text && capitalize(text)) || DEFAULT_DESC_META_TAG;

export const BASE_URL_PROD = 'https://audiophilos.vercel.app/';
export const CURRENCY_SYMBOL = '$';

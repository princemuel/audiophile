import {
  BestGearDesktopSVG,
  BestGearMobileSVG,
  BestGearTabletSVG,
  CartSVG,
  EarphonesDesktopPNG,
  FacebookSVG,
  HeadphonesDesktopPNG,
  InstagramSVG,
  LogoSVG,
  SpeakersDesktopPNG,
  TwitterSVG,
} from './images';

export const links = {
  navigation: [
    {
      id: 'home',
      text: 'home',
      url: '/',
    },
    {
      id: 'headphones',
      text: 'Headphones',
      url: '/headphones',
      img: HeadphonesDesktopPNG,
    },
    {
      id: 'speakers',
      text: 'speakers',
      url: '/speakers',
      img: SpeakersDesktopPNG,
    },
    {
      id: 'earphones',
      text: 'earphones',
      url: '/earphones',
      img: EarphonesDesktopPNG,
    },
  ],
  logo: LogoSVG,
  cart: CartSVG,
  social: [
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com',
      icon: FacebookSVG,
      title: 'facebook',
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com',
      icon: TwitterSVG,
      title: 'twitter',
    },
    {
      id: 'icon-instagram',
      url: 'https://www.instagram.com',
      icon: InstagramSVG,
      title: 'instagram',
    },
  ],
};

export const images = {
  bestGear: {
    mobile: BestGearMobileSVG,
    tablet: BestGearTabletSVG,
    desktop: BestGearDesktopSVG,
  },
};

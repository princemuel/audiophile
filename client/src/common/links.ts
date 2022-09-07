import {
  BestGearDesktop,
  BestGearMobile,
  BestGearTablet,
  CartIcon,
  Facebook,
  Instagram,
  Logo,
  Twitter,
} from './images';

export const links = {
  navigation: {
    home: 'home',
    headphones: 'headphones',
    speakers: 'speakers',
    earphones: 'earphones',
  },
  logo: Logo,
  cart: CartIcon,
  social: [
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com',
      icon: Facebook,
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com',
      icon: Twitter,
    },
    {
      id: 'icon-instagram',
      url: 'https://www.instagram.com',
      icon: Instagram,
    },
  ],
};

export const images = {
  bestGear: {
    mobile: BestGearMobile,
    tablet: BestGearTablet,
    desktop: BestGearDesktop,
  },
};

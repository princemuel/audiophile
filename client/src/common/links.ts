import CartIcon from '@src/assets/shared/desktop/icon-cart.svg';
import Facebook from '@src/assets/shared/desktop/icon-facebook.svg';
import Instagram from '@src/assets/shared/desktop/icon-instagram.svg';
import Twitter from '@src/assets/shared/desktop/icon-twitter.svg';
import Logo from '@src/assets/shared/desktop/logo.svg';

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

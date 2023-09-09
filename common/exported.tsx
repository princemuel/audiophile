import {
  IconArrowRightSVG,
  IconCartSVG,
  IconCashOnDelivery,
  IconFacebookSVG,
  IconHamburgerSVG,
  IconInstagramSVG,
  IconLogoSVG,
  IconOrderConfirm,
  IconTwitterSVG,
} from './assets';

type IconObject = 'site' | 'mobile' | 'chevron' | 'form';

export const icons = {
  site: {
    logo: (props) => <IconLogoSVG {...props} />,
    cart: (props) => <IconCartSVG {...props} />,
  },
  chevron: {
    right: (props) => <IconArrowRightSVG {...props} />,
  },
  mobile: {
    hamburger: (props) => <IconHamburgerSVG {...props} />,
  },
  form: {
    cash: (props) => <IconCashOnDelivery {...props} />,
    confirm: (props) => <IconOrderConfirm {...props} />,
  },
} satisfies Record<IconObject, Record<string, IconRFCType>>;

export const routes = [
  {
    url: '/',
    text: 'home',
    icon: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    text: 'headphones',
    url: '/headphones',
    icon: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    text: 'speakers',
    url: '/speakers',
    icon: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    text: 'earphones',
    url: '/earphones',
    icon: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
  },
] as IRoute[];

export const social = [
  {
    text: 'facebook',
    url: 'https://www.facebook.com/username',
    icon: (props) => <IconFacebookSVG {...props} />,
  },
  {
    text: 'instagram',
    url: 'https://www.instagram.com/username',
    icon: (props) => <IconInstagramSVG {...props} />,
  },
  {
    text: 'twitter',
    url: 'https://www.twitter.com/username',
    icon: (props) => <IconTwitterSVG {...props} />,
  },
] satisfies ISocial[];

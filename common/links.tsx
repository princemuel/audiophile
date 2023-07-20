import {
  IconArrowRightSVG,
  IconCartSVG,
  IconCashOnDelivery,
  IconFacebookSVG,
  IconGithubSVG,
  IconHamburgerSVG,
  IconInstagramSVG,
  IconLinkedInSVG,
  IconLogoSVG,
  IconOrderConfirm,
  IconTwitterSVG,
} from './images';

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
    toggle: (props) => <IconHamburgerSVG {...props} />,
  },
  form: {
    cash: (props) => <IconCashOnDelivery {...props} />,
    confirm: (props) => <IconOrderConfirm {...props} />,
  },
} satisfies Record<IconObject, Record<string, IconRFCType>>;

export const links: ILinks = {
  routes: [
    {
      id: 'home',
      text: 'home',
      url: '/',
      image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      id: 'headphones',
      text: 'Headphones',
      // @ts-expect-error
      url: '/headphones',
      image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      id: 'speakers',
      text: 'speakers',
      // @ts-expect-error
      url: '/speakers',
      image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
      id: 'earphones',
      text: 'earphones',
      // @ts-expect-error
      url: '/earphones',
      image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
  ],
  social: [
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: (props) => <IconGithubSVG {...props} />,
      alt: 'github',
    },
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com/mikeychuks',
      icon: (props) => <IconFacebookSVG {...props} />,
      alt: 'facebook',
    },
    {
      id: 'icon-instagram',
      url: 'https://www.instagram.com/iamprincemuel',
      icon: (props) => <IconInstagramSVG {...props} />,
      alt: 'instagram',
    },
    {
      id: 'icon-linkedin',
      url: 'https://www.linkedin.com/in/princemuel',
      icon: (props) => <IconLinkedInSVG {...props} />,
      alt: 'linkedin',
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com/iamprincemuel',
      icon: (props) => <IconTwitterSVG {...props} />,
      alt: 'twitter',
    },
  ],
};

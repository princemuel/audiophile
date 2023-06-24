import {
  IconArrowRightSVG,
  IconCartSVG,
  IconFacebookSVG,
  IconGithubSVG,
  IconHamburgerSVG,
  IconInstagramSVG,
  IconLinkedInSVG,
  IconLogoSVG,
  IconTwitterSVG,
} from './images';

type IconObject = 'site' | 'mobile' | 'chevron';

export const icons: Record<IconObject, Record<string, IconRFCType>> = {
  site: {
    logo: (props: IconProps) => <IconLogoSVG {...props} />,
    cart: (props: IconProps) => <IconCartSVG {...props} />,
  },
  chevron: {
    right: (props: IconProps) => <IconArrowRightSVG {...props} />,
  },
  mobile: {
    toggle: (props: IconProps) => <IconHamburgerSVG {...props} />,
  },
};

export const links: ILinks = {
  routes: [
    {
      id: 'home',
      text: 'home',
      url: '/',
      image: '',
    },
    {
      id: 'headphones',
      text: 'Headphones',
      url: '/headphones',
      image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      id: 'speakers',
      text: 'speakers',
      url: '/speakers',
      image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
      id: 'earphones',
      text: 'earphones',
      url: '/earphones',
      image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
  ],
  social: [
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: (props: IconProps) => <IconGithubSVG {...props} />,
      alt: 'github',
    },
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com/mikeychuks',
      icon: (props: IconProps) => <IconFacebookSVG {...props} />,
      alt: 'facebook',
    },
    {
      id: 'icon-instagram',
      url: 'https://www.instagram.com/princemuel',
      icon: (props: IconProps) => <IconInstagramSVG {...props} />,
      alt: 'instagram',
    },
    {
      id: 'icon-linkedin',
      url: 'https://www.linkedin.com/in/princemuel',
      icon: (props: IconProps) => <IconLinkedInSVG {...props} />,
      alt: 'linkedin',
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com/iamprincemuel',
      icon: (props: IconProps) => <IconTwitterSVG {...props} />,
      alt: 'twitter',
    },
  ],
};

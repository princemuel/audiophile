import * as React from 'react';
import {
  IconArrowRightSVG,
  IconCartSVG,
  IconFacebookSVG,
  IconGithubSVG,
  IconHamburgerSVG,
  IconInstagramSVG,
  IconLinkedInSVG,
  IconTwitterSVG,
  LogoSVG,
} from './svg-icons';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const icons = {
  logo: (props: IconProps) => <LogoSVG {...props} />,
  arrow: {
    right: (props: IconProps) => <IconArrowRightSVG {...props} />,
  },
  mobile: {
    toggle: (props: IconProps) => <IconHamburgerSVG {...props} />,
  },
  cart: (props: IconProps) => <IconCartSVG {...props} />,
};

export const links = {
  navigation: [
    {
      id: 'home',
      text: 'home',
      url: '/',
      img: '',
    },
    {
      id: 'headphones',
      text: 'Headphones',
      url: '/headphones',
      img: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      id: 'speakers',
      text: 'speakers',
      url: '/speakers',
      img: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
      id: 'earphones',
      text: 'earphones',
      url: '/earphones',
      img: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
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

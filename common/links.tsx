import {
  CartSVG,
  EarphonesDesktopPNG,
  FacebookSVG,
  GithubSVG,
  HeadphonesDesktopPNG,
  InstagramSVG,
  LinkedinSVG,
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
      img: null,
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
  logo: <LogoSVG />,
  cart: <CartSVG className='icon' />,
  social: [
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com',
      icon: <FacebookSVG className='icon' />,
      title: 'facebook',
    },
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: <GithubSVG className='icon' />,
      title: 'github',
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com/iamprincemuel',
      icon: <TwitterSVG className='icon' />,
      title: 'twitter',
    },
    {
      id: 'icon-linkedin',
      url: 'https://www.linkedin.com/in/princemuel',
      icon: <LinkedinSVG className='icon' />,
      title: 'linkedin',
    },
    {
      id: 'icon-instagram',
      url: 'https://www.instagram.com/princemuel',
      icon: <InstagramSVG className='icon' />,
      title: 'instagram',
    },
  ],
};

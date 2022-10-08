import { IconHamburgerSVG, links } from 'common';
import {
  GlobalContainer,
  Logo,
  MenuButton,
  NavLink,
  ScreenReader,
} from 'components';
import Image from 'next/future/image';
import { Fragment } from 'react';
import { HeaderContainer } from './styles';
type Props = {};

const Header = (props: Props) => {
  return (
    <Fragment>
      <a href='#main-content' className='skip-to-content'>
        Skip To Content
      </a>
      <HeaderContainer className='full-width'>
        <GlobalContainer>
          <Logo />

          {/* @ts-expect-error */}
          <MenuButton
            aria-controls='primary-navigation'
            aria-expanded='false'
            type='button'
          >
            <Image className='icon-hamburger' src={IconHamburgerSVG} alt='' />
            <ScreenReader>Menu</ScreenReader>
          </MenuButton>

          <nav className='primary-navigation' id='primary-navigation'>
            <ul aria-label='Primary' role='list' className='nav-list'>
              {(links?.navigation).map((link) => (
                <li key={link.id}>
                  <NavLink href={link.url}>
                    <a className='link link-hder'>{link.text.toUpperCase()}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </GlobalContainer>
      </HeaderContainer>
    </Fragment>
  );
};

export { Header };

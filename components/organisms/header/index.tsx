/* eslint-disable jsx-a11y/no-redundant-roles */
import { IconHamburgerSVG, links } from '@src/common';
import {
  GlobalContainer,
  Logo,
  MenuButton,
  ScreenReader,
} from '@src/components';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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

          <MenuButton
            aria-controls='primary-navigation'
            aria-expanded='false'
            type='button'
          >
            <img
              className='icon-hamburger'
              src={IconHamburgerSVG}
              alt=''
              aria-hidden='true'
            />
            <ScreenReader>Menu</ScreenReader>
          </MenuButton>

          <nav className='primary-navigation' id='primary-navigation'>
            <ul aria-label='Primary' role='list' className='nav-list'>
              {(links?.navigation).map((link) => (
                <li key={link.id}>
                  <NavLink to={link.url} className='link link-header'>
                    {link.text.toUpperCase()}
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

/* eslint-disable jsx-a11y/no-redundant-roles */
import { IconHamburgerSVG, links } from 'common';
import { GlobalContainer, Logo, MenuButton, ScreenReader } from 'components';
import Link from 'next/link';
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
                  <Link href={link.url} className='link link-header'>
                    {link.text.toUpperCase()}
                  </Link>
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

/* eslint-disable jsx-a11y/no-redundant-roles */
import { links } from '@src/common';
import { Logo } from '@src/components';
import { GlobalContainer } from '@src/styles';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';

type Props = {};

const Header = (props: Props) => {
  return (
    <Fragment>
      <a href='#main' className='skip-to-content'>
        Skip To Content
      </a>
      <HeaderContainer className='full-width'>
        <GlobalContainer>
          <Logo />

          <button
            className='mobile-nav-toggle'
            aria-controls='primary-navigation'
            aria-expanded='false'
          >
            <img
              className='icon-hamburger'
              src='assets/icon-hamburger.svg'
              alt=''
              aria-hidden='true'
            />
            <img
              className='icon-close'
              src='assets/icon-close.svg'
              alt=''
              aria-hidden='true'
            />
            <span className='sr-only'>Menu</span>
          </button>

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

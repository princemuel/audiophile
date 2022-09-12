import { links } from '@src/common';
import { Logo } from '@src/components';
import { GlobalContainer } from '@src/styles';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
  return (
    <Fragment>
      <a href='#main' className='skip-to-content'>
        Skip To Content
      </a>
      <GlobalContainer as='header' className='primary-header full-width'>
        <Logo />

        <nav aria-label='primary-navigation'>
          <ul className='primary-navigation' data-visible='false'>
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
    </Fragment>
  );
};

export { Header };

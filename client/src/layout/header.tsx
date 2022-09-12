import { links } from '@src/common';
import { Logo } from '@src/components';
import { GlobalContainer } from '@src/styles';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from './styles';

type Props = {};

const Header = (props: Props) => {
  return (
    <Fragment>
      <a href='#main' className='skip-to-content'>
        Skip To Content
      </a>
      <GlobalContainer as='header' className='primary-header full-width'>
        <Logo />

        <Menu aria-label='primary-navigation'>
          <ul className='primary-navigation' data-visible='false'>
            {Object.values(links?.navigation).map((value) => (
              <li key={value}>
                <NavLink to={value} className='link link-header'>
                  {value.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </Menu>
      </GlobalContainer>
    </Fragment>
  );
};

export { Header };

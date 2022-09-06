import { links } from '@src/common';
import { GlobalContainer } from '@src/styles';
import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from './styles';

type Props = {};

const Header = (props: Props) => {
  return (
    <Fragment>
      <a href='#main' className='skip-to-content'>
        Skip To Content
      </a>
      <GlobalContainer as='header' className='primary-header full-width'>
        <figure>
          <Link to={'/'}>
            <img src={links?.logo} alt='Audiophile Logo' />
            <span className='sr-only'>Audiophile Logo</span>
          </Link>
        </figure>

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

        <figure>
          <img src={links?.cart} alt='Cart Icon' />
          <span className='sr-only'>Cart Icon</span>
        </figure>
      </GlobalContainer>
    </Fragment>
  );
};

export { Header };

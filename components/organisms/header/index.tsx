import { CartSVG, IconHamburgerSVG, links } from 'common';
import { NavLink, ScreenReader } from 'components';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useMedia } from 'react-use';
import { CategoryLinks } from '../category-links';
import {
  HeaderCartIcon,
  HeaderContainer,
  HeaderLogo,
  HeaderNavButton,
  HeaderNavigation,
  HeaderNavList,
  HeaderStack,
} from './styles';

type Props = {};

const Header = (props: Props) => {
  const isWide = useMedia('(min-width: 65em)', true);
  const { asPath } = useRouter();

  return (
    <Fragment>
      <a href='#main-content' className='skip-to-content'>
        Skip To Content
      </a>

      <HeaderContainer as='header' isHome={asPath === '/'}>
        <HeaderStack>
          {!isWide && (
            <HeaderNavButton
              aria-label='Toggle Menu'
              aria-controls='primary-navigation'
              aria-expanded='false'
              aria-haspopup='false'
              type='button'
            >
              <Image className='icon-hamburger' src={IconHamburgerSVG} alt='' />
              <ScreenReader>Menu</ScreenReader>
            </HeaderNavButton>
          )}

          <HeaderLogo />

          <HeaderNavigation id='primary-navigation'>
            {isWide && (
              <HeaderNavList
                aria-label='Primary'
                role='list'
                className='nav-list'
              >
                {(links?.navigation).map((link) => (
                  <li key={link.id}>
                    <NavLink href={link.url}>
                      <a className='navlink fs-200 uppercase'>{link.text}</a>
                    </NavLink>
                  </li>
                ))}
              </HeaderNavList>
            )}
          </HeaderNavigation>

          <HeaderCartIcon type='button'>
            <Image src={CartSVG} alt='cart' />
            <span></span>
          </HeaderCartIcon>
        </HeaderStack>

        <HeaderNavigation id='primary-navigation'>
          {!isWide && <>{<CategoryLinks label='Primary' />}</>}
        </HeaderNavigation>
      </HeaderContainer>
    </Fragment>
  );
};

export { Header };

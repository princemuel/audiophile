import { links } from 'common';
import { NavLink } from 'components';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import {
  HeaderCartIcon,
  HeaderContainer,
  HeaderLogo,
  HeaderNavigation,
  HeaderNavList,
  HeaderStack,
} from './styles';

type Props = {};

const Header = (props: Props) => {
  const { asPath } = useRouter();

  return (
    <Fragment>
      <a href='#main-content' className='skip-to-content'>
        Skip To Content
      </a>

      <HeaderContainer as='header' isHome={asPath === '/'}>
        <HeaderStack>
          <HeaderLogo />

          {/* <MenuButton
            aria-controls='primary-navigation'
            aria-expanded='false'
            type='button'
          >
            <Image className='icon-hamburger' src={IconHamburgerSVG} alt='' />
            <ScreenReader>Menu</ScreenReader>
          </MenuButton> */}

          <HeaderNavigation id='primary-navigation'>
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
          </HeaderNavigation>

          <HeaderCartIcon />
        </HeaderStack>
      </HeaderContainer>
    </Fragment>
  );
};

export { Header };

import { IconHamburgerSVG, links } from 'common';
import { NavLink, ScreenReader } from 'components/atoms';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useMedia, useToggle } from 'react-use';
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
  const { asPath } = useRouter();
  const [on, toggle] = useToggle(false);
  const isWide = useMedia('(min-width: 65em)', true);

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
              aria-expanded={on ? 'true' : 'false'}
              aria-haspopup={on ? 'menu' : 'false'}
              type='button'
              onClick={toggle}
            >
              <IconHamburgerSVG className='icon' />
              <ScreenReader>Toggle Menu</ScreenReader>
            </HeaderNavButton>
          )}

          <HeaderLogo />

          {isWide && (
            <HeaderNavigation id='primary-navigation'>
              <HeaderNavList
                aria-label='Primary'
                role='list'
                className='nav-list'
              >
                {(links?.navigation).map((link) => (
                  <li key={link.id}>
                    <NavLink href={link.url}>
                      <a className='fs-200 uppercase'>{link.text}</a>
                    </NavLink>
                  </li>
                ))}
              </HeaderNavList>
            </HeaderNavigation>
          )}

          <HeaderCartIcon type='button'>
            {links?.cart}
            <span></span>
          </HeaderCartIcon>
        </HeaderStack>

        {!isWide && on && (
          <>
            <HeaderNavigation id='primary-navigation'>
              <CategoryLinks label='Primary' />
            </HeaderNavigation>
          </>
        )}
      </HeaderContainer>
    </Fragment>
  );
};

export { Header };

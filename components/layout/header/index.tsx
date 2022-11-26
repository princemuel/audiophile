import { icons, links } from 'common';
import { NavLink, VisuallyHidden } from 'components/atoms';
import { CategoryLinks } from 'components/organisms';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useMedia, useToggle } from 'react-use';
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
              <icons.mobile.toggle className='icon icon-class' />
              <VisuallyHidden>Menu</VisuallyHidden>
            </HeaderNavButton>
          )}

          <HeaderLogo className='icon icon-class' />

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
            <icons.cart className='icon icon-class' />
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

import { links } from 'common';
import { CartIcon, Logo, NavLink } from 'components';
import { Fragment } from 'react';
import { HeaderContainer, HeaderNavigation, HeaderStack } from './styles';
type Props = {};

const Header = (props: Props) => {
  return (
    <Fragment>
      <a href='#main-content' className='skip-to-content'>
        Skip To Content
      </a>

      <HeaderContainer as='header'>
        <HeaderStack>
          <Logo />

          {/* <MenuButton
            aria-controls='primary-navigation'
            aria-expanded='false'
            type='button'
          >
            <Image className='icon-hamburger' src={IconHamburgerSVG} alt='' />
            <ScreenReader>Menu</ScreenReader>
          </MenuButton> */}

          <HeaderNavigation id='primary-navigation'>
            <ul aria-label='Primary' role='list' className='nav-list'>
              {(links?.navigation).map((link) => (
                <li key={link.id}>
                  <NavLink href={link.url}>
                    <a className=''>{link.text.toUpperCase()}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </HeaderNavigation>

          <CartIcon />
        </HeaderStack>
      </HeaderContainer>
    </Fragment>
  );
};

export { Header };

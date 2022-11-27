import { useRouter } from 'next/router';
import { useMedia, useToggle } from 'react-use';
import { HeaderContainer, HeaderStack } from './styles';

type Props = {};

const Header = (props: Props) => {
  const { asPath } = useRouter();
  const [on, toggle] = useToggle(false);
  const isWide = useMedia('(min-width: 65em)', true);

  return (
    <HeaderContainer as='header' isHome={asPath === '/'}>
      <HeaderStack>
        {/* <HeaderNavButton
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

        <HeaderLogo className='icon icon-class' />

        <HeaderNavigation id='primary-navigation'>
          <HeaderNavList aria-label='Primary' role='list' className='nav-list'>
            {(links?.navigation).map((link) => (
              <li key={link.id}>
                <NavLink href={link.url}>
                  <a className='fs-200 uppercase'>{link.text}</a>
                </NavLink>
              </li>
            ))}
          </HeaderNavList>
        </HeaderNavigation>

        <HeaderCartIcon type='button' aria-label='cart'>
          <icons.cart className='icon icon-class' />
          <Amount items={10} />
        </HeaderCartIcon> */}
      </HeaderStack>
    </HeaderContainer>
  );
};

export { Header };

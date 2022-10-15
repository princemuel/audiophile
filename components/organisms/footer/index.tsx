import { links } from 'common';
import { Avatar, Logo, NavLink } from 'components';
import {
  FooterBottom,
  FooterContainer,
  FooterCopyright,
  FooterGrid,
  FooterInfo,
  FooterSocial,
  FooterTop,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer as='footer'>
      <FooterGrid>
        <FooterTop>
          <Logo />

          <nav>
            <ul
              aria-label='Secondary'
              role='list'
              className='secondary-navigation fs-200'
            >
              {(links?.navigation).map((link) => (
                <li key={link.id}>
                  <NavLink href={link.url}>
                    <a className=''>{link.text.toUpperCase()}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </FooterTop>

        <FooterBottom>
          <FooterInfo className='footer__info'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterInfo>

          <FooterCopyright className='footer__copyright'>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
          </FooterCopyright>

          <FooterSocial className='footer__social'>
            {links?.social?.map((link) => (
              <a key={link?.id} href={link?.url}>
                <Avatar url={link.icon} text={link.title} />
              </a>
            ))}
          </FooterSocial>
        </FooterBottom>
      </FooterGrid>
    </FooterContainer>
  );
};

export { Footer };

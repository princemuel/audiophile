import { links } from 'common';
import { Avatar, GlobalContainer, Logo, Text } from 'components';
import Link from 'next/link';
import { FooterGrid } from './styles';

const Footer = () => {
  return (
    <GlobalContainer as='footer' className='primary-footer full-width'>
      <FooterGrid>
        <div className='footer__top'>
          <Logo />

          <nav>
            <ul
              aria-label='Secondary'
              role='list'
              className='secondary-navigation fs-200'
            >
              {(links?.navigation).map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className='link link-footer'>
                    {link.text.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='footer__bottom'>
          <Text className='footer__info'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Text>

          <Text className='footer__copyright'>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
          </Text>

          <Text className='footer__social'>
            {links?.social?.map((link) => (
              <a key={link?.id} href={link?.url}>
                <Avatar url={link.icon} text={link.title} />
              </a>
            ))}
          </Text>
        </div>
      </FooterGrid>
    </GlobalContainer>
  );
};

export { Footer };

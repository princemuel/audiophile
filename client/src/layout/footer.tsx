import { links } from '@src/common';
import { GlobalContainer } from '@src/styles';
import { Link } from 'react-router-dom';
import { FooterGrid } from './styles';

type Props = {};

const Footer = (props: Props) => {
  return (
    <GlobalContainer as='footer' className='primary-footer full-width'>
      <FooterGrid>
        <div className='footer__top'>
          <figure>
            <Link to={'/'}>
              <img src={links?.logo} alt='Audiophile Logo' />
              <span className='sr-only'>Audiophile Logo</span>
            </Link>
          </figure>

          <nav aria-label='secondary'>
            <ul className='secondary-navigation fs-200'>
              {Object.values(links?.navigation).map((value) => (
                <li key={value}>
                  <Link to={value} className='link link-footer'>
                    {value.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='footer__bottom'>
          <p className='footer__info'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <p className='footer__copyright'>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          <p className='footer__social'>
            {links?.social?.map((link) => (
              <Link key={link?.id} to={link?.url}>
                <img src={link.icon} alt={link.url} />
              </Link>
            ))}
          </p>
        </div>
      </FooterGrid>
    </GlobalContainer>
  );
};

export { Footer };

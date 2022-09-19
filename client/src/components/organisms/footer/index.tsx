/* eslint-disable jsx-a11y/no-redundant-roles */

import { links } from '@src/common';
import { Avatar, GlobalContainer, Logo } from '@src/components';
import { Link } from 'react-router-dom';
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
                  <Link to={link.url} className='link link-footer'>
                    {link.text.toUpperCase()}
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
                <Avatar url={link.icon} text={''} />
              </Link>
            ))}
          </p>
        </div>
      </FooterGrid>
    </GlobalContainer>
  );
};

export { Footer };

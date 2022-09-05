import { links } from '@src/common';
import { GlobalContainer } from '@src/styles';
import { Link } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
  return (
    <GlobalContainer as='footer' className='primary-footer full-width'>
      <figure>
        <Link to={'/'}>
          <img src={links?.logo} alt='Audiophile Logo' />
          <span className='sr-only'>Audiophile Logo</span>
        </Link>
      </figure>

      <nav aria-label='secondary'>
        <ul id='secondary-navigation' data-visible='false'>
          {Object.values(links?.navigation).map((value) => (
            <li key={value}>
              <Link to={value}>{value.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>

      <p>
        {links?.social?.map((link) => (
          <Link key={link?.id} to={link?.url}>
            <img src={link.icon} alt={link.url} />
          </Link>
        ))}
      </p>
    </GlobalContainer>
  );
};

export { Footer };

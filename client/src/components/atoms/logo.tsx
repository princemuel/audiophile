import { links } from '@src/common';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <figure>
      <Link to={'/'}>
        <img src={links?.logo} alt='Audiophile Logo' />
        <span className='sr-only'>Audiophile Logo</span>
      </Link>
    </figure>
  );
};

export { Logo };

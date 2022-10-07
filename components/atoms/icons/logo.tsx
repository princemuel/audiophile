import { links } from 'common';
import { Link } from 'react-router-dom';
import { Avatar } from './avatar';

const Logo = () => {
  return (
    <Link to={'/'}>
      <Avatar url={links?.logo} text={'Audiophile Logo'} classes='logo' />
    </Link>
  );
};

export { Logo };

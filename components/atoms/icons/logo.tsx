import { links } from 'common';
import Link from 'next/link';
import { Avatar } from './avatar';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Avatar url={links?.logo} text={'Audiophile Logo'} classes='logo' />
    </Link>
  );
};

export { Logo };

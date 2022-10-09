import { links } from 'common';
import Image from 'next/future/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} passHref>
      <a className='logo'>
        <Image src={links?.logo} alt='Audiophile Logo' />
      </a>
    </Link>
  );
};

export { Logo };

import { links } from 'common';
import Image from 'next/future/image';
import Link from 'next/link';

interface Props {
  className?: string;
}

const Logo = (props: Props) => {
  return (
    <Link href={'/'} passHref>
      <a {...props}>
        <Image src={links?.logo} alt='Audiophile Logo' />
      </a>
    </Link>
  );
};

export { Logo };

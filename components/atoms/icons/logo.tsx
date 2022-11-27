import { icons } from 'common';
import Link from 'next/link';
import { VisuallyHidden } from '../typography';

interface Props {
  className?: string;
}

const Logo = (props: Props) => {
  return (
    <Link href={'/'} passHref>
      <a {...props}>
        <icons.logo className='icon icon-class' />
        <VisuallyHidden>Logo</VisuallyHidden>
      </a>
    </Link>
  );
};

export { Logo };

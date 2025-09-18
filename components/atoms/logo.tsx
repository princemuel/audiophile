import { icons } from '@/common';
import { tw } from '@/helpers';
import Link from 'next/link';

interface Props {
  className?: string;
}

const LogoIcon = ({ className }: Props) => {
  return (
    <Link href='/' aria-label='Go to Home' title='Home' className={tw(className)}>
      <span className='sr-only'>Go to Home</span>
      <icons.site.logo aria-hidden='true' className='fill-current stroke-transparent' />
    </Link>
  );
};

export { LogoIcon };

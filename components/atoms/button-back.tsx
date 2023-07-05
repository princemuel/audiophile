'use client';

import { cn } from '@/lib';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <Button
      variant={'text-primary/50'}
      text={'link'}
      weight={'medium'}
      size={'none'}
      onClick={router.back}
      className={cn('', className)}
      uppercase={false}
    >
      Go back
    </Button>
  );
};

export { BackButton };

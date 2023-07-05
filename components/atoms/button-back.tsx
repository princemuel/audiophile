'use client';

import { cn } from '@/lib';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <Button
      variant={'unbranded'}
      size={'none'}
      onClick={router.back}
      className={cn(className)}
    >
      Go back
    </Button>
  );
};

export { BackButton };

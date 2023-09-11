'use client';

import { Button } from '@/components';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      type='button'
      variant={'accent'}
      weight={'medium'}
      uppercase={false}
      onClick={router.back}
    >
      Go Back
    </Button>
  );
}

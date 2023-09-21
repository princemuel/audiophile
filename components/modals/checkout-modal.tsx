'use client';

import { useCheckoutModal } from '@/hooks';
import { Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { Fragment } from 'react';
import { Button } from '../atoms';

export function CheckoutModal() {
  const checkoutModal = useCheckoutModal();

  return (
    <Transition as={Fragment} show={checkoutModal.isVisible}>
      <Button
        type='button'
        variant='primary'
        size='medium'
        className='justify-center'
        onClick={checkoutModal.hide}
        asChild
      >
        <NextLink href={'/'}>Back to home</NextLink>
      </Button>
    </Transition>
  );
}

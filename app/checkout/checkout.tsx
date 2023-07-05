'use client';

import { BackButton, CheckoutForm } from '@/components';

// import { useZodForm } from "@/lib";

interface Props {}

const CheckoutTemplate = (props: Props) => {
  // const methods  = useZodForm({
  //   schema: null
  // })
  return (
    <div className='h-container'>
      <div className='my-28'>
        <BackButton />
      </div>
      <CheckoutForm />
    </div>
  );
};

export { CheckoutTemplate };

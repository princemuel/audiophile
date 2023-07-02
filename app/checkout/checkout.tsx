'use client';

import { CheckoutForm } from '@/components';

// import { useZodForm } from "@/lib";

interface Props {}

const CheckoutTemplate = (props: Props) => {
  // const methods  = useZodForm({
  //   schema: null
  // })
  return (
    <div className='h-container'>
      <CheckoutForm />
    </div>
  );
};

export { CheckoutTemplate };

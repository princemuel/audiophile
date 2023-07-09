import { BackButton, CheckoutForm } from '@/components';

interface Props {}

const CheckoutTemplate = (props: Props) => {
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

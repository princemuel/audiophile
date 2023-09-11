import { Container } from '@/components';
import { CheckoutForm } from './form';
import { BackButton } from './go-back';

interface Props {}

const CheckoutTemplate = (props: Props) => {
  return (
    <Container>
      <div className='my-16'>
        <BackButton />
      </div>

      <CheckoutForm />
    </Container>
  );
};

export { CheckoutTemplate };

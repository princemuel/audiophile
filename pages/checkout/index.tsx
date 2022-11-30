import { SEO } from 'components/atoms';
import { CheckoutPageTemplate } from 'components/templates';

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <SEO title={'checkout'} />
      <CheckoutPageTemplate />
    </>
  );
};

export default CheckoutPage;

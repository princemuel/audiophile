type Props = {};

import { SEO } from 'components/atoms';
import { RENDER_TITLE_META_TAG } from 'helpers';

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <SEO title={RENDER_TITLE_META_TAG('checkout')} />
      {/* CheckoutPageTemplate  */}
    </>
  );
};

export default CheckoutPage;

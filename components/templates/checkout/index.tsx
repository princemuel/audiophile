import {
  ButtonPrimary,
  GlobalContainer,
  Heading,
  PriceComponent,
} from 'components/atoms';
import { Container } from './styles';

const CheckoutPageTemplate = (): JSX.Element => {
  return (
    <GlobalContainer
      id='main-content'
      as='main'
      aria-labelledby='checkout-heading'
      className='flow'
    >
      <Container>
        {/* HEADING */}
        <section>
          <Heading as='h1' id='checkout-heading' className='fw-700 uppercase'>
            Checkout
          </Heading>
          <fieldset>
            <legend>Billing Details</legend>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className=''
                id='name'
                name='name'
                placeholder='Alexei Ward'
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className=''
                id='email'
                name='email'
                placeholder='alexei@mail.com'
                required
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                className=''
                id='phone'
                name='phone'
                placeholder='+1 202-555-0136'
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Shipping Info</legend>
            <div>
              <label htmlFor='address'>Address</label>
              <input
                type='address'
                className=''
                id='address'
                name='address'
                placeholder='1137 Williams Avenue'
                required
              />
            </div>
            <div>
              <label htmlFor='code'>Zip CODE</label>
              <input
                type='address'
                className=''
                name='code'
                placeholder='10001'
                required
              />
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                type='address'
                className=''
                name='city'
                placeholder='New York'
                required
              />
            </div>
            <div>
              <label htmlFor='country'>Country</label>
              <input
                type='address'
                className=''
                name='country'
                placeholder='United States'
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Payment Details</legend>
            <div>
              <input
                type='radio'
                id='eMoney'
                name='paymentMethod'
                value='eMoney'
              />
              <label htmlFor='eMoney'>e-Money</label>
            </div>
            <div>
              <input type='radio' id='cash' name='paymentMethod' value='cash' />
              <label htmlFor='cash'>Cash on Delivery</label>
            </div>
            <div>
              <label htmlFor='eMoneyNumber'>e-Money Number</label>
              <input
                type='number'
                className=''
                id='eMoneyNumber'
                name='eMoneyNumber'
                placeholder='238521993'
                required
              />
            </div>
            <div>
              <label htmlFor='eMoneyPin'>e-Money PIN</label>
              <input
                type='number'
                className=''
                id='eMoneyPin'
                name='eMoneyPin'
                placeholder='6891'
                required
              />
            </div>
          </fieldset>
        </section>

        <section aria-labelledby='summary'>
          <Heading as='h3' id='summary' className=''>
            Summary
          </Heading>

          {/* Component imag name price quantity*/}
          <PriceComponent name='Total' price={2345} />
          <PriceComponent name='Shipping' price={2345} />
          <PriceComponent name='Vat (included)' price={2345} />
          <PriceComponent name='Grand Total' price={2345} />

          <ButtonPrimary type='submit'>Continue to pay</ButtonPrimary>
        </section>
      </Container>
    </GlobalContainer>
  );
};

export { CheckoutPageTemplate };

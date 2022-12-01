import {
  ButtonPrimary,
  GlobalContainer,
  Heading,
  PriceComponent,
} from 'components/atoms';
import { CartProduct } from 'components/molecules';
import {
  CartProducts,
  Fieldset,
  Form,
  FormContainer,
  FormGrid,
  FormGroup,
  Label,
  Legend,
  PriceComponents,
  RadioGroup,
  RadioInput,
  SummaryContainer,
  TextInput,
} from './styles';

const CheckoutPageTemplate = (): JSX.Element => {
  return (
    <GlobalContainer
      id='main-content'
      as='main'
      aria-labelledby='checkout-heading'
      className='flow'
    >
      <Form>
        <FormContainer>
          <Heading
            as='h1'
            id='checkout-heading'
            className='fs-700 fw-700 leading-400 tracking-100 uppercase'
          >
            Checkout
          </Heading>

          {/************* BILLING *************/}
          <Fieldset>
            <Legend className='text-primary-100 fs-300 fw-700 tracking-100  uppercase'>
              Billing Details
            </Legend>

            <FormGrid>
              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='name'>
                  Name
                </Label>
                <TextInput
                  aria-invalid='true'
                  type='text'
                  className=''
                  id='name'
                  name='name'
                  placeholder='Alexei Ward'
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='email'>
                  Email
                </Label>
                <TextInput
                  type='email'
                  className=''
                  id='email'
                  name='email'
                  placeholder='alexei@mail.com'
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='phone'>
                  Phone Number
                </Label>
                <TextInput
                  type='tel'
                  className=''
                  id='phone'
                  name='phone'
                  placeholder='+1 202-555-0136'
                  required
                />
              </FormGroup>
            </FormGrid>
          </Fieldset>

          {/************* SHIPPING *************/}
          <Fieldset>
            <Legend className='text-primary-100 fs-300 fw-700 tracking-100  uppercase'>
              Shipping Info
            </Legend>

            <FormGrid>
              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='address'>
                  Address
                </Label>
                <TextInput
                  type='address'
                  className=''
                  id='address'
                  name='address'
                  placeholder='1137 Williams Avenue'
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='code'>
                  ZIP Code
                </Label>
                <TextInput
                  type='address'
                  className=''
                  name='code'
                  placeholder='10001'
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='city'>
                  City
                </Label>
                <TextInput
                  type='address'
                  className=''
                  name='city'
                  placeholder='New York'
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='country'>
                  Country
                </Label>
                <TextInput
                  type='address'
                  className=''
                  name='country'
                  placeholder='United States'
                  required
                />
              </FormGroup>
            </FormGrid>
          </Fieldset>

          {/************* PAYMENT *************/}
          <Fieldset>
            <Legend className='text-primary-100 fs-300 fw-700 tracking-100  uppercase'>
              Payment Details
            </Legend>

            <RadioGroup>
              <FormGroup>
                <RadioInput
                  type='radio'
                  id='eMoney'
                  name='paymentMethod'
                  value='eMoney'
                />
                <Label className='fs-200 fw-700' htmlFor='eMoney'>
                  e-Money
                </Label>
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='inCash'>
                  Cash on Delivery
                </Label>
                <RadioInput
                  type='radio'
                  id='inCash'
                  name='paymentMethod'
                  value='inCash'
                />
              </FormGroup>
            </RadioGroup>

            <FormGrid>
              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='eMoneyNumber'>
                  e-Money Number
                </Label>
                <TextInput
                  type='number'
                  className=''
                  id='eMoneyNumber'
                  name='eMoneyNumber'
                  placeholder='238521993'
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label className='fs-200 fw-700' htmlFor='eMoneyPin'>
                  e-Money PIN
                </Label>
                <TextInput
                  type='number'
                  className=''
                  id='eMoneyPin'
                  name='eMoneyPin'
                  placeholder='6891'
                  required
                />
              </FormGroup>
            </FormGrid>
          </Fieldset>
        </FormContainer>

        <SummaryContainer aria-labelledby='summary'>
          <Heading as='h3' id='summary' className='fs-500 fw-700 uppercase'>
            Summary
          </Heading>

          <CartProducts>
            <CartProduct
              name='YX1 Wireless Earphones'
              price={100}
              imgSrc={'/assets/product-yx1-earphones/mobile/image-product.jpg'}
              alt={'YX1 Wireless Earphones'}
              hasControls={false}
              quantity={5}
            />
            <CartProduct
              name='YX1 Wireless Earphones'
              price={100}
              imgSrc={'/assets/product-yx1-earphones/mobile/image-product.jpg'}
              alt={'YX1 Wireless Earphones'}
              hasControls={false}
              quantity={2}
            />
            <CartProduct
              name='YX1 Wireless Earphones'
              price={100}
              imgSrc={'/assets/product-yx1-earphones/mobile/image-product.jpg'}
              alt={'YX1 Wireless Earphones'}
              hasControls={true}
            />
          </CartProducts>

          <PriceComponents>
            <PriceComponent name='Total' price={2345} />
            <PriceComponent name='Shipping' price={2345} />
            <PriceComponent name='Vat (included)' price={2345} />
            <PriceComponent name='Grand Total' price={2345} isGrandTotal />
          </PriceComponents>

          <ButtonPrimary type='submit' className='w-full'>
            Continue to pay
          </ButtonPrimary>
        </SummaryContainer>
      </Form>
    </GlobalContainer>
  );
};

export { CheckoutPageTemplate };

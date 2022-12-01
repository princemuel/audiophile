import {
  ButtonPrimary,
  GlobalContainer,
  Heading,
  PriceComponent,
} from 'components/atoms';
import {
  Fieldset,
  Form,
  FormContainer,
  FormGroup,
  Label,
  Legend,
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
          <Heading as='h1' id='checkout-heading' className='fw-700 uppercase'>
            Checkout
          </Heading>

          {/************* BILLING *************/}
          <Fieldset>
            <Legend>Billing Details</Legend>

            <FormGroup>
              <Label htmlFor='name'>Name</Label>
              <TextInput
                type='text'
                className=''
                id='name'
                name='name'
                placeholder='Alexei Ward'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='email'>Email</Label>
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
              <Label htmlFor='phone'>Phone Number</Label>
              <TextInput
                type='tel'
                className=''
                id='phone'
                name='phone'
                placeholder='+1 202-555-0136'
                required
              />
            </FormGroup>
          </Fieldset>
          {/************* SHIPPING *************/}
          <Fieldset>
            <Legend>Shipping Info</Legend>

            <FormGroup>
              <Label htmlFor='address'>Address</Label>
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
              <Label htmlFor='code'>Zip CODE</Label>
              <TextInput
                type='address'
                className=''
                name='code'
                placeholder='10001'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='city'>City</Label>
              <TextInput
                type='address'
                className=''
                name='city'
                placeholder='New York'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='country'>Country</Label>
              <TextInput
                type='address'
                className=''
                name='country'
                placeholder='United States'
                required
              />
            </FormGroup>
          </Fieldset>
          {/************* PAYMENT *************/}
          <Fieldset>
            <Legend>Payment Details</Legend>

            <RadioGroup>
              <FormGroup>
                <RadioInput
                  type='radio'
                  id='eMoney'
                  name='paymentMethod'
                  value='eMoney'
                />
                <Label htmlFor='eMoney'>e-Money</Label>
              </FormGroup>

              <FormGroup>
                <RadioInput
                  type='radio'
                  id='inCash'
                  name='paymentMethod'
                  value='inCash'
                />
                <Label htmlFor='inCash'>Cash on Delivery</Label>
              </FormGroup>
            </RadioGroup>

            <div>
              <FormGroup>
                <Label htmlFor='eMoneyNumber'>e-Money Number</Label>
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
                <Label htmlFor='eMoneyPin'>e-Money PIN</Label>
                <TextInput
                  type='number'
                  className=''
                  id='eMoneyPin'
                  name='eMoneyPin'
                  placeholder='6891'
                  required
                />
              </FormGroup>
            </div>
          </Fieldset>
        </FormContainer>

        <SummaryContainer aria-labelledby='summary'>
          <Heading as='h3' id='summary' className=''>
            Summary
          </Heading>

          {/* Component imag name price quantity*/}

          <PriceComponent name='Total' price={2345} />
          <PriceComponent name='Shipping' price={2345} />
          <PriceComponent name='Vat (included)' price={2345} />
          <PriceComponent name='Grand Total' price={2345} />

          <ButtonPrimary type='submit'>Continue to pay</ButtonPrimary>
        </SummaryContainer>
      </Form>
    </GlobalContainer>
  );
};

export { CheckoutPageTemplate };

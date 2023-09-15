'use client';

import { Button, Text } from '@/components';
import { FormControls, TextField } from '@/components/atoms/input';
import { CheckoutFormSchema, type RHFormSubmitHandler } from '@/helpers';
import { useZodForm } from '@/hooks';

type Props = {};
export const CheckoutForm = (props: Props) => {
  const methods = useZodForm({ schema: CheckoutFormSchema, mode: 'onChange' });

  const onSubmit: RHFormSubmitHandler<typeof CheckoutFormSchema> = (data) => {
    console.log(data);
    // methods.reset()
  };

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className='relative flex flex-wrap items-start gap-7 pb-24'
    >
      <section className='grow-[9999] basis-[37.5rem] rounded-lg bg-white'>
        <div className='mb-7 flex flex-col gap-7 md:p-10'>
          <header className='flex items-center justify-between'>
            <Text as='h1' variant={'monochrome'} size={'xl'} weight={'bold'}>
              Checkout
            </Text>
          </header>
          {/*<!--------- BILLING DETAILS START ---------!>*/}
          <fieldset className='> * + * space-y-5'>
            <Text
              as='legend'
              variant={'brand'}
              size={'xx-small'}
              weight={'bold'}
            >
              Billing Details
            </Text>

            <div className='grid grid-cols-6 gap-5'>
              <FormControls className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  name='clientName'
                  placeholder='Alexei Ward'
                  autoComplete='name'
                />
              </FormControls>

              <FormControls className='col-span-6 sm:col-span-3'>
                <TextField
                  type='email'
                  name='clientEmail'
                  placeholder='alexei@mail.com'
                  autoComplete='email'
                />
              </FormControls>

              <FormControls className='col-span-6 sm:col-span-3'>
                <TextField
                  type='tel'
                  name='clientPhone'
                  placeholder='+1 202-555-0136'
                  autoComplete='tel'
                />
              </FormControls>
            </div>
          </fieldset>
          {/*<!--------- BILLING DETAILS END ---------!>*/}

          {/*<!--------- SHIPPING DETAILS START ---------!>*/}
          <fieldset className='> * + * space-y-5'>
            <Text
              as='legend'
              variant={'brand'}
              size={'xx-small'}
              weight={'bold'}
            >
              Shipping Info
            </Text>

            <div className='grid grid-cols-6 gap-5'>
              <FormControls className='col-span-6'>
                <TextField
                  type='text'
                  name='clientAddress.street'
                  placeholder='1137 Williams Avenue'
                  autoComplete='street-address'
                />
              </FormControls>

              <FormControls className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  name='clientAddress.postCode'
                  placeholder='10001'
                  autoComplete='postal-code'
                />
              </FormControls>

              <FormControls className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  name='clientAddress.city'
                  placeholder='New York'
                  autoComplete='address-level2'
                />
              </FormControls>

              <FormControls className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  name='clientAddress.country'
                  placeholder='United States'
                  autoComplete='country-name'
                />
              </FormControls>
            </div>
          </fieldset>
          {/*<!--------- SHIPPING DETAILS END ---------!>*/}

          {/*<!--------- PAYMENT ---------!>*/}
          <fieldset className='> * + * space-y-7'>
            <Text
              as='legend'
              variant={'brand'}
              size={'xx-small'}
              weight={'bold'}
            >
              Payment Details
            </Text>

            <div className='grid grid-cols-6 gap-5'>
              <div className='col-span-6 sm:col-span-3'>
                <Text
                  as='p'
                  variant={'monochrome'}
                  weight={'bold'}
                  className='text-xs -tracking-[0.214px]'
                >
                  Payment Method
                </Text>
              </div>

              <div className='col-span-6 flex flex-col gap-5 sm:col-span-3'></div>
            </div>
          </fieldset>
          {/************* PAYMENT *************/}
        </div>
      </section>

      <aside className='grow basis-[22rem] rounded-lg bg-white md:sticky md:top-7'>
        <div className='flex flex-col gap-6 md:p-7'>
          <header className='flex items-center justify-between'>
            <Text as='h3' variant={'monochrome'} size={'small'} weight={'bold'}>
              Summary
            </Text>
          </header>

          <ul className='flex flex-col gap-4'>
            <li className='flex items-center gap-2'></li>
          </ul>

          <ul className='flex flex-col gap-2'>
            <li className='flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Total
              </Text>

              <Text
                as='p'
                variant={'monochrome'}
                size={'small'}
                weight={'bold'}
              >
                {/* {formatPrice(subTotal)} */}$ 1023
              </Text>
            </li>

            <li className='flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Shipping
              </Text>
              <Text
                as='p'
                variant={'monochrome'}
                size={'small'}
                weight={'bold'}
              >
                {/* {formatPrice(shipping)} */}$ 1023
              </Text>
            </li>

            <li className='flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Vat &#40;included&#41;
              </Text>
              <Text
                as='p'
                variant={'monochrome'}
                size={'small'}
                weight={'bold'}
              >
                {/* {formatPrice(tax)} */}$ 1023
              </Text>
            </li>

            <li className='mt-4 flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Grand Total
              </Text>
              <Text as='p' variant={'brand'} size={'small'} weight={'bold'}>
                {/* {formatPrice(totalAmount)} */}$ 1023
              </Text>
            </li>
          </ul>

          <Button
            type='submit'
            variant={'primary'}
            size={'medium'}
            form='checkout-form'
            className='justify-center'
          >
            Continue &amp; Pay
          </Button>
        </div>
      </aside>
    </form>
  );
};

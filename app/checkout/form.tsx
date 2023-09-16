'use client';

import { Button, NextImage, Text } from '@/components';
import { FormControls, TextField } from '@/components/atoms/input';
import {
  CheckoutFormSchema,
  approximate,
  formatPrice,
  hasValues,
  type RHFormSubmitHandler,
} from '@/helpers';
import {
  cartDispatch,
  cartState,
  computeSubTotal,
  computeTax,
  computeTotalAmount,
  useZodForm,
} from '@/hooks';

type Props = {};
export const CheckoutForm = (props: Props) => {
  const cartItems = cartState();
  const dispatch = cartDispatch();

  const methods = useZodForm({ schema: CheckoutFormSchema, mode: 'onChange' });

  const onSubmit: RHFormSubmitHandler<typeof CheckoutFormSchema> = (data) => {
    console.log(data);
    // methods.reset()
  };

  const subTotal = computeSubTotal(cartItems);
  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className='relative flex flex-wrap items-start gap-7 pb-36'
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

      <aside className='grow basis-[22rem] rounded-lg bg-white md:sticky md:top-36'>
        <div className='flex flex-col gap-6 md:p-7'>
          <header className='flex items-center justify-between'>
            <Text as='h3' variant={'monochrome'} size={'small'} weight={'bold'}>
              Summary
            </Text>
          </header>

          <ul className='flex flex-col gap-4'>
            {hasValues(cartItems) ? (
              cartItems.map((item) => {
                return (
                  <li
                    key={`checkout-${item?.slug}`}
                    className='flex items-center gap-2'
                  >
                    <figure className='h-full w-auto overflow-hidden rounded-brand'>
                      <NextImage
                        src={item?.image}
                        alt={item?.slug}
                        width={64}
                        height={64}
                      />
                    </figure>

                    <header className='mr-auto flex flex-col justify-around'>
                      <Text
                        as='p'
                        variant={'monochrome'}
                        size={'xx-small'}
                        weight={'bold'}
                      >
                        {item?.name}
                      </Text>

                      <Text as='p' size={'xx-small'} weight={'bold'}>
                        {formatPrice(item?.price)}
                      </Text>
                    </header>

                    <div>
                      <Text
                        as='p'
                        size={'xx-small'}
                        weight={'bold'}
                        className='lowercase'
                      >
                        x{item?.quantity}
                      </Text>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className='flex items-center gap-2'>No items to show</li>
            )}
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
                {formatPrice(approximate(subTotal))}
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
                {formatPrice(50)}
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
                {formatPrice(approximate(computeTax(subTotal)))}
              </Text>
            </li>

            <li className='mt-4 flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Grand Total
              </Text>
              <Text as='p' variant={'brand'} size={'small'} weight={'bold'}>
                {formatPrice(approximate(computeTotalAmount(cartItems)))}
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

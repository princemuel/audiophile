'use client';

import { icons } from '@/common';
import {
  CheckoutFormSchema,
  FormSubmitHandler,
  calculateTotal,
  formatPrice,
  hasValues,
  useCartStore,
  useZodForm,
} from '@/lib';
import { useMemo, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, Text } from '../atoms';
import { CartProduct, FormField } from '../molecules';

interface Props {}

const CheckoutForm = (props: Props) => {
  const cartItems = useCartStore().cartItems;

  const methods = useZodForm({ schema: CheckoutFormSchema, mode: 'onChange' });
  const [paymentType, setPaymentType] = useState<'eMoney' | 'inCash'>('eMoney');

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      total += calculateTotal(item.quantity, item.price);
      return total;
    }, 0);
  }, [cartItems]);

  const shipping = 50;
  const tax = (20 / 100) * subTotal;
  const totalAmount = tax + subTotal + shipping;

  const onSubmit: FormSubmitHandler<typeof CheckoutFormSchema> = (data) => {
    console.log(data);
    // methods.reset()
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='relative flex flex-wrap items-start gap-12 pb-40'
      >
        <section className='grow-[9999] basis-[60rem] rounded-brand bg-white'>
          <div className='mb-12 flex flex-col gap-12 md:p-16'>
            <header className='flex items-center justify-between'>
              <Text as='h1' size={'xl'} weight={'bold'}>
                Checkout
              </Text>
            </header>
            {/*<!--------- BILLING DETAILS START ---------!>*/}
            <fieldset className='> * + * space-y-8'>
              <Text
                as='legend'
                variant={'secondary'}
                size={'xs'}
                weight={'bold'}
                className=''
              >
                Billing Details
              </Text>

              <div className='grid grid-cols-6 gap-8'>
                <FormField
                  type='text'
                  name='clientName'
                  label={'Name'}
                  placeholder='Alexei Ward'
                  className='col-span-6 sm:col-span-3'
                  autoComplete='name'
                />
                <FormField
                  type='email'
                  name='clientEmail'
                  label={'Email Address'}
                  placeholder='alexei@mail.com'
                  className='col-span-6 sm:col-span-3'
                  autoComplete='email'
                />
                <FormField
                  type='tel'
                  name='clientPhone'
                  label={'Phone Number'}
                  placeholder='+1 202-555-0136'
                  className='col-span-6 sm:col-span-3'
                  autoComplete='tel'
                />
              </div>
            </fieldset>
            {/*<!--------- BILLING DETAILS END ---------!>*/}
            {/*<!--------- SHIPPING DETAILS START ---------!>*/}
            <fieldset className='> * + * space-y-8'>
              <Text
                as='legend'
                variant={'secondary'}
                size={'xs'}
                weight={'bold'}
              >
                Shipping Info
              </Text>

              <div className='grid grid-cols-6 gap-8'>
                <FormField
                  type='text'
                  name='clientAddress.street'
                  label={'Your Address'}
                  placeholder='1137 Williams Avenue'
                  className='col-span-6'
                  autoComplete='street-address'
                />
                <FormField
                  type='text'
                  name='clientAddress.postCode'
                  label={'ZIP Code'}
                  placeholder='10001'
                  className='col-span-6 sm:col-span-3'
                  autoComplete='postal-code'
                />

                <FormField
                  type='text'
                  name='clientAddress.city'
                  label={'City'}
                  placeholder='New York'
                  className='col-span-6 sm:col-span-3'
                  autoComplete='address-level2'
                />

                <FormField
                  type='text'
                  name='clientAddress.country'
                  label={'Country'}
                  placeholder='United States'
                  className='col-span-6 sm:col-span-3'
                  autoComplete='country-name'
                />
              </div>
            </fieldset>
            {/*<!--------- SHIPPING DETAILS END ---------!>*/}
            {/*<!--------- PAYMENT ---------!>*/}
            <fieldset className='> * + * space-y-12'>
              <Text
                as='legend'
                variant={'secondary'}
                size={'xs'}
                weight={'bold'}
              >
                Payment Details
              </Text>

              <div className='grid grid-cols-6 gap-8'>
                <div className='col-span-6 sm:col-span-3'>
                  <Text
                    as='p'
                    variant={'primary'}
                    weight={'bold'}
                    className={'text-[1.3rem] -tracking-[0.214px]'}
                  >
                    Payment Method
                  </Text>
                </div>

                <div className='col-span-6 flex flex-col gap-8 sm:col-span-3'>
                  <button
                    type='button'
                    aria-expanded={paymentType === 'eMoney'}
                    onClick={() => setPaymentType('eMoney')}
                    className='group relative flex items-center gap-6 rounded-brand border border-slate-300 bg-transparent px-7 py-7 aria-expanded:border-brand-500 hover:border-brand-500 focus:border-brand-500'
                  >
                    <span className='aspect-square w-4 rounded-full outline outline-1 outline-offset-4 outline-slate-300 group-aria-expanded:bg-brand-500'></span>

                    <span className='text-[1.3rem] font-bold -tracking-[0.214px] text-black'>
                      e-Money
                    </span>
                  </button>

                  <button
                    type='button'
                    aria-expanded={paymentType === 'inCash'}
                    onClick={() => setPaymentType('inCash')}
                    className='group relative flex items-center gap-6 rounded-brand border border-slate-300 bg-transparent px-7 py-7 aria-expanded:border-brand-500 hover:border-brand-500 focus:border-brand-500'
                  >
                    <span className='aspect-square w-4 rounded-full outline outline-1 outline-offset-4 outline-slate-300 group-aria-expanded:bg-brand-500'></span>

                    <span className='text-[1.3rem] font-bold -tracking-[0.214px] text-black'>
                      Cash on Delivery
                    </span>
                  </button>
                </div>
              </div>

              {paymentType === 'inCash' ? (
                <div className='flex flex-col gap-12 sx:flex-row sx:items-start'>
                  <p className='self-center sx:self-auto'>
                    <icons.form.cash />
                  </p>
                  <Text as='p' aria-live='assertive' variant={'primary/50'}>
                    The &apos;Cash on Delivery&apos; option enables you to pay
                    in cash when our delivery courier arrives at your residence.
                    Just make sure your address is correct so that your order
                    will not be cancelled.
                  </Text>
                </div>
              ) : (
                <div className='grid grid-cols-6 gap-8'>
                  <FormField
                    type='text'
                    name='paymentMethod.num'
                    label={'e-Money Number'}
                    placeholder='238521993'
                    className='col-span-6 sm:col-span-3'
                    autoComplete='address-level2'
                  />

                  <FormField
                    type='text'
                    name='clientAddress.country'
                    label={'e-Money PIN'}
                    placeholder='6891'
                    className='col-span-6 sm:col-span-3'
                    autoComplete='country-name'
                  />
                </div>
              )}
            </fieldset>
            {/************* PAYMENT *************/}{' '}
          </div>
        </section>

        <aside className='grow basis-[35rem] rounded-brand bg-white md:sticky md:top-12'>
          <div className='flex flex-col gap-10 md:p-12'>
            <header className='flex items-center justify-between'>
              <Text as='h3' size={'xl'} weight={'bold'}>
                Summary
              </Text>
            </header>

            <ul className='flex flex-col gap-6'>
              {hasValues(cartItems) ? (
                cartItems.map((item) => {
                  return (
                    <li key={item?.slug} className='flex items-center gap-4'>
                      <CartProduct item={item} type='checkout' />
                    </li>
                  );
                })
              ) : (
                <li className='flex items-center gap-4'>No items to show</li>
              )}
            </ul>

            <ul className='flex flex-col gap-3'>
              <li className='flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Total
                </Text>
                <Text as='p' variant={'primary'} size={'sm'} weight={'bold'}>
                  {formatPrice(subTotal)}
                </Text>
              </li>
              <li className='flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Shipping
                </Text>
                <Text as='p' variant={'primary'} size={'sm'} weight={'bold'}>
                  {formatPrice(shipping)}
                </Text>
              </li>
              <li className='flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Vat &#40;included&#41;
                </Text>
                <Text as='p' variant={'primary'} size={'sm'} weight={'bold'}>
                  {formatPrice(tax)}
                </Text>
              </li>

              <li className='mt-4 flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Grand Total
                </Text>
                <Text as='p' variant={'secondary'} size={'sm'} weight={'bold'}>
                  {formatPrice(totalAmount)}
                </Text>
              </li>
            </ul>

            <Button
              type='submit'
              form='checkout-form'
              className='justify-center'
            >
              Continue &amp; Pay
            </Button>
          </div>
        </aside>
      </form>
    </FormProvider>
  );
};

export { CheckoutForm };

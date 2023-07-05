'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FormLabel, ResponsiveImage, Text } from '../atoms';
import { FormField } from '../molecules';

interface Props {}

const CheckoutForm = (props: Props) => {
  // const methods = useZodForm({schema: CheckoutFormSchema})
  const methods = useForm();
  const [paymentType, setPaymentType] = useState('eMoney');

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='relative flex flex-wrap items-start gap-12 py-40'
      >
        <section className='grow-[9999] basis-[40rem] rounded-brand bg-white'>
          <div className='mb-12 flex flex-col gap-12 md:p-16'>
            <header className='flex items-center justify-between'>
              <Text as='h1' variant={'secondary'} size={'xl'} weight={'bold'}>
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
                  className='col-span-6'
                  autoComplete='name'
                />
                <FormField
                  type='email'
                  name='clientEmail'
                  label={'Email Address'}
                  placeholder='alexei@mail.com'
                  className='col-span-6'
                  autoComplete='email'
                />
                <FormField
                  type='tel'
                  name='clientPhone'
                  label={'Phone Number'}
                  placeholder='+1 202-555-0136'
                  className='col-span-6'
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
                  className='col-span-6'
                  autoComplete='postal-code'
                />

                <FormField
                  type='text'
                  name='clientAddress.city'
                  label={'City'}
                  placeholder='New York'
                  className='col-span-6'
                  autoComplete='address-level2'
                />

                <FormField
                  type='text'
                  name='clientAddress.country'
                  label={'Country'}
                  placeholder='United States'
                  className='col-span-6'
                  autoComplete='country-name'
                />
              </div>
            </fieldset>
            {/*<!--------- SHIPPING DETAILS END ---------!>*/}
            {/************* PAYMENT *************/}
            <fieldset className='> * + * space-y-8'>
              <Text
                as='legend'
                variant={'secondary'}
                size={'xs'}
                weight={'bold'}
              >
                Payment Details
              </Text>

              {/* <FormLabel htmlFor='inCash' className={''}>
                    Cash on Delivery
                  </FormLabel> */}

              <div className='flex flex-col gap-6'>
                <Text
                  as='p'
                  variant={'primary'}
                  weight={'bold'}
                  className={'text-[1.3rem] -tracking-[0.214px]'}
                >
                  Payment Method
                </Text>

                <div className='col-span-6 flex flex-col gap-8'>
                  <div className='relative flex items-center gap-6 rounded-brand border border-slate-300 bg-transparent px-8 py-8 hover:border-brand-500 focus:border-brand-500'>
                    <input
                      type='radio'
                      id='eMoney'
                      name='paymentMethod'
                      value='eMoney'
                      className='accent-brand-500'
                    />

                    <FormLabel htmlFor='eMoney' className={''}>
                      e-Money
                    </FormLabel>
                  </div>

                  <div className='relative flex items-center gap-6 rounded-brand border border-slate-300 bg-transparent px-8 py-8 hover:border-brand-500 focus:border-brand-500'>
                    <input
                      type='radio'
                      id='inCash'
                      name='paymentMethod'
                      value='inCash'
                      className='accent-brand-500'
                    />
                    <FormLabel htmlFor='inCash' className={''}>
                      Cash on Delivery
                    </FormLabel>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-6 gap-8'>
                <FormField
                  type='text'
                  name='paymentMethod.num'
                  label={'e-Money Number'}
                  placeholder='New York'
                  className='col-span-6'
                  autoComplete='address-level2'
                />

                <FormField
                  type='text'
                  name='clientAddress.country'
                  label={'e-Money PIN'}
                  placeholder='United States'
                  className='col-span-6'
                  autoComplete='country-name'
                />
              </div>
            </fieldset>
            {/************* PAYMENT *************/}{' '}
          </div>
        </section>

        <aside className='grow basis-[35rem] rounded-brand bg-white md:sticky md:top-24'>
          <div className='flex flex-col gap-16 md:p-12'>
            <header className='flex items-center justify-between'>
              <Text as='h3' variant={'secondary'} size={'xl'} weight={'bold'}>
                Summary
              </Text>
            </header>

            <ul className='flex flex-col gap-10'>
              {[1, 2, 3].map((el) => {
                return (
                  <li key={el} className='flex items-center gap-6'>
                    <ResponsiveImage
                      src={'/assets/cart/image-xx59-headphones.jpg'}
                      alt={'name'}
                      width={64}
                      height={64}
                      className=''
                      container='rounded-brand overflow-hidden w-auto'
                    />

                    <header className='flex flex-col justify-around'>
                      <Text as='p' weight={'bold'} uppercase>
                        XX99 MK II
                      </Text>

                      <Text as='p' variant={'primary/50'} weight={'bold'}>
                        $ 5,396
                      </Text>
                    </header>

                    <div className='ml-auto'>
                      <Text as='p' variant={'primary/50'} weight={'bold'}>
                        x1
                      </Text>
                    </div>
                  </li>
                );
              })}
            </ul>

            <ul className='flex flex-col gap-6'>
              <li className='flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Total
                </Text>
                <Text as='p' variant={'primary'} size={'sm'} weight={'bold'}>
                  $ 5,396
                </Text>
              </li>
              <li className='flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Shipping
                </Text>
                <Text as='p' variant={'primary'} size={'sm'} weight={'bold'}>
                  $ 5,396
                </Text>
              </li>
              <li className='flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Vat &#40;included&#41;
                </Text>
                <Text as='p' variant={'primary'} size={'sm'} weight={'bold'}>
                  $ 5,396
                </Text>
              </li>

              <li className='mt-4 flex items-center justify-between'>
                <Text as='h5' variant={'primary/50'} className='uppercase'>
                  Grand Total
                </Text>
                <Text as='p' variant={'secondary'} size={'sm'} weight={'bold'}>
                  $ 5,396
                </Text>
              </li>
            </ul>

            <Button type='submit' className='justify-center' form='checkout'>
              Continue &amp; Pay
            </Button>
          </div>
        </aside>
      </form>
    </FormProvider>
  );
};

export { CheckoutForm };

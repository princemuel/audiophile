'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { FormLabel, Text } from '../atoms';
import { FormField } from '../molecules';

interface Props {}

const CheckoutForm = (props: Props) => {
  // const methods = useZodForm({schema: CheckoutFormSchema})
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='flex flex-wrap items-start gap-12'
      >
        <section className='flex grow-[9999] basis-[40rem] flex-col gap-12 rounded-brand bg-white'>
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
            <Text as='legend' variant={'secondary'} size={'xs'} weight={'bold'}>
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
            <Text as='legend' variant={'secondary'} size={'xs'} weight={'bold'}>
              Payment Details
            </Text>

            <div className='grid grid-cols-6 gap-8'>
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
          </fieldset>

          {/************* PAYMENT *************/}
        </section>

        <section className='grow basis-[35rem] rounded-brand bg-white'>
          <header className='flex items-center justify-between'>
            <Text as='h3' variant={'secondary'} size={'xl'} weight={'bold'}>
              Summary
            </Text>
          </header>
        </section>
      </form>
    </FormProvider>
  );
};

export { CheckoutForm };

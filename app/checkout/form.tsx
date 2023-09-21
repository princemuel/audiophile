'use client';

import { Button, ClientOnly, NextImage, Text } from '@/components';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from '@/components/atoms/input';
import {
  ProductOrderSchema,
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
  useCheckoutModal,
  useZodForm,
} from '@/hooks';
import { RadioGroup } from '@headlessui/react';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';

const paymentTypes = [
  { type: 'eMoney', label: 'e-Money' },
  { type: 'inCash', label: 'Cash on Delivery' },
] as const;

export const CheckoutForm = () => {
  const checkoutModal = useCheckoutModal();
  const cartItems = cartState();
  const dispatch = cartDispatch();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    control,
    formState: { errors },
  } = useZodForm({
    schema: ProductOrderSchema,
    mode: 'onChange',
    defaultValues: {
      payment: { type: 'eMoney' },
    },
  });

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: RHFormSubmitHandler<typeof ProductOrderSchema> = (data) => {
    const result = ProductOrderSchema.safeParse(data);

    if (result.success) {
      console.log(result.data);
      checkoutModal.show();
    } else {
      console.log(result.error);
    }
    //  reset()
  };

  const subTotal = computeSubTotal(cartItems);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative flex flex-wrap items-start gap-7 pb-36'
    >
      <section className='grow-[9999] basis-[37.5rem] rounded-lg bg-white'>
        <div className='mb-7 flex flex-col gap-12 md:p-10'>
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
              <FormControl className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  id='clientName'
                  placeholder='Alexei Ward'
                  autoComplete='name'
                  {...register('clientName')}
                  aria-invalid={Boolean(errors?.clientName)}
                  aria-errormessage={`errors-clientName`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientName'>Name</FormLabel>

                  <FormHelperText id='errors-clientName'>
                    {errors?.clientName?.message}
                  </FormHelperText>
                </div>
              </FormControl>

              <FormControl className='col-span-6 sm:col-span-3'>
                <TextField
                  type='email'
                  id='clientEmail'
                  placeholder='alexei@mail.com'
                  autoComplete='email'
                  {...register('clientEmail')}
                  aria-invalid={Boolean(errors?.clientEmail)}
                  aria-errormessage={`errors-clientEmail`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientEmail'>Email Address</FormLabel>

                  <FormHelperText id='errors-clientEmail'>
                    {errors?.clientEmail?.message}
                  </FormHelperText>
                </div>
              </FormControl>

              <FormControl className='col-span-6 sm:col-span-3'>
                <TextField
                  type='tel'
                  id='clientPhone'
                  placeholder='+1 202-555-0136'
                  autoComplete='tel'
                  {...register('clientPhone')}
                  aria-invalid={Boolean(errors?.clientPhone)}
                  aria-errormessage={`errors-clientPhone`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientPhone'>Phone Number</FormLabel>

                  <FormHelperText id='errors-clientPhone'>
                    {errors?.clientPhone?.message}
                  </FormHelperText>
                </div>
              </FormControl>
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
              <FormControl className='col-span-6'>
                <TextField
                  type='text'
                  id='clientAddress.street'
                  placeholder='1137 Williams Avenue'
                  autoComplete='street-address'
                  {...register('clientAddress.street')}
                  aria-invalid={Boolean(errors?.clientAddress?.street)}
                  aria-errormessage={`errors-clientAddress-street`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientAddress.street'>
                    Your Address
                  </FormLabel>

                  <FormHelperText id='errors-clientAddress-street'>
                    {errors?.clientAddress?.street?.message}
                  </FormHelperText>
                </div>
              </FormControl>

              <FormControl className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  id='clientAddress.postCode'
                  placeholder='10001'
                  autoComplete='postal-code'
                  {...register('clientAddress.postCode')}
                  aria-invalid={Boolean(errors?.clientAddress?.postCode)}
                  aria-errormessage={`errors-clientAddress-postCode`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientAddress.postCode'>
                    ZIP Code
                  </FormLabel>

                  <FormHelperText id='errors-clientAddress-postCode'>
                    {errors?.clientAddress?.postCode?.message}
                  </FormHelperText>
                </div>
              </FormControl>

              <FormControl className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  id='clientAddress.city'
                  placeholder='New York'
                  autoComplete='address-level2'
                  {...register('clientAddress.city')}
                  aria-invalid={Boolean(errors?.clientAddress?.city)}
                  aria-errormessage={`errors-clientAddress-city`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientAddress.city'>City</FormLabel>

                  <FormHelperText id='errors-clientAddress-city'>
                    {errors?.clientAddress?.city?.message}
                  </FormHelperText>
                </div>
              </FormControl>

              <FormControl className='col-span-6 sm:col-span-3'>
                <TextField
                  type='text'
                  id='clientAddress.country'
                  placeholder='United States'
                  autoComplete='country-name'
                  {...register('clientAddress.country')}
                  aria-invalid={Boolean(errors?.clientAddress?.country)}
                  aria-errormessage={`errors-clientAddress-country`}
                />

                <div className='flex items-center justify-between text-black peer-aria-[invalid="true"]:!text-brand-800'>
                  <FormLabel htmlFor='clientAddress.country'>Country</FormLabel>

                  <FormHelperText id='errors-clientAddress-country'>
                    {errors?.clientAddress?.country?.message}
                  </FormHelperText>
                </div>
              </FormControl>
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

            <Controller
              name='payment'
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} className='grid grid-cols-6 gap-5'>
                  <div className='col-span-6 sm:col-span-3'>
                    <RadioGroup.Label
                      as={Text}
                      variant={'monochrome'}
                      weight={'bold'}
                      className='text-xs -tracking-[0.214px]'
                    >
                      Payment Method
                    </RadioGroup.Label>
                  </div>

                  <div className='col-span-6 flex flex-col gap-5 sm:col-span-3'>
                    {paymentTypes.map((payment) => (
                      <RadioGroup.Option
                        key={payment.type}
                        value={payment.type}
                        className={
                          'ui-checked:border-brand-500 ui-active:border-brand-500 group relative flex cursor-pointer items-center gap-6 rounded-lg border border-slate-300 bg-transparent px-5 py-4 hover:border-brand-500'
                        }
                      >
                        <span className='ui-checked:bg-brand-500 aspect-square w-2 rounded-full outline outline-1 outline-offset-4 outline-slate-300' />

                        <span className='text-300 font-bold leading-normal -tracking-[0.25px] text-black'>
                          {payment.label}
                        </span>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              )}
            />
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

          <ClientOnly>
            <ul className='flex flex-col gap-4'>
              {hasValues(cartItems) ? (
                cartItems.map((item) => {
                  return (
                    <li
                      key={`checkout-${item?.slug}`}
                      className='flex items-center gap-4'
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
                          size={'base'}
                          weight={'bold'}
                          className='uppercase'
                        >
                          {item?.name}
                        </Text>

                        <Text
                          as='p'
                          size={'base'}
                          weight={'bold'}
                          className='text-300'
                        >
                          {formatPrice(item?.price)}
                        </Text>
                      </header>

                      <div>
                        <Text
                          as='p'
                          size={'base'}
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
          </ClientOnly>

          <ul className='flex flex-col gap-2'>
            <li className='flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Total
              </Text>

              <ClientOnly>
                <Text
                  as='p'
                  variant={'monochrome'}
                  size={'small'}
                  weight={'bold'}
                >
                  {formatPrice(approximate(subTotal))}
                </Text>
              </ClientOnly>
            </li>

            <li className='flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Shipping
              </Text>

              <ClientOnly>
                <Text
                  as='p'
                  variant={'monochrome'}
                  size={'small'}
                  weight={'bold'}
                >
                  {formatPrice(50)}
                </Text>
              </ClientOnly>
            </li>

            <li className='flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Vat &#40;included&#41;
              </Text>
              <ClientOnly>
                <Text
                  as='p'
                  variant={'monochrome'}
                  size={'small'}
                  weight={'bold'}
                >
                  {formatPrice(approximate(computeTax(subTotal)))}
                </Text>
              </ClientOnly>
            </li>

            <li className='mt-4 flex items-center justify-between'>
              <Text as='h5' size={'base'} className='uppercase'>
                Grand Total
              </Text>
              <ClientOnly>
                <Text as='p' variant={'brand'} size={'small'} weight={'bold'}>
                  {formatPrice(approximate(computeTotalAmount(cartItems)))}
                </Text>
              </ClientOnly>
            </li>
          </ul>

          <Button
            type='submit'
            variant={'primary'}
            size={'medium'}
            className='justify-center'
          >
            Continue &amp; Pay
          </Button>
        </div>
      </aside>
    </form>
  );
};

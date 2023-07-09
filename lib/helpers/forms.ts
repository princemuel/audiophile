import { SubmitHandler } from 'react-hook-form';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

import { ZodType, z } from 'zod';

// Zod Constraints
// Zod Constraints
export const GenericStringContraint = z
  .string()
  .min(1, { message: "Can't be empty" })
  .min(3, { message: 'Must 3 or more characters' })
  .trim();

export const GenericEmailContraint = z
  .string()
  .nonempty()
  .email({ message: 'Invalid email address' })
  .min(1, { message: "Can't be empty" })
  .min(6, { message: 'Must more than 6 characters' })
  .toLowerCase()
  .trim();

// Zod Schemas

const GenericAddressSchema = z.object({
  street: GenericStringContraint.nonempty(),
  city: GenericStringContraint.nonempty(),
  country: GenericStringContraint.nonempty(),
  postCode: GenericStringContraint.nonempty().toUpperCase(),
});

// Zod Schemas

const PaymentUnion = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('eMoney'),
    data: z.object({
      number: z.number().gt(9).lte(16),
      pin: z.number().gt(3).lt(5),
    }),
  }),
  z.object({ type: z.literal('inCash') }),
]);

export const CheckoutFormSchema = z.object({
  clientName: GenericStringContraint,
  clientEmail: GenericEmailContraint,
  clientPhone: z.string().refine(isMobilePhone),
  clientAddress: GenericAddressSchema,
  payment: PaymentUnion,
});

// React Hook Form Types
export type RHFSubmitHandler<T extends ZodType<any, any, any>> = SubmitHandler<
  z.infer<T>
>;

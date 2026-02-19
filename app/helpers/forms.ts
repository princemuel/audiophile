import { SubmitHandler } from 'react-hook-form';

import isMobilePhone from 'validator/es/lib/isMobilePhone';
import isPostalCode from 'validator/es/lib/isPostalCode';
import { ZodType, z } from 'zod';

// Zod Constraints
const StringContraint = z
  .string()
  .min(1, { message: "Can't be empty" })
  .min(3, { message: 'Must 3 or more characters' })
  .trim();

const EmailContraint = z
  .string()
  .email({ message: 'Invalid email address' })
  .min(1, { message: "Can't be empty" })
  .min(6, { message: 'Must 6 or more characters' })
  .toLowerCase()
  .trim();

// Zod Schemas
const paymentTypeEnum = z.enum(['eMoney', 'cash']);

const BaseOrderSchema = z.object({
  payment: paymentTypeEnum,

  clientName: StringContraint,
  clientEmail: EmailContraint,
  clientPhone: z.string().refine(isMobilePhone),
  clientAddress: z.object({
    street: StringContraint,
    city: StringContraint,
    country: StringContraint,
    postCode: StringContraint.transform((value) => value.toUpperCase()).refine(
      (value) => isPostalCode(value, 'any')
    ),
  }),
});

const PaymentUnion = z.discriminatedUnion('payment', [
  // Cash on Delivery
  z.object({
    payment: z.literal(paymentTypeEnum.enum.cash),
  }),

  // eMoney
  z.object({
    payment: z.literal(paymentTypeEnum.enum.eMoney),
    cardNumber: z
      .string()
      .min(9, { message: 'Must 9 or more characters' })
      .max(16, { message: 'Maximum length exceeded' })
      .trim(),
    cardPin: z
      .string()
      .length(4, {
        message: 'Must be exactly 4 characters',
      })
      .trim(),
  }),
]);

export const ProductOrderSchema = z.intersection(PaymentUnion, BaseOrderSchema);

// React Hook Form Types
export interface RHFormSubmitHandler<T extends ZodType<any, any, any>>
  extends SubmitHandler<z.infer<T>> {}

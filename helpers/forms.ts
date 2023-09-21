import { SubmitHandler } from 'react-hook-form';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import isPostalCode from 'validator/es/lib/isPostalCode';
import { ZodType, z } from 'zod';
// Zod Constraints
const StringContraint = z
  .string()
  .min(1, { message: "Can't be empty" })
  .min(3, { message: 'Must 2 or more characters' })
  .trim();

const EmailContraint = z
  .string()
  .email({ message: 'Invalid email address' })
  .min(1, { message: "Can't be empty" })
  .min(6, { message: 'Must 6 or more characters' })
  .toLowerCase()
  .trim();

// Zod Schemas
const AddressSchema = z.object({
  street: StringContraint,
  city: StringContraint,
  country: StringContraint,
  postCode: StringContraint.toUpperCase().refine(
    (value) => isPostalCode(value, 'any')
    // {
    //   message: 'Must be 5 or more characters',
    // }
  ),
});

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

export const ProductOrderSchema = z.object({
  clientName: StringContraint,
  clientEmail: EmailContraint,
  clientAddress: AddressSchema,
  clientPhone: z.string().refine(isMobilePhone),

  payment: PaymentUnion,
});

// React Hook Form Types
export interface RHFormSubmitHandler<T extends ZodType<any, any, any>>
  extends SubmitHandler<z.infer<T>> {}
export interface FormSubmitHandler<T extends ZodType<any, any, any>>
  extends SubmitHandler<z.infer<T>> {}

import { SubmitHandler } from 'react-hook-form';
import { ZodType, z } from 'zod';

// Zod Constraints
const GenericStringContraint = z
  .string()
  .min(1, { message: "Can't be empty" })
  .min(3, { message: 'Must 3 or more characters' })
  .trim();

// Zod Schemas

// React Hook Form Types
export type RHFSubmitHandler<T extends ZodType<any, any, any>> = SubmitHandler<
  z.infer<T>
>;

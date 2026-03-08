import { z } from "zod";

const payment = z.enum(["E_MONEY", "CASH"]);

export const schema = z.object({
  sand: z.literal("").optional(),

  name: z.string("Can't be empty").min(3, "Must be 3 or more characters").trim(),
  email: z.email("Invalid email address").trim(),
  phone: z.string("Can't be empty").min(3, "Must be 3 or more characters").trim(),
  address: z.object({
    street: z.string("Can't be empty").min(3, "Must be 3 or more characters").trim(),
    city: z.string("Can't be empty").min(3, "Must be 3 or more characters").trim(),
    country: z.string("Can't be empty").min(3, "Must be 3 or more characters").trim(),
    postcode: z
      .string("Can't be empty")
      .min(3, "Must be between 3 and 6 characters")
      .max(6, "Must be between 3 and 6 characters")
      .trim(),
  }),
  payment_method: z.discriminatedUnion("payment_method", [
    z.object({ payment_method: z.literal(payment.enum.CASH) }),
    z.object({
      payment_method: z.literal(payment.enum.E_MONEY),
      payment_account_number: z
        .string("Can't be empty")
        .min(9, "Must be 9 or more characters")
        .max(16, { message: "Maximum length exceeded" })
        .trim(),
      payment_pin: z.string("Can't be empty").length(4, "Must be exactly 4 characters").trim(),
    }),
  ]),
});

import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod/v4";
import { Fragment } from "react";
import { Form, Link } from "react-router";

import { hasValues } from "@/helpers/utils";
import { schema } from "./checkout.schema";

import { Fence } from "@/components/fence";

import { resolveImage } from "@/lib/media";
import { range } from "@/utils/range";
import type { Route } from "./+types/checkout";

export async function action({ request }: Route.ActionArgs) {
  const submission = parseWithZod(await request.formData(), { schema });
  if (submission.status !== "success") return submission.reply();
}

export default function Page({ loaderData, actionData }: Route.ComponentProps) {
  const [form, fields] = useForm({
    lastResult: actionData,
    constraint: getZodConstraint(schema),
    // shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <Fence
      as="main"
      aria-labelledby="a11ty-headline"
      style={{ "--spacer": "calc(var(--spacing) * 36)" }}
      className="bg-gray-50"
    >
      <Link
        to="/"
        className="inline-flex w-max text-sm font-medium text-black/50 transition-colors delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500"
      >
        Go back
      </Link>

      <Form {...getFormProps(form)} className="relative flex flex-wrap items-start gap-7 pb-36">
        <section className="flex grow-999 basis-150 flex-col gap-12 rounded-lg bg-white p-10">
          <h1
            id="a11ty-headline"
            className="text-4xl font-bold whitespace-break-spaces uppercase"
          >
            Checkout <span className="sr-only">page</span>
          </h1>

          <input
            {...getInputProps(fields.sand, { type: "text" })}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute top-auto -left-2500 size-px overflow-hidden"
          />

          <fieldset className="space-y-6">
            <legend className="text-xs font-bold text-brand-500 uppercase">
              Billing Details
            </legend>

            <div className="grid grid-cols-6 gap-6">
              <div className="group col-span-full flex flex-col-reverse gap-3 sm:col-span-3">
                <input
                  {...getInputProps(fields.name, { type: "text" })}
                  aria-errormessage={fields.name.errorId}
                  placeholder="Alexei Ward"
                  autoComplete="given-name"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label htmlFor={fields.name.id} className="text-xs font-bold text-inherit">
                    Name
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.name.errorId}
                  >
                    {fields.name.errors?.join("\n")}
                  </em>
                </div>
              </div>

              <div className="group col-span-full flex flex-col-reverse gap-3 sm:col-span-3">
                <input
                  {...getInputProps(fields.email, { type: "email" })}
                  aria-errormessage={fields.email.errorId}
                  placeholder="alexei@mail.com"
                  autoComplete="email"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label htmlFor={fields.email.id} className="text-xs font-bold text-inherit">
                    Email
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.email.errorId}
                  >
                    {fields.email.errors?.join("\n")}
                  </em>
                </div>
              </div>

              <div className="group col-span-full flex flex-col-reverse gap-3 sm:col-span-3">
                <input
                  {...getInputProps(fields.phone, { type: "tel" })}
                  aria-errormessage={fields.phone.errorId}
                  placeholder="+1 202-555-0136"
                  autoComplete="tel"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label htmlFor={fields.phone.id} className="text-xs font-bold text-inherit">
                    Phone Number
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.phone.errorId}
                  >
                    {fields.phone.errors?.join("\n")}
                  </em>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="text-xs font-bold text-brand-500 uppercase">
              Shipping Info
            </legend>

            <div className="grid grid-cols-6 gap-6">
              <div className="group col-span-full flex flex-col-reverse gap-3">
                <input
                  {...getInputProps(fields.address.getFieldset().street, { type: "text" })}
                  aria-errormessage={fields.address.getFieldset().street.errorId}
                  placeholder="1137 Williams Avenue"
                  autoComplete="street-address"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label
                    htmlFor={fields.address.getFieldset().street.id}
                    className="text-xs font-bold text-inherit"
                  >
                    Your Address
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.address.getFieldset().street.errorId}
                  >
                    {fields.address.getFieldset().street.errors?.join("\n")}
                  </em>
                </div>
              </div>

              <div className="group col-span-full flex flex-col-reverse gap-3 sm:col-span-3">
                <input
                  {...getInputProps(fields.address.getFieldset().postcode, { type: "text" })}
                  aria-errormessage={fields.address.getFieldset().postcode.errorId}
                  placeholder="10001"
                  autoComplete="postal-code"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label
                    htmlFor={fields.address.getFieldset().postcode.id}
                    className="text-xs font-bold text-inherit"
                  >
                    ZIP Code
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.address.getFieldset().postcode.errorId}
                  >
                    {fields.address.getFieldset().postcode.errors?.join("\n")}
                  </em>
                </div>
              </div>

              <div className="group col-span-full flex flex-col-reverse gap-3 sm:col-span-3">
                <input
                  {...getInputProps(fields.address.getFieldset().city, { type: "text" })}
                  aria-errormessage={fields.address.getFieldset().city.errorId}
                  placeholder="New York"
                  autoComplete="address-level2"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label
                    htmlFor={fields.address.getFieldset().city.id}
                    className="text-xs font-bold text-inherit"
                  >
                    City
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.address.getFieldset().city.errorId}
                  >
                    {fields.address.getFieldset().city.errors?.join("\n")}
                  </em>
                </div>
              </div>
              <div className="group col-span-full flex flex-col-reverse gap-3 sm:col-span-3">
                <input
                  {...getInputProps(fields.address.getFieldset().country, { type: "text" })}
                  aria-errormessage={fields.address.getFieldset().country.errorId}
                  placeholder="United States"
                  autoComplete="country-name"
                  className="peer rounded-lg border border-zinc-50 bg-transparent px-5 py-4 text-sm font-bold text-black caret-brand-500 outline-none autofill:bg-transparent user-invalid:border-brand-800 hover:border-brand-500 focus:border-brand-500 focus:user-invalid:border-brand-800"
                />

                <div className="flex items-center justify-between peer-user-invalid:text-brand-800">
                  <label
                    htmlFor={fields.address.getFieldset().country.id}
                    className="text-xs font-bold text-inherit"
                  >
                    Country
                  </label>

                  <em
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-xs text-inherit not-italic"
                    id={fields.address.getFieldset().country.errorId}
                  >
                    {fields.address.getFieldset().country.errors?.join("\n")}
                  </em>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="text-xs font-bold text-brand-500 uppercase">
              Payment Details
            </legend>
          </fieldset>
        </section>

        <aside
          aria-labelledby="summary"
          className="flex grow basis-88 flex-col gap-12 rounded-lg bg-white p-10 md:sticky md:top-36"
        >
          <h2 id="summary" className="text-lg font-bold whitespace-break-spaces uppercase">
            Summary <span className="sr-only">of items in cart</span>
          </h2>

          <ul className="flex flex-col gap-6">
            {hasValues([...range(1, 4)]) ? (
              [...range(1, 4)].map((item, i) => {
                return (
                  <Fragment key={i}>
                    <li className="flex items-center gap-4">
                      <figure className="h-full w-auto overflow-hidden rounded-lg">
                        <img
                          src={resolveImage(
                            "product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
                          )}
                          alt=""
                          width={64}
                          height={64}
                        />
                        <figcaption className="sr-only">XX99 MK II Headphones</figcaption>
                      </figure>

                      <header className="flex flex-col justify-around">
                        <h4 className="text-base font-bold">XX99 MK II</h4>
                        <p className="text-sm font-bold text-black/50">$ 2,999</p>
                      </header>

                      <p className="ml-auto font-bold text-black/50">x1</p>
                    </li>
                  </Fragment>
                );
              })
            ) : (
              <li className="text-black/50">No items to show</li>
            )}
          </ul>

          <section className="flex flex-col gap-2">
            <hgroup className="flex items-center justify-between">
              <h4 className="text-base font-normal text-black/50 uppercase">Total</h4>
              <p className="text-lg font-bold">$5,396</p>
            </hgroup>
            <hgroup className="flex items-center justify-between">
              <h4 className="text-base font-normal text-black/50 uppercase">Shipping</h4>
              <p className="text-lg font-bold">$50</p>
            </hgroup>
            <hgroup className="flex items-center justify-between">
              <h4 className="text-base font-normal text-black/50 uppercase">Vat (included)</h4>
              <p className="text-lg font-bold">$1,079</p>
            </hgroup>
            <hgroup className="flex items-center justify-between">
              <h4 className="text-base font-normal text-black/50 uppercase">Grand Total</h4>
              <p className="text-lg font-bold">$5,446</p>
            </hgroup>
          </section>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-sm bg-brand-500 px-8 py-3 text-sm font-bold text-white uppercase transition-colors delay-0 duration-300 ease-in hover:bg-brand-300 focus:bg-brand-300 focus-visible:ring-1 focus-visible:outline-none active:bg-brand-300"
          >
            Continue &amp; Pay
          </button>
        </aside>
      </Form>
    </Fence>
  );
}

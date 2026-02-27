import { Fence } from "@/components/fence";

import type { Route } from "./+types/checkout";

export default function Page({}: Route.ComponentProps) {
  return (
    <Fence
      as="main"
      aria-labelledby="a11ty-headline"
      style={{ "--spacer": "calc(var(--spacing) * 36)" }}
      className="mb-36"
    >
      <h1 id="a11ty-headline">Checkout</h1>;
    </Fence>
  );
}

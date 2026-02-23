import type { CnOptions } from "tailwind-variants";

import { cn } from "tailwind-variants";

export const tw = (...args: CnOptions) => cn(...args);

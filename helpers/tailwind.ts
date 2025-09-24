import type { CnOptions } from 'tailwind-variants';

import { cn as cx } from 'tailwind-variants';

export const tw = (...args: CnOptions) => cx(...args)({ twMerge: true });

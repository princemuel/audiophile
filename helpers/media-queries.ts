const BREAKPOINTS = {
  xs: 320,
  s: 576,
  md: 786,
  l: 992,
  xl: 1200,
  xxl: 1500,
} as const;

type BreakPointRange = 'min' | 'max';

const media = (value: BreakPointRange) => {
  return value === 'min' ? 'min-width' : 'max-width';
};

export const devices = {
  phone: (value: BreakPointRange) =>
    `(${media(value)}: ${BREAKPOINTS.xs / 16}em)`,
  mobile: (value: BreakPointRange) =>
    `(${media(value)}: ${BREAKPOINTS.s / 16}em)`,
  tablet: (value: BreakPointRange) =>
    `(${media(value)}: ${BREAKPOINTS.md / 16}em)`,
  ipad: (value: BreakPointRange) =>
    `(${media(value)}: ${BREAKPOINTS.l / 16}em)`,
  desktop: (value: BreakPointRange) =>
    `(${media(value)}: ${BREAKPOINTS.xl / 16}em)`,
  'desktop-xl': (value: BreakPointRange) =>
    `(${media(value)}: ${BREAKPOINTS.xxl / 16}em)`,
} as const;

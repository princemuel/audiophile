const BREAKPOINTS = {
  xs: 320,
  sm: 576,
  sx: 640,
  md: 720,
  l: 1040,
  xl: 1200,
  xxl: 1500,
  xxxl: 1800,
} as const;

interface BreakPointRange {
  value: 'min' | 'max';
}

const media = (value: BreakPointRange['value']) => {
  return value === 'min' ? 'min-width' : 'max-width';
};

export const devices = {
  /**
   * @param value min or max
   * @returns (min-width: 20em) or (max-width: 20em)
   */
  phone: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.xs / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 36em) or (max-width: 36em)
   */
  mobile: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.sm / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 40em) or (max-width: 40em)
   */
  smartphone: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.sx / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 45em) or (max-width: 45em)
   */
  tablet: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.md / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 65em) or (max-width: 65em)
   */
  ipad: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.l / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 75em) or (max-width: 75em)
   */
  desktop: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.xl / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 93.75em) or (max-width: 93.75em)
   */
  'desktop-xl': (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.xxl / 16}em)`,

  /**
   * @param value min or max
   * @returns (min-width: 112.5em) or (max-width: 112.5em)
   */
  flatscreen: (value: BreakPointRange['value']) =>
    `(${media(value)}: ${BREAKPOINTS.xxxl / 16}em)`,
} as const;

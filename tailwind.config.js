const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xl: '5.6rem',
      900: '4rem',
      800: '3.2rem',
      700: '2.8rem',
      600: '2.4rem',
      500: '1.8rem',
      400: '1.5rem',
      300: '1.4rem',
      200: '1.3rem',
      100: '1rem',
    },

    lineHeight: {
      100: '1.9rem',
      200: '2.4rem',
      300: '2.5rem',
      400: '3.3rem',
      500: '3.6rem',
      600: '3.8rem',
      700: '4.4rem',
      800: '5.8rem',
    },

    letterSpacing: {
      100: '1px',
      200: '1.15px',
      300: '1.3px',
      400: '1.5px',
      500: '1.7px',
      600: '2px',
      700: '1rem',
    },
    screens: {
      xs: '20em', // @media (min-width: 320px) { ... }
      s: '30em', // @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      borderRadius: {
        brand: '0.8rem',
        pill: '100vmax',
      },
      colors: {
        zinc: { 50: '#F1F1F1' },
        slate: { 300: '#CFCFCF' },
        neutral: { 950: '#101010' },
        brand: {
          300: '#FBAF85',
          500: '#D87D4A',
          800: '#CD2C2C',
        },
      },
      cursor: {
        pointer:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBnZRBaxNBGIYnu9uNSW1NlkgMVAl4Cyg5CAUPJlYFTyaX3CohePKUn5BcBA9CfkAvAf+B4sVLBC8eChv05ClKVaQIiUKjabOO77s7E8bUBpsXnrwzu9lvvvm+2bXFccWADRw1XlpWJpNZg+8ACV4kEomNVqtliSW0Am2mUik5HA5luVxmwEe5XC4pltBZ27a38/m8pHq9HoP54KI47ZbT6fQ52H1mRjE7jnFtK5vNrjJzhSuiui5cYA2Z3YN/HwwGYcBischgH8En8BLsKZ5w8VqtdiwoJ5bneeuO49zGeBdFD4OVSqVwu77vh1nS9VgF3SoUCq4ZiJObzAgcgK8sPtVsNqWWvka1221d011wgckI9cPJ5263K7k9NkDXbZH4Xzz3DRRVLcPDycmYBTe6KPV8kUR0Hm+AM0JFvA4+6DpRnU5nNq5UKn85A5jBUOdb8ITO7CrY4dZ0F+dX/5cbmd0Fq6zXb7CPI/F6NBq9bTQa4n/V7/dpI2QmZxfZWugKhm3eNLdI6S5q1/VkozB+BjZB3Dwe6+COZVlP4Ufs7CLV63UGeg8egksieiNmspPJZA6+DZ6DX/MZVqvVMDt1JA6w8GP4NV38ebnxePwy/IEK+FMVWHMIhmr8BnWuwj2hDqwzF+xwMpnsIeCr6XQ6DoJgIKIvhhuLxaZIjm/IEZgAH/ffwX+IqIknvvU8e+fBBlb38JALDxBwrLKTWGwf/gWMzcKfJP3pXjGuBcqlyjAwH/gDZjDKatJ5fJYAAAAASUVORK5CYII="), pointer;',
      },
      screens: {
        sx: '36em', // @media (min-width: 576px) { ... },
        sm: '40em', // @media (min-width: 640px) { ... }
        md: '48em', // @media (min-width: 768px) { ... }
        lg: '64em', // @media (min-width: 1024px) { ... }
        xl: '80em', // @media (min-width: 1280px) { ... }
        '2xl': '96em', // @media (min-width: 1536px) { ... }
        '3xl': '112.5em', // @media (min-width: 1800px) { ... }
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.full-w-bg': {
          boxShadow: '0 0 0 100vmax currentColor, 0 0 2rem currentColor',
          clipPath: 'inset(0 -100vmax)',
        },
        '.h-container': {
          '--max-width': '112rem',
          '--container-padding': '1.6rem',
          width: 'min(var(--max-width), 100% - (var(--container-padding) * 2))',
          marginInline: 'auto',
        },
        '.grid-auto': {
          '--min-column-size': '22rem',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(var(--min-column-size), 100%), 1fr))',
        },
      });
    }),
  ],
};

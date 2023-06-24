// import localFont from "next/font/local";

// export const FontSans = localFont({
//   src: "./inter.ttf",
//   variable: "--font-sans",
//   display: "swap",
// });

import { Manrope } from "next/font/google";

export const FontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// export const FontMono = Roboto_Mono({
//   subsets: ['latin'],
//   variable: '--font-mono',
//   display: 'swap',
// });

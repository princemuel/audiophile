"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      storageKey='adv-theme'
      defaultTheme='system'
      enableSystem={true}
      attribute='data-color'
      // disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
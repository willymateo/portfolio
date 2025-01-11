"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
);

export { Providers };

import type { Metadata } from "next";

import { ralewayVariable } from "@/shared/fonts";
import "./globals.css";

const metadata: Metadata = {
  description: "Willy Mateo's personal website",
  title: "Willy Mateo",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => (
  <html lang="en">
    <body className={ralewayVariable.className}>{children}</body>
  </html>
);

export default RootLayout;
export { metadata };

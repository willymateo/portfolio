import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import { ralewayVariable } from "@/shared/fonts";

import "../globals.css";

const metadata: Metadata = {
  description: "Willy Mateo's personal website",
  title: "Willy Mateo",
};

interface Props {
  params: { locale: string };
  children: React.ReactNode;
}

const RootLayout = async ({ children, params: { locale } }: Readonly<Props>) => {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={ralewayVariable.className}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };

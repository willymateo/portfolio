import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import { ralewayVariable } from "@/shared/fonts";

import "../globals.css";

const metadata: Metadata = {
  description: "Willy Mateo's personal website",
  title: "Willy Mateo",
};

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

const generateStaticParams = () => routing.locales.map(locale => ({ locale }));

const RootLayout = async ({ children, params }: Readonly<Props>) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

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
export { metadata, generateStaticParams };

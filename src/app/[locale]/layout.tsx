import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import { GenerateMetadataProps, RootLayoutProps } from "./types";
import { ralewayVariable } from "@/shared/fonts";

import "../globals.css";

const generateStaticParams = () => routing.locales.map(locale => ({ locale }));

const generateMetadata = async ({ params }: GenerateMetadataProps): Promise<Metadata> => {
  const { locale } = await params;

  const t = await getTranslations({
    namespace: "home.metadata",
    locale,
  });

  return {
    description: t("description"),
    title: t("title"),
  };
};

const RootLayout = async ({ children, params }: Readonly<RootLayoutProps>) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={ralewayVariable.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
export { generateStaticParams, generateMetadata };

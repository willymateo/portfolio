import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import { GenerateMetadataProps, LayoutProps } from "./types";
import { Background } from "./components/Background";
import { ralewayVariable } from "@/shared/fonts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Providers } from "./Providers";

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

const RootLayout = async ({ children, params }: Readonly<LayoutProps>) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={ralewayVariable.className}>
        <Providers>
          <main className="min-h-screen flex flex-col gap-20 bg-darkosPortfolio-gray dark:bg-darkosPortfolio-black">
            <Background />

            <Header />

            {children}

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
export { generateStaticParams, generateMetadata };

import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import { GenerateMetadataProps, LayoutProps } from "../types";

const generateStaticParams = () => routing.locales.map(locale => ({ locale }));

const generateMetadata = async ({ params }: GenerateMetadataProps): Promise<Metadata> => {
  const { locale } = await params;

  const t = await getTranslations({
    namespace: "projects.metadata",
    locale,
  });

  return {
    description: t("description"),
    title: t("title"),
  };
};

const ProjectsLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="flex flex-col items-strech justify-center gap-96 z-[1] pt-children-routes">
      {children}
    </div>
  );
};

export default ProjectsLayout;
export { generateStaticParams, generateMetadata };

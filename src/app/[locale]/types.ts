import { LanguageCode } from "@/i18n/types";

export type RootLayoutProps = {
  params: Promise<ParamsContent>;
  children: React.ReactNode;
};

export type GenerateMetadataProps = {
  params: Promise<ParamsContent>;
};

type ParamsContent = {
  locale: LanguageCode;
};
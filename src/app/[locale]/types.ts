import { ReactNode } from "react";

import { LanguageCode } from "@/i18n/types";

export type RootLayoutProps = {
  params: Promise<ParamsContent>;
  children: Readonly<ReactNode>;
};

export type GenerateMetadataProps = {
  params: Promise<ParamsContent>;
};

type ParamsContent = {
  locale: LanguageCode;
};

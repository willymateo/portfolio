import { ReactNode } from "react";

import { LanguageCode } from "@/i18n/types";

export type LayoutProps = {
  params: Promise<ParamsContent>;
  children: Readonly<ReactNode>;
};

export type GenerateMetadataProps = {
  params: Promise<ParamsContent>;
};

type ParamsContent = {
  locale: LanguageCode;
};

export type Route = {
  name: string;
  href: string;
  id: string;
};

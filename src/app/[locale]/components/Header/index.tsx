import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";

import { LanguageSwitcher } from "../../shared/LanguageSwitcher";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { SectionsSelector } from "./SectionsSelector";

const Header = () => {
  const messages = useMessages();

  return (
    <header className="z-[2] fixed top-0 px-body py-3 lg:py-5 w-full flex flex-col sm:flex-row items-center justify-between flex-wrap gap-5 bg-darkosPortfolio-gray/0.5 backdrop-blur-[3px] backdrop-saturate-[180%] border-b border-solid border-darkosPortfolio-gray-500/30">
      <SectionsSelector />

      <div className="flex flex-row items-center justify-end gap-5">
        <NextIntlClientProvider messages={messages.languageMenu as AbstractIntlMessages}>
          <LanguageSwitcher />

          <ThemeSwitcher />
        </NextIntlClientProvider>
      </div>
    </header>
  );
};

export { Header };

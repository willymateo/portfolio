import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";

import { LanguageSwitcher } from "../shared/LanguageSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

const Header = () => {
  const messages = useMessages();

  return (
    <header className="z-[2] fixed top-0 px-body w-full flex justify-end gap-5 bg-darkosPortfolio-gray/0.5 backdrop-blur-[3px] backdrop-saturate-[180%] border-b border-solid border-darkosPortfolio-gray-500/30 py-3 lg:py-5">
      <NextIntlClientProvider messages={messages.languageMenu as AbstractIntlMessages}>
        <LanguageSwitcher />

        <ThemeSwitcher />
      </NextIntlClientProvider>
    </header>
  );
};

export { Header };

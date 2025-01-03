import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";

import { LanguageMenu } from "./LanguageMenu";

const Header = () => {
  const messages = useMessages();

  return (
    <div className="flex z-[1] sticky top-0">
      <NextIntlClientProvider messages={messages.languageMenu as AbstractIntlMessages}>
        <LanguageMenu />
      </NextIntlClientProvider>
    </div>
  );
};

export { Header };

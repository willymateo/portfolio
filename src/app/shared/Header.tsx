import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";

import { LanguageMenu } from "./LanguageMenu";

const Header = () => {
  const messages = useMessages();

  return (
    <div className="z-[2] fixed top-0 w-full flex justify-end bg-[#eeeeee]/0.5 backdrop-blur-[3px] backdrop-saturate-[180%] border-b border-solid border-slate-200 py-3 lg:py-5 px-10 lg:px-24 2xl:px-40">
      <NextIntlClientProvider messages={messages.languageMenu as AbstractIntlMessages}>
        <LanguageMenu />
      </NextIntlClientProvider>
    </div>
  );
};

export { Header };

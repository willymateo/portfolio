import messages from "@/../messages/en.json";

type LanguageMenuType = typeof messages.languageMenu;

declare global {
  interface IntlMessages extends LanguageMenuType {
    additionalPropertyToAvoidError: string;
  }
}

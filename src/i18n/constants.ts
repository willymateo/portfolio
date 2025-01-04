import { Language, LanguageCode } from "./types";

const LANGUAGE_CODES: Record<string, LanguageCode> = {
  ENGLISH: "en",
  SPANISH: "es",
};

const LANGUAGES_DATA_BY_CODE: Record<string, Language> = {
  [LANGUAGE_CODES.ENGLISH]: {
    name: "English",
    code: LANGUAGE_CODES.ENGLISH,
  },
  [LANGUAGE_CODES.SPANISH]: {
    name: "Spanish",
    code: LANGUAGE_CODES.SPANISH,
  },
};

export { LANGUAGE_CODES, LANGUAGES_DATA_BY_CODE };

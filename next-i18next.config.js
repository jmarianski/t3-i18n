module.exports = {
  debug: false,
  saveMissing: true,
  saveMissingTo: "all",
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    localeDetection: true,
    fallbackLng: ["pl"],
  },
  react: { useSuspence: false },
  lookupCookie: "NEXT_LOCALE",
  backend: {
    loadPath: process.cwd() + "/public/locales/{{lng}}/{{ns}}.json",
    addPath: process.cwd() + "/public/locales/{{lng}}/{{ns}}.json",
  },
};

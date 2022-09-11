import i18n from "i18next";
import config from "./next-i18next.config.js";
import Backend from "i18next-fs-backend";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export default i18n;

export const i18nInitForTRpc = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  i18n.options = {
    ...i18n.options,
    ...config.i18n,
    fallbackLng: [config.i18n.defaultLocale],
    ns: ["common"],
    defaultNS: "common",
    backend: config.backend,
    lng: req?.cookies?.NEXT_LOCALE
      ? req?.cookies?.NEXT_LOCALE
      : config.i18n.defaultLocale,
  };
  await i18n.use(Backend).init();

  return i18n;
};

const t = i18n.t;

export { t };

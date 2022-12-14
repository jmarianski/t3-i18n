module.exports = {
  contextSeparator: "_",
  createOldCatalogs: true,
  defaultNamespace: "common",
  defaultValue: "",
  indentation: 2,
  keepRemoved: false,
  keySeparator: ".",
  lexers: {
    hbs: ["HandlebarsLexer"],
    handlebars: ["HandlebarsLexer"],

    htm: ["HTMLLexer"],
    html: ["HTMLLexer"],

    mjs: ["JavascriptLexer"],
    js: ["JsxLexer"],
    ts: ["JavascriptLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JavascriptLexer"],
  },
  lineEnding: "auto",
  locales: ["en", "pl"],
  namespaceSeparator: ":",
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  pluralSeparator: "_",
  input: "src/**/*.{js,jsx,ts,tsx}",
  sort: false,
  skipDefaultValues: false,
  useKeysAsDefaultValue: true,
  verbose: false,
  failOnWarnings: true,
  customValueTemplate: null,
};

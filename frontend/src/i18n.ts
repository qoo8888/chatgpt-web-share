import { createI18n, type I18n, type Locale } from "vue-i18n";
import { useStorage } from "@vueuse/core";
import EN from "./locales/en-US.json";
import ZH from "./locales/zh-CN.json";
import { WritableComputedRef } from "vue";

let i18n: I18n;

const init = () => {
  i18n = createI18n({
    legacy: false,
    locale: useStorage("language", "zh-CN").value,
    messages: {
      en: {
        ...EN
      },
      zh: {
        ...ZH
      },
    },
  });
};

const setLocale = (locale: Locale): void => {
    (i18n.global.locale as WritableComputedRef<string>).value = locale;
};

init();

export { i18n, setLocale };
import { createI18n } from "vue-i18n";
import jp from './lang/jp';
import zh from './lang/zh';
import en from "./lang/en";
import zhf from "./lang/zhf";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'jp', 
  messages: {
    jp,
    zh,
    en,
    zhf
  },
});

export default i18n;


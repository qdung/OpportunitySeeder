/**
 * @description load additional plugins to i18next for the multi language feature
 */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from './resources';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'vn',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import { NativeModules, Platform } from 'react-native';
import axios from 'axios';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: deviceLanguage,
    api_key: '9c8e34c8a854e5aed01144d9bc41211d',
  },
});

export default api;

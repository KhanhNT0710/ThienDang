import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'vi'], // Danh sách các ngôn ngữ được hỗ trợ
        fallbackLng: 'en', // Ngôn ngữ mặc định nếu không xác định được ngôn ngữ của người dùng
        detection: {
            order: ['cookie', 'localStorage', 'navigator'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Đường dẫn tới file JSON chứa các bản dịch
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "avgLoans": "Average Loans",
            "interestedRate": "Annual interest rate",
            "avgActiveLoans": "Average active loans"
        }
    },
    cs: {
        translation: {
            "avgLoans": "Průměrné půjčky",
            "interestedRate": "Roční úrok",
            "avgActiveLoans": "Průměr aktivních půjček"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "cs",
        fallbackLng: "cs",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

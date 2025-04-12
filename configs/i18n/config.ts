import i18n from "i18next";
import { initReactI18next } from "react-i18next"; //A special module that connects i18next with React, allowing translations to work in a React application.
import * as Localization from "expo-localization";//: A module from expo-localization that helps detect the user's device language.
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from '../locals/en/translations.json'
import translationDA from '../locals/da/translations.json'


//initializing the available translations
const resources = {
    "en-US": { translation: translationEn },
    en: { translation: translationEn },
    "da-DK": { translation: translationDA },
    da: { translation: translationDA },

};

const LANGUAGE_KEY = "@app_language";

const initI18n = async () => {
    try {
        // Try to get saved language preference from asyncStorage
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

        // Determine which language to use
        let selectedLanguage = savedLanguage;

        if (!selectedLanguage) {
            // If no saved language, use device locale or fallback
            const deviceLocales = Localization.getLocales(); //Retrieves the device's language settings
            const deviceLocale = deviceLocales[0]?.languageTag || "en-US"; //Extracts the primary language tag
            const languageCode = deviceLocale.split("-")[0]; //Extracts only the language code

            // try to find the device langauge in the lang list
            if (deviceLocale in resources) {
                selectedLanguage = deviceLocale;
            }

            // Then try language code match
            else if (languageCode in resources) {
                selectedLanguage = languageCode;
            } else {
                selectedLanguage = "en-US";
            }
        }

        // Initialize with the language found
        await i18n.use(initReactI18next).init({
            resources,
            lng: selectedLanguage,
            fallbackLng: {
                "en-*": ["en-US", "en"],
                "da-*": ["da-DK", "da", "en-US"],
                default: ["en-US"],
            },
            interpolation: {
                escapeValue: false,
            },
            react: {
                useSuspense: false,
            },
        });

        // Save the selected language
        if (!savedLanguage) {
            await AsyncStorage.setItem(LANGUAGE_KEY, selectedLanguage);
        }
    } catch (error) {
        console.error("Error initializing i18n:", error);

        // Initialize with defaults if there's an error
        await i18n.use(initReactI18next).init({
            resources,
            lng: "en-US",
            fallbackLng: "en-US",
            interpolation: {
                escapeValue: false,
            },
            react: {
                useSuspense: false,
            },
        });
    }
};

initI18n();

export default i18n;
import React, { createContext, useContext, useState } from 'react';
import { translations, Language } from '../i18n';

type TranslationObject = typeof translations.vi;

// Recursive type to support dot notation for nested translation keys
type DotNotationKeys<T, Prefix extends string = ""> =
    T extends object
        ? {
            [K in keyof T]: K extends string
                ? T[K] extends string
                    ? `${Prefix}${K}`
                    : DotNotationKeys<T[K], `${Prefix}${K}.`>
                : never;
        }[keyof T]
        : never;

type TranslationKey = DotNotationKeys<TranslationObject>;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'vi',
    setLang: () => {},
    t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('vi');

    const t = (key: TranslationKey): string => {
        const keys = key.split('.');
        let value: any = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        return typeof value === 'string' ? value : key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

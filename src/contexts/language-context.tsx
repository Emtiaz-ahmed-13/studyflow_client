'use client';

import { Language, translations } from '@/lib/translations';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
    t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('bn');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language | null;
        if (savedLanguage && (savedLanguage === 'bn' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
    };

    const toggleLanguage = () => {
        const newLang = language === 'bn' ? 'en' : 'bn';
        setLanguage(newLang);
    };

    const t = (path: string): string => {
        const keys = path.split('.');
        let result: unknown = translations[language];

        for (const key of keys) {
            if (result && typeof result === 'object' && key in result) {
                result = (result as Record<string, unknown>)[key];
            } else {
                console.warn(`Translation key not found: ${path} for language: ${language}`);
                return path;
            }
        }

        return typeof result === 'string' ? result : path;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

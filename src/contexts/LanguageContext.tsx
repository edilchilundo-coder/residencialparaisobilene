"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Função simples de tradução baseada em chaves
  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const translations = {
  pt: {
    nav: {
      home: "HOME",
      apartments: "ACOMODAÇÕES",
      gallery: "GALERIA",
      blog: "BLOG",
      contacts: "CONTACTOS",
      about: "SOBRE NÓS",
      book: "RESERVAR"
    },
    hero: {
      title: "Residencial Paraíso Bilene",
      subtitle: "O seu refúgio de luxo a apenas 2 minutos da lagoa."
    },
    search: {
      checkin: "Check-in",
      checkout: "Check-out",
      type: "Acomodação",
      placeholder: "Escolha o tipo",
      button: "Verificar",
      t1: "Casa T1",
      t2: "Casa T2",
      room: "Quarto Suite",
      error_dates: "Por favor, selecione as datas."
    },
    home: {
      accommodations: "Nossas Acomodações",
      features: {
        design: "Design Moderno",
        designDesc: "Espaços decorados com elegância e equipados para o seu conforto total.",
        kitchen: "Cozinha Completa",
        kitchenDesc: "Liberdade total para preparar as suas refeições com equipamentos de qualidade.",
        leisure: "Lazer & Piscina",
        leisureDesc: "Desfrute da nossa piscina e áreas de convívio exclusivas para hóspedes.",
        restaurant: "Restaurante",
        restaurantDesc: "Saboreie o melhor da gastronomia local com pratos frescos e autênticos."
      },
      testimonials: "O que dizem os nossos hóspedes",
      blog: "Experiências Memoráveis",
      blogDesc: "Descubra o que o Bilene tem de melhor para oferecer."
    }
  },
  en: {
    nav: {
      home: "HOME",
      apartments: "ACCOMMODATIONS",
      gallery: "GALLERY",
      blog: "BLOG",
      contacts: "CONTACTS",
      about: "ABOUT US",
      book: "BOOK NOW"
    },
    hero: {
      title: "Paraíso Bilene Residence",
      subtitle: "Your luxury retreat just 2 minutes from the lagoon."
    },
    search: {
      checkin: "Check-in",
      checkout: "Check-out",
      type: "Accommodation",
      placeholder: "Choose type",
      button: "Check",
      t1: "T1 House",
      t2: "T2 House",
      room: "Suite Room",
      error_dates: "Please select the dates."
    },
    home: {
      accommodations: "Our Accommodations",
      features: {
        design: "Modern Design",
        designDesc: "Elegantly decorated spaces equipped for your total comfort.",
        kitchen: "Full Kitchen",
        kitchenDesc: "Total freedom to prepare your meals with quality equipment.",
        leisure: "Leisure & Pool",
        leisureDesc: "Enjoy our pool and exclusive guest lounge areas.",
        restaurant: "Restaurant",
        restaurantDesc: "Savor the best of local cuisine with fresh and authentic dishes."
      },
      testimonials: "What our guests say",
      blog: "Memorable Experiences",
      blogDesc: "Discover the best that Bilene has to offer."
    }
  }
};
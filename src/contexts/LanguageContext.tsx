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
      restaurant: "RESTAURANTE",
      leisure: "LAZER",
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
    },
    restaurant: {
      title: "Restaurante Paraíso",
      subtitle: "Sabores autênticos com vista para a piscina",
      ambience: "Um Ambiente Único",
      description: "O nosso restaurante oferece uma experiência gastronómica que combina a tradição moçambicana com toques contemporâneos. Localizado estrategicamente junto à piscina, é o local ideal para refeições relaxadas.",
      specialties: "As Nossas Especialidades",
      menu: {
        seafood: "Frutos do Mar",
        seafoodDesc: "Camarões, lulas e peixe fresco capturado diariamente na nossa costa.",
        traditional: "Pratos Tradicionais",
        traditionalDesc: "A famosa matapa e arroz de coco preparados com receitas ancestrais.",
        drinks: "Cocktails & Vinhos",
        drinksDesc: "Uma seleção premium para acompanhar os seus momentos de lazer."
      }
    }
  },
  en: {
    nav: {
      home: "HOME",
      apartments: "ACCOMMODATIONS",
      restaurant: "RESTAURANT",
      leisure: "LEISURE",
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
    },
    restaurant: {
      title: "Paraíso Restaurant",
      subtitle: "Authentic flavors with a pool view",
      ambience: "A Unique Atmosphere",
      description: "Our restaurant offers a gastronomic experience that combines Mozambican tradition with contemporary touches. Strategically located by the pool, it's the ideal spot for relaxed meals.",
      specialties: "Our Specialties",
      menu: {
        seafood: "Seafood",
        seafoodDesc: "Shrimp, squid, and fresh fish caught daily on our coast.",
        traditional: "Traditional Dishes",
        traditionalDesc: "The famous matapa and coconut rice prepared with ancestral recipes.",
        drinks: "Cocktails & Wines",
        drinksDesc: "A premium selection to accompany your leisure moments."
      }
    }
  }
};
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
      restaurant: "RESTAURANTE",
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
      title: "Gastronomia & Sabor",
      subtitle: "Uma experiência culinária autêntica no coração do Bilene",
      description: "O nosso restaurante oferece uma fusão perfeita entre a cozinha tradicional moçambicana e pratos internacionais, sempre com os ingredientes mais frescos da nossa costa.",
      specialties: "Nossas Especialidades",
      ambience: "O Ambiente",
      ambienceDesc: "Um espaço sofisticado e acolhedor, ideal para jantares românticos ou momentos em família.",
      menu: {
        seafood: "Mariscos Frescos",
        seafoodDesc: "Camarão, lagosta e peixe do dia capturados localmente.",
        traditional: "Pratos Tradicionais",
        traditionalDesc: "A famosa Matapa e o Arroz de Coco que definem a nossa terra.",
        drinks: "Cocktails & Vinhos",
        drinksDesc: "Uma seleção premium para acompanhar a sua refeição."
      }
    }
  },
  en: {
    nav: {
      home: "HOME",
      apartments: "ACCOMMODATIONS",
      restaurant: "RESTAURANT",
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
      title: "Gastronomy & Flavor",
      subtitle: "An authentic culinary experience in the heart of Bilene",
      description: "Our restaurant offers a perfect fusion between traditional Mozambican cuisine and international dishes, always with the freshest ingredients from our coast.",
      specialties: "Our Specialties",
      ambience: "The Ambience",
      ambienceDesc: "A sophisticated and welcoming space, ideal for romantic dinners or family moments.",
      menu: {
        seafood: "Fresh Seafood",
        seafoodDesc: "Shrimp, lobster and fish of the day caught locally.",
        traditional: "Traditional Dishes",
        traditionalDesc: "The famous Matapa and Coconut Rice that define our land.",
        drinks: "Cocktails & Wines",
        drinksDesc: "A premium selection to accompany your meal."
      }
    }
  }
};
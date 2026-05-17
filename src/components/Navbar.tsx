"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.apartments'), path: "/acomodacoes" },
    { label: t('nav.restaurant'), path: "/restaurante" },
    { label: t('nav.gallery'), path: "/galeria" },
    { label: t('nav.blog'), path: "/blog" },
    { label: t('nav.contacts'), path: "/contactos" },
    { label: t('nav.about'), path: "/sobre-nos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center h-full py-2">
          <img src={logo} alt="Residencial Paraíso Bilene" className="h-full w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold tracking-widest transition-colors ${
                location.pathname === link.path
                  ? "text-amber border-b-2 border-amber pb-1"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-r border-primary-foreground/20 pr-6">
            <Globe size={14} className="text-amber" />
            <button 
              onClick={() => setLanguage('pt')}
              className={`text-[10px] font-bold ${language === 'pt' ? 'text-amber' : 'text-primary-foreground/50'}`}
            >
              PT
            </button>
            <span className="text-primary-foreground/20">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold ${language === 'en' ? 'text-amber' : 'text-primary-foreground/50'}`}
            >
              EN
            </button>
          </div>

          <a
            href="https://wa.me/258877302100"
            className="bg-amber text-accent-foreground px-6 py-2 text-[10px] font-bold tracking-widest hover:bg-amber-dark transition-colors rounded-sm"
          >
            {t('nav.book')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold tracking-widest py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-amber"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 py-2 border-t border-primary-foreground/10 mt-2">
              <button 
                onClick={() => { setLanguage('pt'); setIsOpen(false); }}
                className={`text-xs font-bold ${language === 'pt' ? 'text-amber' : 'text-primary-foreground/50'}`}
              >
                PORTUGUÊS
              </button>
              <button 
                onClick={() => { setLanguage('en'); setIsOpen(false); }}
                className={`text-xs font-bold ${language === 'en' ? 'text-amber' : 'text-primary-foreground/50'}`}
              >
                ENGLISH
              </button>
            </div>

            <a
              href="https://wa.me/258877302100"
              className="bg-amber text-accent-foreground px-6 py-3 text-xs font-bold tracking-widest text-center hover:bg-amber-dark transition-colors mt-2"
            >
              {t('nav.book')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
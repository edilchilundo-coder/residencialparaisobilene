"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Utensils, Clock, MapPin, Star, Coffee, Wine, Pizza, Camera } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import restauranteNovo from "@/assets/restaurante-novo.png";

const Restaurante = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHeader 
        title={t('restaurant.title')} 
        subtitle={t('restaurant.subtitle')} 
      />

      {/* Introdução & Ambiente */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-amber mb-4">
                <Star size={18} className="fill-amber" />
                <span className="text-xs font-bold uppercase tracking-widest font-body">Experiência Gourmet</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t('restaurant.ambience')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                {t('restaurant.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Horário</h4>
                    <p className="text-xs text-muted-foreground font-body">Pequeno-almoço: 07h - 10h<br />Almoço e Jantar: 12h - 22h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Localização</h4>
                    <p className="text-xs text-muted-foreground font-body">Piso Térreo, junto à piscina principal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-video group">
                <img 
                  src={restauranteNovo} 
                  alt="Novo Espaço do Restaurante" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Camera size={12} /> Nosso Novo Espaço
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">{t('restaurant.specialties')}</h3>
          <div className="w-12 h-1 bg-amber mx-auto" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Utensils, 
                title: t('restaurant.menu.seafood'), 
                desc: t('restaurant.menu.seafoodDesc'),
                img: gastronomiaImg
              },
              { 
                icon: Pizza, 
                title: t('restaurant.menu.traditional'), 
                desc: t('restaurant.menu.traditionalDesc'),
                img: restauranteNovo
              },
              { 
                icon: Wine, 
                title: t('restaurant.menu.drinks'), 
                desc: t('restaurant.menu.drinksDesc'),
                img: restauranteNovo
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border overflow-hidden group hover:border-amber transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-foreground mb-3 uppercase tracking-widest text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-6">
            Deseja reservar uma mesa?
          </h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-body">
            Garanta o seu lugar para uma noite inesquecível com a melhor vista do Bilene.
          </p>
          <a
            href="https://wa.me/258877302100"
            className="inline-block bg-amber text-accent-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-dark transition font-body rounded-full shadow-lg"
          >
            Reservar Mesa via WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurante;
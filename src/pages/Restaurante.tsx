"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Utensils, Clock, MapPin, Star, Wine, Pizza } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const barImg = "dyad-media://media/residencialparaisobilene/.dyad/media/86666666666666666666666666666669.png";

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
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-video">
                <img 
                  src={barImg} 
                  alt="Bar da Residencial" 
                  className="w-full h-full object-cover"
                />
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
                desc: t('restaurant.menu.seafoodDesc') 
              },
              { 
                icon: Pizza, 
                title: t('restaurant.menu.traditional'), 
                desc: t('restaurant.menu.traditionalDesc') 
              },
              { 
                icon: Wine, 
                title: t('restaurant.menu.drinks'), 
                desc: t('restaurant.menu.drinksDesc') 
              },
            ].map((item, i) => (
              <div key={i} className="bg-card p-10 border border-border text-center group hover:border-amber transition-all duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-foreground mb-4 uppercase tracking-widest text-sm">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurante;
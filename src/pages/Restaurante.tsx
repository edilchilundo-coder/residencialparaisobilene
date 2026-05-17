"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ChefHat, Utensils, Wine, Clock, Star, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Usando as novas imagens fornecidas
import restauranteImg from "@/assets/Restaurante.png";
import restaurante1 from "@/assets/restaurante I.png";
import restaurante2 from "@/assets/RESTAURANTE II.jpg";

const Restaurante = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHeader title={t('restaurant.title')} subtitle={t('restaurant.subtitle')} />

      {/* Introdução & Imagem Principal */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6 text-amber">
                <ChefHat size={24} />
                <span className="text-xs font-bold uppercase tracking-widest font-body">Culinária de Excelência</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t('restaurant.ambience')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                {t('restaurant.description')}
              </p>
              <div className="space-y-4 mb-10">
                {[
                  t('restaurant.menu.seafood'),
                  t('restaurant.menu.traditional'),
                  t('restaurant.menu.drinks'),
                  "Ingredientes Locais e Frescos"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber" size={20} />
                    <span className="font-bold text-sm uppercase tracking-wider font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 p-6 bg-secondary border border-border rounded-sm">
                <Clock className="text-amber" size={24} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">Horário de Funcionamento</h4>
                  <p className="text-xs text-muted-foreground font-body">Pequeno-almoço: 07:30 - 10:30</p>
                  <p className="text-xs text-muted-foreground font-body">Almoço e Jantar: 12:00 - 22:00</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <img src={restauranteImg} alt="Restaurante Interior" className="w-full h-auto object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 z-0 hidden sm:block">
                <img src={restaurante1} alt="Restaurante Detalhe" className="rounded-sm shadow-xl border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques do Menu */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('restaurant.specialties')}</h2>
            <div className="w-12 h-1 bg-amber mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { 
                icon: Utensils, 
                title: t('restaurant.menu.seafood'), 
                desc: t('restaurant.menu.seafoodDesc'),
                img: restaurante2 
              },
              { 
                icon: Star, 
                title: t('restaurant.menu.traditional'), 
                desc: t('restaurant.menu.traditionalDesc'),
                img: restaurante1 
              },
              { 
                icon: Wine, 
                title: t('restaurant.menu.drinks'), 
                desc: t('restaurant.menu.drinksDesc'),
                img: restauranteImg 
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 p-8 border border-white/10 hover:border-amber transition-colors text-center">
                <div className="w-16 h-16 bg-amber rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-accent-foreground" size={28} />
                </div>
                <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria do Restaurante */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-sm overflow-hidden shadow-lg h-[400px]">
              <img src={restaurante2} alt="Ambiente Restaurante" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">{t('restaurant.ambience')}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                {t('restaurant.ambienceDesc')}
              </p>
              <a 
                href="https://wa.me/258877302100" 
                className="inline-block bg-amber text-accent-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-dark transition font-body text-center sm:w-fit"
              >
                Reservar Mesa
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurante;
"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Utensils, Clock, MapPin, Star, Wine, Pizza } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import restauranteNovo from "@/assets/restaurante-novo.png";
import restaurante1 from "@/assets/restaurante-1.png";
import restaurante2 from "@/assets/restaurante-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Restaurante = () => {
  const { t } = useLanguage();
  const restaurantImages = [restauranteNovo, restaurante1, restaurante2];

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
            <div className="lg:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl group">
                <CarouselContent>
                  {restaurantImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden aspect-video">
                        <img 
                          src={src} 
                          alt={`Restaurante - Foto ${index + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Carousel>
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
            className="inline-block bg-amber text-accent-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-dark transition font-body"
          >
            Reservar Mesa
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurante;
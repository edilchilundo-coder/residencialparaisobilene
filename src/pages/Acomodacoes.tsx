"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import {
  Snowflake,
  Wifi,
  Tv,
  BedDouble,
  Users,
  UtensilsCrossed,
  ShowerHead,
  Waves,
  Shield,
  Car,
  ConciergeBell
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sala from "@/assets/sala.jpg";
import salaAmpla from "@/assets/sala-ampla.jpg";
import cozinha2 from "@/assets/cozinha-2.jpg";
import fachada from "@/assets/fachada.png";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";
import camaKing from "@/assets/cama-king.jpg";
import cama1 from "@/assets/cama-1.jpg";
import camaSolteiro from "@/assets/cama-solteiro.jpg";
import cadeira from "@/assets/cadeira.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const t1Images = [camaKing, sala, cozinha2, fachada];
const t2Images = [quartoT2, salaAmpla, camaSolteiro, fachada];
const quartoImages = [quartoT1, cadeira, cama1];

const Acomodacoes = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHeader title={t('nav.apartments')} subtitle={t('accommodations.subtitle')} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Casa T1 */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-32 max-w-6xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl group">
                <CarouselContent>
                  {t1Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden aspect-[4/3]">
                        <img
                          src={src}
                          alt={`Casa T1 - Foto ${index + 1}`}
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
            <div className="lg:w-1/2">
              <div className="inline-block bg-amber text-accent-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
                {t('accommodations.t1.tag')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{t('accommodations.t1.title')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                {t('accommodations.t1.desc')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Snowflake, text: t('accommodations.t1.features.ac') },
                  { icon: Wifi, text: t('accommodations.t1.features.wifi') },
                  { icon: Tv, text: t('accommodations.t1.features.tv') },
                  { icon: BedDouble, text: t('accommodations.t1.features.bed') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                {t('accommodations.t1.button')}
              </a>
            </div>
          </div>

          {/* Casa T2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-32 max-w-6xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl group">
                <CarouselContent>
                  {t2Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden aspect-[4/3]">
                        <img
                          src={src}
                          alt={`Casa T2 - Foto ${index + 1}`}
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
            <div className="lg:w-1/2">
              <div className="inline-block bg-amber text-accent-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
                {t('accommodations.t2.tag')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{t('accommodations.t2.title')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                {t('accommodations.t2.desc')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Users, text: t('accommodations.t2.features.capacity') },
                  { icon: UtensilsCrossed, text: t('accommodations.t2.features.kitchen') },
                  { icon: BedDouble, text: t('accommodations.t2.features.bed') },
                  { icon: ShowerHead, text: t('accommodations.t2.features.bath') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                {t('accommodations.t2.button')}
              </a>
            </div>
          </div>

          {/* Quarto */}
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl group">
                <CarouselContent>
                  {quartoImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden aspect-[4/3]">
                        <img
                          src={src}
                          alt={`Quarto - Foto ${index + 1}`}
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
            <div className="lg:w-1/2">
              <div className="inline-block bg-amber text-accent-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
                {t('accommodations.suite.tag')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{t('accommodations.suite.title')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                {t('accommodations.suite.desc')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Snowflake, text: t('accommodations.suite.features.ac') },
                  { icon: Wifi, text: t('accommodations.suite.features.wifi') },
                  { icon: BedDouble, text: t('accommodations.suite.features.bed') },
                  { icon: ShowerHead, text: t('accommodations.suite.features.bath') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                {t('accommodations.suite.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-16">{t('accommodations.services.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { icon: Waves, title: t('accommodations.services.pool'), desc: t('accommodations.services.poolDesc') },
              { icon: Shield, title: t('accommodations.services.security'), desc: t('accommodations.services.securityDesc') },
              { icon: Car, title: t('accommodations.services.parking'), desc: t('accommodations.services.parkingDesc') },
              { icon: ConciergeBell, title: t('accommodations.services.hospitality'), desc: t('accommodations.services.hospitalityDesc') },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber transition-colors duration-500">
                  <item.icon className="text-amber group-hover:text-white transition-colors" size={32} />
                </div>
                <h5 className="font-bold mb-3 font-body uppercase tracking-widest text-sm">{item.title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed font-body max-w-[200px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Acomodacoes;
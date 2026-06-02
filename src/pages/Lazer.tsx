"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Sun, Moon, Wind, Coffee, Users, Sparkles, Waves, Trophy, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lazer1 from "@/assets/lazer-1.jpg";
import lazer2 from "@/assets/lazer-2.jpg";
import lazer3 from "@/assets/lazer-3.jpg";
import bar from "@/assets/bar.png";
import disco from "@/assets/disco.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Lazer = () => {
  const { t } = useLanguage();
  const lazerImages = [lazer1, lazer2, lazer3, bar, disco];

  return (
    <Layout>
      <PageHeader 
        title="Lazer & Bem-Estar" 
        subtitle="Espaços desenhados para o seu relaxamento total" 
      />

      {/* Galeria de Lazer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-amber mb-4">
                <Sparkles size={18} />
                <span className="text-xs font-bold uppercase tracking-widest font-body">Experiências Únicas</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Diversão & Relaxamento</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                Desde o nosso bar exclusivo até à área de discoteca para eventos especiais, oferecemos uma variedade de espaços para tornar a sua estadia inesquecível.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber">
                    <Music size={20} />
                  </div>
                  <span className="text-sm font-bold font-body">Eventos & Música</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber">
                    <Coffee size={20} />
                  </div>
                  <span className="text-sm font-bold font-body">Bar & Lounge</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl group">
                <CarouselContent>
                  {lazerImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden aspect-[4/3]">
                        <img 
                          src={src} 
                          alt={`Lazer - Foto ${index + 1}`} 
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

      {/* CTA Final */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-6">
            O seu momento de paz espera por si
          </h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-body">
            Na Residencial Paraíso Bilene, o lazer é levado a sério. Venha descobrir os nossos recantos favoritos.
          </p>
          <a
            href="https://wa.me/258877302100"
            className="inline-block bg-amber text-accent-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-dark transition font-body rounded-full shadow-lg"
          >
            Reservar Estadia
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Lazer;
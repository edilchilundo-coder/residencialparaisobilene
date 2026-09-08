"use client";

import { useState, useEffect } from "react";
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
  type CarouselApi
} from "@/components/ui/carousel";
import t1Principal from "@/assets/t1-principal.jpg";
import t1 from "@/assets/t1.jpg";
import wcT1 from "@/assets/wc-t1.jpg";
import varanda from "@/assets/varanda.png";
import rpb47 from "@/assets/rpb-47.png";
import quartoCasal from "@/assets/quarto-casal.jpg";
import salaNova from "@/assets/sala-nova.jpg";
import openSpace from "@/assets/open-space.jpg";
import camaKing from "@/assets/cama-king.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const t1Images = [t1Principal, t1, wcT1];
const t2Images = [varanda, rpb47, quartoCasal, salaNova, openSpace];
const quartoImages = [camaKing];

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider = ({ images, title }: ImageSliderProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(images.length);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full rounded-sm overflow-hidden shadow-2xl bg-neutral-900/10">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          skipSnaps: false,
          duration: 22,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={src}
                  alt={`${title} - Foto ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover select-none pointer-events-none transform-gpu transition-opacity duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber text-white border-0 h-10 w-10 opacity-90 hover:opacity-100 transition-all backdrop-blur-sm shadow-lg z-10" />
            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber text-white border-0 h-10 w-10 opacity-90 hover:opacity-100 transition-all backdrop-blur-sm shadow-lg z-10" />

            {/* Contador numérico */}
            <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm pointer-events-none z-10 font-body">
              {current + 1} / {count}
            </div>

            {/* Indicadores / Dots interativos */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-1.5 z-10">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para a foto ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-amber shadow-md"
                      : "w-2 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
};

const Acomodacoes = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHeader title={t('nav.apartments')} subtitle="Conforto absoluto a 2 minutos da praia" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Casa T1 */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-32 max-w-6xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <ImageSlider images={t1Images} title="Casa T1" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-amber text-accent-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
                Ideal para Casais
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Casa T1</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                Um refúgio moderno e acolhedor com um quarto privativo. Este espaço foi desenhado para oferecer privacidade e conforto, com acabamentos de qualidade e uma atmosfera relaxante.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Snowflake, text: "Ar Condicionado" },
                  { icon: Wifi, text: "Wi-Fi Grátis" },
                  { icon: Tv, text: "Smart TV" },
                  { icon: BedDouble, text: "1 Quarto" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                Reservar Casa T1
              </a>
            </div>
          </div>

          {/* Casa T2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-32 max-w-6xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <ImageSlider images={t2Images} title="Casa T2" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-amber text-accent-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
                Perfeito para Famílias
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Casa T2</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                Espaço e conveniência para o seu grupo com dois quartos amplos. Com uma sala de estar generosa e cozinha equipada, é a escolha ideal para quem não abdica de estar em família.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Users, text: "Até 4 Adultos" },
                  { icon: UtensilsCrossed, text: "Cozinha Completa" },
                  { icon: BedDouble, text: "2 Quartos" },
                  { icon: ShowerHead, text: "Casa de Banho" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                Reservar Casa T2
              </a>
            </div>
          </div>

          {/* Quarto */}
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <ImageSlider images={quartoImages} title="Quarto Suite" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-amber text-accent-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
                Económico & Confortável
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Quarto Suite</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                A opção perfeita para estadias curtas ou viajantes individuais. Um quarto suite moderno com todo o conforto essencial para uma noite tranquila no Bilene.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Snowflake, text: "Ar Condicionado" },
                  { icon: Wifi, text: "Wi-Fi Grátis" },
                  { icon: BedDouble, text: "Cama de Casal" },
                  { icon: ShowerHead, text: "WC Privativo" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                Reservar Quarto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-16">Serviços Incluídos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { icon: Waves, title: "Piscina Comum", desc: "Área de lazer exclusiva para relaxar após a praia." },
              { icon: Shield, title: "Segurança 24h", desc: "Tranquilidade garantida com vigilância permanente." },
              { icon: Car, title: "Estacionamento", desc: "Lugar reservado e seguro dentro da propriedade." },
              { icon: ConciergeBell, title: "Hospitalidade", desc: "Equipa dedicada para uma estadia inesquecível." },
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
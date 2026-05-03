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
  DoorOpen,
  ShowerHead,
  Waves,
  Shield,
  Car,
  ConciergeBell,
  Heart
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
import cozinha from "@/assets/cozinha.jpg";
import piscina from "@/assets/piscina.jpg";
import fachada from "@/assets/fachada.png";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";
import bilenePraia from "@/assets/bilene-praia.jpg";

const t1Images = [quartoT1, sala, cozinha, fachada];
const t2Images = [quartoT2, salaAmpla, piscina, fachada];
const quartoImages = [quartoT1, bilenePraia, piscina];

const Apartamentos = () => {
  return (
    <Layout>
      <PageHeader title="Nossas Acomodações" subtitle="Conforto absoluto a 2 minutos da praia" />

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
              <div className="inline-block bg-red-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
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
                    <item.icon size={18} className="text-red-600" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-[#C82820] hover:bg-[#A0201A] text-white px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                Reservar Casa T1
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
              <div className="inline-block bg-red-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
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
                    <item.icon size={18} className="text-red-600" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-[#C82820] hover:bg-[#A0201A] text-white px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
                Reservar Casa T2
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
              <div className="inline-block bg-red-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 font-body">
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
                    <item.icon size={18} className="text-red-600" />
                    <span className="text-sm font-medium font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-[#C82820] hover:bg-[#A0201A] text-white px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg">
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
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-500">
                  <item.icon className="text-red-600 group-hover:text-white transition-colors" size={32} />
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

export default Apartamentos;
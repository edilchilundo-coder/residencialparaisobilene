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

const t1Images = [
  quartoT1,
  sala,
  cozinha,
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", // Casa de banho luxo
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop", // Detalhe decoração
];

const t2Images = [
  quartoT2,
  salaAmpla,
  piscina,
  fachada,
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop", // Sala jantar ampla
];

const Apartamentos = () => {
  return (
    <Layout>
      <PageHeader title="Nossas Acomodações" subtitle="Conforto absoluto a 2 minutos da praia" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* T1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
            <div className="md:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl">
                <CarouselContent>
                  {t1Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden">
                        <img
                          src={src}
                          alt={`Apartamento T1 - Foto ${index + 1}`}
                          className="w-full h-[300px] sm:h-[450px] object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Apartamento T1</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                Concebido para casais que procuram um refúgio romântico e moderno. Este espaço combina funcionalidade com um design minimalista, garantindo que a sua única preocupação seja relaxar.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
                <div className="flex items-center gap-3"><Snowflake size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Ar Condicionado</span></div>
                <div className="flex items-center gap-3"><Wifi size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Wi-Fi Grátis</span></div>
                <div className="flex items-center gap-3"><Tv size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Smart TV</span></div>
                <div className="flex items-center gap-3"><BedDouble size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Cama King Size</span></div>
              </div>
              <div className="bg-secondary p-6 border-l-4 border-amber mb-8">
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-body">Preço Normal: 8.500 MT</p>
                <p className="text-3xl font-bold text-foreground">6.500 MT <span className="text-sm font-normal text-muted-foreground font-body">/ noite</span></p>
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-primary hover:bg-amber text-primary-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body">
                Reservar T1
              </a>
            </div>
          </div>

          {/* T2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2 w-full">
              <Carousel className="w-full shadow-2xl">
                <CarouselContent>
                  {t2Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden">
                        <img
                          src={src}
                          alt={`Apartamento T2 - Foto ${index + 1}`}
                          className="w-full h-[300px] sm:h-[450px] object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Apartamento T2</h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                A solução ideal para famílias ou grupos de amigos. Com dois quartos espaçosos e uma sala de estar ampla, oferece toda a privacidade e conveniência de uma casa de luxo na praia.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
                <div className="flex items-center gap-3"><Users size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Capacidade: 4-5 pessoas</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Cozinha Completa</span></div>
                <div className="flex items-center gap-3"><DoorOpen size={18} className="text-amber" /> <span className="text-sm font-medium font-body">Varanda Privada</span></div>
                <div className="flex items-center gap-3"><ShowerHead size={18} className="text-amber" /> <span className="text-sm font-medium font-body">2 Casas de Banho</span></div>
              </div>
              <div className="bg-secondary p-6 border-l-4 border-amber mb-8">
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-body">Preço Sob Consulta</p>
                <p className="text-3xl font-bold text-foreground">Sob Consulta</p>
              </div>
              <a href="https://wa.me/258877302100" className="inline-block bg-primary hover:bg-amber text-primary-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body">
                Reservar T2
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">O que todos os apartamentos incluem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Waves, title: "Piscina Comum", desc: "Área de lazer exclusiva para hóspedes relaxarem após a praia." },
              { icon: Shield, title: "Segurança 24h", desc: "Tranquilidade garantida com vigilância permanente no recinto." },
              { icon: Car, title: "Estacionamento", desc: "Lugar reservado e seguro para o seu veículo dentro da propriedade." },
              { icon: ConciergeBell, title: "Hospitalidade", desc: "Uma equipa dedicada para tornar a sua estadia inesquecível." },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-primary-foreground/10">
                <item.icon className="mx-auto text-amber mb-4" size={40} />
                <h5 className="font-bold mb-2 font-body">{item.title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apartamentos;
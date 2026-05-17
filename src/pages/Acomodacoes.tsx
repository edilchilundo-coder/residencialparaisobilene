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
  ConciergeBell,
  CheckCircle2
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

// Imagens profissionais
const fachadaImg = "dyad-media://media/residencialparaisobilene/.dyad/media/86666666666666666666666666666666.png";
const patioDia = "dyad-media://media/residencialparaisobilene/.dyad/media/7748c3233fe0711b64e160b022001984.JPG";
const piscinaNoite = "dyad-media://media/residencialparaisobilene/.dyad/media/46bbd0275b1cc969c64deb4a1ef38a0a.jpg";

const Acomodacoes = () => {
  const { t } = useLanguage();

  const accommodations = [
    {
      id: "t1",
      title: "Casa T1 - Suite Master",
      subtitle: "Privacidade e Conforto para Casais",
      description: "A nossa Casa T1 é o refúgio perfeito para quem procura uma estadia romântica ou uma viagem de negócios tranquila. Com um design contemporâneo, oferece uma suite ampla, sala de estar acolhedora e uma cozinha totalmente equipada para sua total independência.",
      images: [fachadaImg, patioDia, piscinaNoite],
      features: ["Ar Condicionado", "Wi-Fi de Alta Velocidade", "Smart TV 43\"", "Cozinha Equipada", "Cama King Size"],
      capacity: "2 Adultos",
      size: "45m²"
    },
    {
      id: "t2",
      title: "Casa T2 - Family Residence",
      subtitle: "Espaço Generoso para Toda a Família",
      description: "Ideal para famílias ou grupos de amigos, a Casa T2 oferece dois quartos espaçosos e uma área social integrada. Desfrute de momentos memoráveis na sala de estar ou prepare refeições em família na cozinha moderna. Conforto que faz você se sentir em casa.",
      images: [piscinaNoite, fachadaImg, patioDia],
      features: ["2 Quartos Privativos", "Ar Condicionado em todos os cómodos", "Cozinha Completa", "Área de Jantar", "Varanda Privativa"],
      capacity: "Até 5 Pessoas",
      size: "75m²"
    },
    {
      id: "suite",
      title: "Quarto Suite Premium",
      subtitle: "Elegância e Praticidade",
      description: "Para estadias mais curtas ou viajantes que priorizam a praticidade sem abrir mão do luxo. O nosso Quarto Suite oferece um ambiente climatizado, cama de alta qualidade e casa de banho privativa com acabamentos premium.",
      images: [patioDia, piscinaNoite, fachadaImg],
      features: ["Cama de Casal Premium", "Ar Condicionado", "Frigobar", "Secretária de Trabalho", "WC Privativo"],
      capacity: "2 Adultos",
      size: "25m²"
    }
  ];

  return (
    <Layout>
      <PageHeader title={t('nav.apartments')} subtitle="Onde o luxo encontra a tranquilidade do Bilene" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {accommodations.map((room, index) => (
            <div key={room.id} className={`flex flex-col lg:flex-row gap-16 items-center mb-32 max-w-6xl mx-auto ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <Carousel className="w-full shadow-2xl group rounded-sm overflow-hidden">
                  <CarouselContent>
                    {room.images.map((src, i) => (
                      <CarouselItem key={i}>
                        <div className="aspect-[4/3]">
                          <img
                            src={src}
                            alt={`${room.title} - Foto ${i + 1}`}
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
                  {room.subtitle}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{room.title}</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-amber shrink-0" />
                      <span className="text-sm font-medium font-body text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-8 mb-10 py-6 border-y border-border">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Capacidade</span>
                    <span className="text-sm font-bold flex items-center gap-2"><Users size={16} className="text-amber" /> {room.capacity}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Área Total</span>
                    <span className="text-sm font-bold flex items-center gap-2"><BedDouble size={16} className="text-amber" /> {room.size}</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/258877302100?text=Olá! Gostaria de saber a disponibilidade para a ${room.title}.`} 
                  className="inline-block bg-primary hover:bg-amber text-primary-foreground hover:text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-sm shadow-lg"
                >
                  Reservar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Serviços & Comodidades</h3>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto font-body">
            Tudo o que você precisa para uma estadia sem preocupações, com o padrão de qualidade Paraíso Bilene.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { icon: Waves, title: "Piscina", desc: "Área de lazer exclusiva" },
              { icon: Shield, title: "Segurança", desc: "Vigilância 24 horas" },
              { icon: Car, title: "Parque", desc: "Estacionamento seguro" },
              { icon: ConciergeBell, title: "Serviço", desc: "Equipa dedicada" },
              { icon: Wifi, title: "Internet", desc: "Wi-Fi gratuito" },
              { icon: Snowflake, title: "Clima", desc: "Ar Condicionado" },
              { icon: UtensilsCrossed, title: "Cozinha", desc: "Totalmente equipada" },
              { icon: Tv, title: "Lazer", desc: "Smart TV & Canais" },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber transition-colors duration-500">
                  <item.icon className="text-amber group-hover:text-white transition-colors" size={24} />
                </div>
                <h5 className="font-bold mb-1 font-body uppercase tracking-widest text-[10px]">{item.title}</h5>
                <p className="text-[10px] text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Acomodacoes;
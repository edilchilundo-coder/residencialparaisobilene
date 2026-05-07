"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { supabase } from "@/integrations/supabase/client";
import { 
  Snowflake, Wifi, Tv, BedDouble, Users, UtensilsCrossed, 
  ShowerHead, Waves, Shield, Car, ConciergeBell, Loader2 
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookingDialog from "@/components/BookingDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import camaKing from "@/assets/cama-king.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";
import quartoT1 from "@/assets/quarto-t1.jpg";
import sala from "@/assets/sala.jpg";
import cozinha2 from "@/assets/cozinha-2.jpg";
import fachada from "@/assets/fachada.png";
import salaAmpla from "@/assets/sala-ampla.jpg";
import camaSolteiro from "@/assets/cama-solteiro.jpg";
import cadeira from "@/assets/cadeira.jpg";
import cama1 from "@/assets/cama-1.jpg";

const Acomodacoes = () => {
  const { t } = useLanguage();
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from('rooms').select('*').order('price_per_night', { ascending: true });
      if (!error && data) setRooms(data);
      setLoading(false);
    };
    fetchRooms();
  }, []);

  const getRoomImages = (type: string) => {
    if (type === 'T1') return [camaKing, sala, cozinha2, fachada];
    if (type === 'T2') return [quartoT2, salaAmpla, camaSolteiro, fachada];
    return [quartoT1, cadeira, cama1];
  };

  const getAmenities = (type: string) => {
    const base = [
      { icon: Snowflake, text: "Ar Condicionado" },
      { icon: Wifi, text: "Wi-Fi Grátis" },
      { icon: Tv, text: "Smart TV" },
    ];
    if (type === 'T1') return [...base, { icon: BedDouble, text: "1 Quarto" }, { icon: UtensilsCrossed, text: "Cozinha" }];
    if (type === 'T2') return [...base, { icon: BedDouble, text: "2 Quartos" }, { icon: Users, text: "Até 5 Pessoas" }];
    return [...base, { icon: BedDouble, text: "Cama Casal" }, { icon: ShowerHead, text: "WC Privativo" }];
  };

  return (
    <Layout>
      <PageHeader title={t('nav.apartments')} subtitle="Conforto absoluto a 2 minutos da praia" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-amber" size={48} />
            </div>
          ) : (
            <div className="space-y-32">
              {rooms.map((room, index) => (
                <div 
                  key={room.id} 
                  className={`flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2 w-full">
                    <Carousel className="w-full shadow-2xl group">
                      <CarouselContent>
                        {getRoomImages(room.type).map((src, i) => (
                          <CarouselItem key={i}>
                            <div className="overflow-hidden aspect-[4/3]">
                              <img
                                src={src}
                                alt={`${room.name} - Foto ${i + 1}`}
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
                      {room.type === 'T2' ? 'Perfeito para Famílias' : room.type === 'T1' ? 'Ideal para Casais' : 'Económico & Confortável'}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">{room.name}</h2>
                    <p className="text-2xl font-bold text-amber mb-6">{room.price_per_night} MT <span className="text-sm text-muted-foreground font-normal">/ noite</span></p>
                    <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-body">
                      {room.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {getAmenities(room.type).map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <item.icon size={18} className="text-amber" />
                          <span className="text-sm font-medium font-body">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setSelectedRoom(room)}
                      className="inline-block bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 transition font-bold uppercase tracking-widest text-sm font-body w-full sm:w-auto text-center rounded-full shadow-lg"
                    >
                      Reservar {room.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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

      {selectedRoom && (
        <BookingDialog 
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
          roomData={selectedRoom}
          dates={{ 
            checkIn: new Date().toISOString().split('T')[0], 
            checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0] 
          }}
        />
      )}
    </Layout>
  );
};

export default Acomodacoes;
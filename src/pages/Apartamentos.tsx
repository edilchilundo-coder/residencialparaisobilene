"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import RoomCard from "@/components/RoomCard";
import { supabase } from "@/integrations/supabase/client";
import { Waves, Shield, Car, ConciergeBell, Loader2 } from "lucide-react";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";

const Apartamentos = () => {
  const [apartments, setApartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const { data, error } = await supabase
          .from('apartments')
          .select('*')
          .order('type', { ascending: true });

        if (error) throw error;

        const formattedData = data.map(apt => ({
          ...apt,
          image: apt.type === 'T1' ? quartoT1 : quartoT2,
          description: apt.type === 'T1' 
            ? "Um refúgio moderno e acolhedor. Este espaço foi desenhado para oferecer privacidade e conforto, com acabamentos de qualidade e uma atmosfera relaxante."
            : "Espaço e conveniência para o seu grupo. Com dois quartos amplos e uma sala de estar generosa, é a escolha ideal para quem não abdica de estar em família.",
          amenities: apt.type === 'T1'
            ? ["Ar Condicionado", "Wi-Fi Grátis", "Smart TV", "Cama King", "Cozinha", "Varanda"]
            : ["2 Quartos", "2 Casas de Banho", "Cozinha Completa", "Sala Ampla", "Wi-Fi", "AC"]
        }));

        setApartments(formattedData);
      } catch (error) {
        console.error("Erro ao carregar apartamentos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  const handleBook = (apt: any) => {
    const msg = `Olá! Gostaria de saber mais sobre a disponibilidade do ${apt.type === 'T1' ? 'Apartamento T1' : 'Apartamento T2'}.`;
    window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      <PageHeader title="Nossas Acomodações" subtitle="Conforto absoluto a 2 minutos da praia" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="text-amber animate-spin mb-4" size={48} />
              <p className="text-muted-foreground font-body">Carregando acomodações...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {apartments.map((apt) => (
                <RoomCard 
                  key={apt.id}
                  type={apt.type}
                  title={apt.type === 'T1' ? 'Apartamento T1 - Suite Casal' : 'Apartamento T2 - Familiar'}
                  description={apt.description}
                  price={apt.price_per_night}
                  image={apt.image}
                  isAvailable={true} // Na página de listagem geral, mostramos como disponível para consulta
                  amenities={apt.amenities}
                  onBook={() => handleBook(apt)}
                />
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
                  <item.icon className="text-amber group-hover:text-accent-foreground transition-colors" size={32} />
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
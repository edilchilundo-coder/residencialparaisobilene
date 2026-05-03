"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import bilenePraia from "@/assets/bilene-praia.jpg";
import piscina from "@/assets/piscina.jpg";
import heroReal from "@/assets/hero-real.jpg";
import piscinaNoite1 from "@/assets/piscina-noite-1.jpg";
import { Home, UtensilsCrossed, Waves, Calendar, Search, ArrowRight, Star, Quote, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "./Blog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Index = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [aptType, setAptType] = useState("T1");
  const [isChecking, setIsChecking] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState<'idle' | 'available' | 'unavailable'>('idle');

  const today = new Date().toISOString().split('T')[0];

  const checkAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      toast.error("Por favor, selecione as datas de check-in e check-out.");
      return;
    }

    setIsChecking(true);
    setAvailabilityStatus('idle');

    try {
      // 1. Buscar total de unidades do tipo selecionado
      const { data: aptData, error: aptError } = await supabase
        .from('apartments')
        .select('total_units')
        .eq('type', aptType)
        .single();

      if (aptError) throw aptError;

      // 2. Buscar reservas existentes que conflitam com as datas
      const { data: bookings, error: bookError } = await supabase
        .from('bookings')
        .select('id')
        .eq('apartment_type', aptType)
        .eq('status', 'confirmed')
        .or(`check_in.lte.${checkOut},check_out.gte.${checkIn}`);

      if (bookError) throw bookError;

      const isAvailable = (bookings?.length || 0) < (aptData?.total_units || 0);
      
      setAvailabilityStatus(isAvailable ? 'available' : 'unavailable');
      
      if (isAvailable) {
        toast.success("Temos disponibilidade para estas datas!");
      } else {
        toast.error("Infelizmente não temos disponibilidade para estas datas.");
      }
    } catch (error) {
      console.error("Erro ao verificar disponibilidade:", error);
      toast.error("Erro ao verificar disponibilidade. Tente novamente.");
    } finally {
      setIsChecking(false);
    }
  };

  const handleFinalizeBooking = () => {
    const msg = `Olá! Verifiquei no site e gostaria de reservar:\n🏠 Tipo: Apartamento ${aptType}\n📅 Check-in: ${checkIn}\n📅 Check-out: ${checkOut}`;
    window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center pt-24 pb-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroReal})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-amber font-semibold tracking-[0.2em] uppercase text-sm mb-4 block font-body">
              Luxury Hotel & Best Resort
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              O Seu Refúgio Perfeito <br className="hidden sm:block" /> na Praia do Bilene
            </h1>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light font-body">
              Descubra um espaço de conforto e hospitalidade a apenas 2 minutos de carro da praia. Apartamentos T1 e T2 equipados para si e para a sua família.
            </p>
          </div>

          {/* Availability Bar */}
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-sm border border-white/20 shadow-2xl">
            <form onSubmit={checkAvailability} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-foreground uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} className="text-amber" /> Check-in
                </label>
                <input 
                  type="date" 
                  min={today}
                  required
                  className="w-full bg-white/90 border-none p-3 text-sm focus:ring-2 focus:ring-amber outline-none rounded-sm"
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    setAvailabilityStatus('idle');
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-foreground uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} className="text-amber" /> Check-out
                </label>
                <input 
                  type="date" 
                  min={checkIn || today}
                  required
                  className="w-full bg-white/90 border-none p-3 text-sm focus:ring-2 focus:ring-amber outline-none rounded-sm"
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                    setAvailabilityStatus('idle');
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-foreground uppercase tracking-widest flex items-center gap-2">
                  <Home size={14} className="text-amber" /> Apartamento
                </label>
                <select 
                  className="w-full bg-white/90 border-none p-3 text-sm focus:ring-2 focus:ring-amber outline-none rounded-sm"
                  value={aptType}
                  onChange={(e) => {
                    setAptType(e.target.value);
                    setAvailabilityStatus('idle');
                  }}
                >
                  <option value="T1">Apartamento T1</option>
                  <option value="T2">Apartamento T2</option>
                </select>
              </div>
              <button 
                type="submit"
                disabled={isChecking}
                className="w-full bg-amber hover:bg-amber-dark text-accent-foreground font-bold py-3 px-6 transition flex items-center justify-center gap-2 uppercase tracking-widest text-sm rounded-sm disabled:opacity-50"
              >
                {isChecking ? "Verificando..." : <><Search size={18} /> Verificar</>}
              </button>
            </form>

            {/* Status Messages */}
            {availabilityStatus === 'available' && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle2 size={24} />
                  <span className="font-bold text-sm uppercase tracking-wider">Disponibilidade Confirmada!</span>
                </div>
                <button 
                  onClick={handleFinalizeBooking}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-bold text-xs uppercase tracking-widest transition rounded-sm"
                >
                  Reservar Agora
                </button>
              </div>
            )}

            {availabilityStatus === 'unavailable' && (
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-sm flex items-center gap-3 text-red-400">
                <AlertCircle size={24} />
                <span className="font-bold text-sm uppercase tracking-wider">Infelizmente não temos vagas para estas datas. Tente outro período.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-4">Acomodações Premium</h2>
          <p className="text-muted-foreground mb-16 font-body">
            Escolha entre os nossos espaçosos Apartamentos T1 ou T2, ambos concebidos para um conforto absoluto.
          </p>

          <div className="bg-card p-6 sm:p-8 shadow-xl border border-border text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <Home className="mx-auto text-amber mb-3" size={32} />
                <h4 className="font-bold text-foreground font-body">Apartamentos T1 & T2</h4>
                <p className="text-sm text-muted-foreground mt-2 font-body">Suítes climatizadas</p>
              </div>
              <div className="text-center">
                <UtensilsCrossed className="mx-auto text-amber mb-3" size={32} />
                <h4 className="font-bold text-foreground font-body">Cozinha Equipada</h4>
                <p className="text-sm text-muted-foreground mt-2 font-body">Pronta a usar</p>
              </div>
              <div className="text-center">
                <Waves className="mx-auto text-amber mb-3" size={32} />
                <h4 className="font-bold text-foreground font-body">Piscina Comum</h4>
                <p className="text-sm text-muted-foreground mt-2 font-body">Área de lazer exclusiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">O Nosso Paraíso</h2>
            <div className="w-20 h-1 bg-amber mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 gallery-item">
              <img src={piscinaNoite1} alt="Piscina Iluminada à Noite" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={piscina} alt="Área da Piscina" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={bilenePraia} alt="Praia do Bilene" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={heroReal} alt="Fachada" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={piscinaNoite1} alt="Piscina" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/galeria" className="inline-block border-b-2 border-amber pb-1 font-bold text-foreground hover:text-amber transition font-body">
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Experiências Memoráveis (Blog Highlights) */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experiências Memoráveis</h2>
            <p className="text-muted-foreground font-body">Descubra o que o Bilene tem de melhor para oferecer através do nosso blog.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <Link key={post.id} to="/blog" className="group bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber text-accent-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3 text-foreground group-hover:text-amber transition-colors line-clamp-2 h-12">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-4 font-body">
                    {post.excerpt}
                  </p>
                  <span className="text-amber text-xs font-bold flex items-center gap-1">
                    Ler Mais <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber hover:text-accent-foreground transition font-body">
              Explorar o Blog Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">O que dizem os nossos hóspedes</h2>
            <div className="w-20 h-1 bg-amber mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ricardo M.", text: "Excelente estadia! O apartamento T2 é muito espaçoso e a cozinha tem tudo o que precisamos. A piscina é ótima para relaxar.", rating: 5 },
              { name: "Ana Paula", text: "Fomos muito bem recebidos. A localização é perfeita, perto da praia mas longe do barulho. Recomendo vivamente!", rating: 5 },
              { name: "Sérgio L.", text: "Segurança 24h dá-nos muita tranquilidade. Os quartos são frescos e muito limpos. Voltaremos com certeza.", rating: 5 },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 relative shadow-sm border border-border">
                <Quote className="text-amber/20 absolute top-4 right-4" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} className="fill-amber text-amber" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 font-body">"{item.text}"</p>
                <h5 className="font-bold text-foreground font-body">— {item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Planeie a Sua Estadia
          </h3>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto font-body">
            Verifique a disponibilidade acima ou fale diretamente connosco para garantir os melhores momentos na Praia do Bilene.
          </p>
          <a
            href="https://wa.me/258877302100"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-dark-deeper transition font-body"
          >
            Falar via WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
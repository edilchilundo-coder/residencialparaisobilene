"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import bilenePraia from "@/assets/bilene-praia.jpg";
import cozinha from "@/assets/cozinha.jpg";
import sala from "@/assets/sala.jpg";
import fachada from "@/assets/fachada.png";
import salaAmpla from "@/assets/sala-ampla.jpg";
import piscina from "@/assets/piscina.jpg";
import heroReal from "@/assets/hero-real.jpg";
import piscinaNoite1 from "@/assets/piscina-noite-1.jpg";
import piscinaNoite2 from "@/assets/piscina-noite-2.jpg";
import { Home, UtensilsCrossed, Waves, Shield, Car, Ship, ChefHat, Bike, Sun, MapPin, Star, Quote, Calendar, Search, ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Index = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [aptType, setAptType] = useState("T1");
  const [status, setStatus] = useState<"idle" | "checking" | "available" | "full">("idle");

  const today = new Date().toISOString().split('T')[0];

  const checkAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      toast.error("Por favor, selecione as datas de check-in e check-out.");
      return;
    }

    setStatus("checking");

    try {
      // Inventário total
      const inventory = { T1: 2, T2: 7 };
      const totalUnits = inventory[aptType as keyof typeof inventory];

      // Verificar reservas que sobrepõem as datas selecionadas
      const { data: bookings, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("unit_type", aptType)
        .or(`and(check_in.lt.${checkOut},check_out.gt.${checkIn})`);

      if (error) throw error;

      const occupiedCount = bookings?.length || 0;

      if (occupiedCount < totalUnits) {
        setStatus("available");
        toast.success(`Temos disponibilidade para o Apartamento ${aptType}!`);
      } else {
        setStatus("full");
        toast.error(`Desculpe, não temos ${aptType} disponível para estas datas.`);
      }
    } catch (error) {
      console.error("Erro ao verificar disponibilidade:", error);
      toast.error("Ocorreu um erro ao verificar a disponibilidade.");
      setStatus("idle");
    }
  };

  const handleWhatsAppBooking = () => {
    const msg = `Olá! Gostaria de reservar:\n🏠 Tipo: Apartamento ${aptType}\n📅 Check-in: ${checkIn}\n📅 Check-out: ${checkOut}\n(Verificado no site como disponível)`;
    window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const whatsappMsg = encodeURIComponent("Olá! Gostaria de saber mais sobre a disponibilidade e reservas na Residencial Paraíso Bilene.");

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
              7 Apartamentos T2 e 2 Apartamentos T1 totalmente equipados a apenas 2 minutos de carro da praia.
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
                  onChange={(e) => { setCheckIn(e.target.value); setStatus("idle"); }}
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
                  onChange={(e) => { setCheckOut(e.target.value); setStatus("idle"); }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-foreground uppercase tracking-widest flex items-center gap-2">
                  <Home size={14} className="text-amber" /> Apartamento
                </label>
                <select 
                  className="w-full bg-white/90 border-none p-3 text-sm focus:ring-2 focus:ring-amber outline-none rounded-sm"
                  value={aptType}
                  onChange={(e) => { setAptType(e.target.value); setStatus("idle"); }}
                >
                  <option value="T1">Apartamento T1 (3.500 MT)</option>
                  <option value="T2">Apartamento T2 (6.500 MT)</option>
                </select>
              </div>
              <button 
                type="submit"
                disabled={status === "checking"}
                className="w-full bg-amber hover:bg-amber-dark text-accent-foreground font-bold py-3 px-6 transition flex items-center justify-center gap-2 uppercase tracking-widest text-sm rounded-sm disabled:opacity-50"
              >
                {status === "checking" ? <Loader2 className="animate-spin" size={18} /> : <Search size={18} />}
                Verificar
              </button>
            </form>

            {/* Status Messages */}
            {status === "available" && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                  <CheckCircle2 size={20} /> DISPONÍVEL PARA AS DATAS SELECIONADAS!
                </div>
                <button 
                  onClick={handleWhatsAppBooking}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition"
                >
                  RESERVAR AGORA
                </button>
              </div>
            )}
            {status === "full" && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-sm flex items-center gap-2 text-red-400 font-bold text-sm">
                <XCircle size={20} /> ESGOTADO PARA ESTAS DATAS. TENTE OUTRO TIPO OU DATA.
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
            7 Apartamentos T2 e 2 Apartamentos T1 concebidos para um conforto absoluto.
          </p>

          <div className="bg-card p-6 sm:p-8 shadow-xl border border-border text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 border-b border-border pb-8">
              <div className="text-center">
                <Home className="mx-auto text-amber mb-3" size={32} />
                <h4 className="font-bold text-foreground font-body">T1 & T2</h4>
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

            <div className="flex flex-col sm:flex-row justify-between items-center section-dark p-6 sm:p-8 relative overflow-hidden gap-6">
              <div className="pt-4 sm:pt-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1 font-body">Melhor Preço Garantido</p>
                <div className="flex items-end gap-3 flex-wrap">
                  <p className="text-3xl sm:text-4xl font-bold text-amber">
                    Desde 3.500 MT <span className="text-sm font-normal text-muted-foreground">/ noite</span>
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/258877302100?text=${whatsappMsg}`}
                className="bg-amber hover:bg-amber-dark px-8 py-4 font-semibold transition text-lg shadow-lg font-body text-accent-foreground whitespace-nowrap"
              >
                Reservar via WhatsApp
              </a>
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
              <img src={piscinaNoite2} alt="Área de Lazer Noturna" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={piscina} alt="Área da Piscina" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={cozinha} alt="Cozinha Equipada" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={sala} alt="Sala com TV" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 gallery-item h-64">
              <img src={bilenePraia} alt="Praia do Bilene" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/galeria" className="inline-block border-b-2 border-amber pb-1 font-bold text-foreground hover:text-amber transition font-body">
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Experiências Memoráveis (Blog Preview) */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experiências Memoráveis</h2>
            <p className="text-muted-foreground font-body">Descubra o que o Bilene tem de melhor para oferecer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Ship, title: "Passeios de Barco", desc: "Lagoa do Bilene" },
              { icon: ChefHat, title: "Gastronomia", desc: "Frutos do Mar Frescos" },
              { icon: Bike, title: "Quad Biking", desc: "Aventura nas Dunas" },
              { icon: Sun, title: "Sunset Lounge", desc: "Música e Drinks" },
            ].map((item) => (
              <Link key={item.title} to="/blog" className="text-center group bg-card p-8 border border-border hover:border-amber transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber transition-colors duration-300">
                  <item.icon className="text-amber group-hover:text-accent-foreground transition-colors" size={28} />
                </div>
                <h4 className="font-bold mb-2 text-foreground group-hover:text-amber transition-colors">{item.title}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-4">{item.desc}</p>
                <span className="text-amber text-xs font-bold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber Mais <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber hover:text-accent-foreground transition font-body">
              Explorar o Blog
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
            Reserve Agora o Seu Paraíso
          </h3>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto font-body">
            Garanta momentos inesquecíveis na Praia do Bilene com o melhor conforto da região.
          </p>
          <a
            href={`https://wa.me/258877302100?text=${whatsappMsg}`}
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-dark-deeper transition font-body"
          >
            Reservar via WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
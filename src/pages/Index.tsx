"use client";

import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import bilenePraia from "@/assets/bilene-praia.jpg";
import piscina from "@/assets/piscina.jpg";
import heroReal from "@/assets/hero-real.jpg";
import piscinaNoite1 from "@/assets/piscina-noite-1.jpg";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";
import { Home, UtensilsCrossed, Waves, Calendar, Search, ArrowRight, Star, Quote, MapPin, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "./Blog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import RoomCard from "@/components/RoomCard";

const Index = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [featuredRooms, setFeaturedRooms] = useState<any[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data } = await supabase.from('apartments').select('*').order('type');
      if (data) {
        setFeaturedRooms(data.map(apt => ({
          ...apt,
          image: apt.type === 'T1' ? quartoT1 : quartoT2,
          description: apt.type === 'T1' 
            ? "Perfeito para casais que buscam privacidade e conforto moderno."
            : "Espaço ideal para famílias com dois quartos amplos e cozinha completa.",
          amenities: apt.type === 'T1' ? ["AC", "Wi-Fi", "TV"] : ["2 Quartos", "Cozinha", "AC"]
        })));
      }
    };
    fetchFeatured();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      toast.error("Por favor, selecione as datas.");
      return;
    }

    setIsSearching(true);
    
    try {
      const { data: apartments, error: aptError } = await supabase
        .from('apartments')
        .select('*')
        .order('type', { ascending: true });

      if (aptError) throw aptError;

      const processedResults = await Promise.all(apartments.map(async (apt) => {
        const { data: bookings, error: bookError } = await supabase
          .from('bookings')
          .select('id')
          .eq('apartment_type', apt.type)
          .eq('status', 'confirmed')
          .or(`check_in.lte.${checkOut},check_out.gte.${checkIn}`);

        if (bookError) throw bookError;

        return {
          ...apt,
          isAvailable: (bookings?.length || 0) < (apt.total_units || 0),
          image: apt.type === 'T1' ? quartoT1 : quartoT2,
          description: apt.type === 'T1' 
            ? "Perfeito para casais que buscam privacidade e conforto moderno. Suite climatizada com acabamentos de luxo."
            : "Espaço ideal para famílias. Dois quartos amplos, sala de estar generosa e cozinha totalmente equipada.",
          amenities: apt.type === 'T1'
            ? ["Ar Condicionado", "Wi-Fi Grátis", "Smart TV", "Cama King", "Cozinha", "Varanda"]
            : ["2 Quartos", "2 Casas de Banho", "Cozinha Completa", "Sala Ampla", "Wi-Fi", "AC"]
        };
      }));

      setResults(processedResults);
      setHasSearched(true);
      
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (error) {
      console.error("Erro na busca:", error);
      toast.error("Erro ao verificar disponibilidade.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleBook = (apt: any) => {
    const msg = `Olá! Gostaria de reservar:\n🏠 ${apt.type} - ${apt.type === 'T1' ? 'Apartamento T1' : 'Apartamento T2'}\n📅 Check-in: ${checkIn || 'A definir'}\n📅 Check-out: ${checkOut || 'A definir'}\n💰 Preço: ${apt.price_per_night} MT/noite`;
    window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${heroReal})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-amber font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block animate-fade-in">
            Luxury Residencial & Resort
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight animate-slide-up">
            Onde o Conforto <br /> Encontra o Mar
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light font-body mb-12 animate-fade-in-delayed">
            Experiência exclusiva na Praia do Bilene. Apartamentos modernos a apenas 2 minutos da lagoa.
          </p>

          {/* Radisson Style Search Bar */}
          <div className="max-w-5xl mx-auto bg-white shadow-2xl p-2 md:p-3 rounded-sm animate-slide-up-delayed">
            <form onSubmit={handleSearch} className="flex flex-col lg:flex-row items-stretch gap-2">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber group-focus-within:scale-110 transition-transform">
                    <Calendar size={18} />
                  </div>
                  <div className="flex flex-col items-start pl-12 pr-4 py-2 border border-gray-100 hover:border-amber transition-colors">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Check-in</label>
                    <input 
                      type="date" 
                      min={today}
                      required
                      className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none"
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber group-focus-within:scale-110 transition-transform">
                    <Calendar size={18} />
                  </div>
                  <div className="flex flex-col items-start pl-12 pr-4 py-2 border border-gray-100 hover:border-amber transition-colors">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Check-out</label>
                    <input 
                      type="date" 
                      min={checkIn || today}
                      required
                      className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none"
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={isSearching}
                className="bg-primary hover:bg-amber text-white hover:text-accent-foreground px-12 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 min-w-[200px]"
              >
                {isSearching ? <Loader2 className="animate-spin" size={18} /> : <><Search size={18} /> Verificar</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div ref={resultsRef} className={`py-24 bg-secondary transition-all duration-700 ${hasSearched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Opções Disponíveis</h2>
              <p className="text-muted-foreground font-body">Resultados para {checkIn} até {checkOut}</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-amber uppercase tracking-widest">
              <MapPin size={16} /> Praia do Bilene, Moçambique
            </div>
          </div>

          <div className="space-y-8">
            {results.map((apt) => (
              <RoomCard 
                key={apt.id}
                type={apt.type}
                title={apt.type === 'T1' ? 'Apartamento T1 - Suite Casal' : 'Apartamento T2 - Familiar'}
                description={apt.description}
                price={apt.price_per_night}
                image={apt.image}
                isAvailable={apt.isAvailable}
                amenities={apt.amenities}
                onBook={() => handleBook(apt)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Rooms (Visible before search) */}
      {!hasSearched && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-amber font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Acomodações</span>
              <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Apartamentos</h2>
              <div className="w-20 h-1 bg-amber mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredRooms.map((apt) => (
                <div key={apt.id} className="group relative overflow-hidden shadow-xl">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={apt.image} alt={apt.type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Apartamento {apt.type}</h3>
                    <p className="text-white/70 text-sm mb-6 font-body line-clamp-2">{apt.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber font-bold">{apt.price_per_night} MT <span className="text-[10px] text-white/50 font-normal">/ noite</span></span>
                      <Link to="/apartamentos" className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-amber transition-colors">
                        Ver Detalhes <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber transition-colors duration-500 shadow-sm">
                <Home className="text-amber group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Design Moderno</h4>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">Apartamentos decorados com elegância e equipados com tecnologia de ponta para o seu conforto.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber transition-colors duration-500 shadow-sm">
                <UtensilsCrossed className="text-amber group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Cozinha Completa</h4>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">Liberdade total para preparar as suas refeições com eletrodomésticos de alta qualidade.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber transition-colors duration-500 shadow-sm">
                <Waves className="text-amber group-hover:text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Lazer & Piscina</h4>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">Desfrute da nossa piscina iluminada e áreas de convívio exclusivas para hóspedes.</p>
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
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experiências Memoráveis</h2>
            <p className="text-muted-foreground font-body">Descubra o que o Bilene tem de melhor para oferecer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <Link key={post.id} to="/blog" className="group bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-amber text-accent-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{post.category}</div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3 text-foreground group-hover:text-amber transition-colors line-clamp-2 h-12">{post.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-4 font-body">{post.excerpt}</p>
                  <span className="text-amber text-xs font-bold flex items-center gap-1">Ler Mais <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
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
              { name: "Ricardo M.", text: "Excelente estadia! O apartamento T2 é muito espaçoso e a cozinha tem tudo o que precisamos.", rating: 5 },
              { name: "Ana Paula", text: "Fomos muito bem recebidos. A localização é perfeita, perto da praia mas longe do barulho.", rating: 5 },
              { name: "Sérgio L.", text: "Segurança 24h dá-nos muita tranquilidade. Os quartos são frescos e muito limpos.", rating: 5 },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-border">
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
    </Layout>
  );
};

export default Index;
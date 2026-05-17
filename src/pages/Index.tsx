"use client";

import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Home, UtensilsCrossed, Waves, Search, ArrowRight, Star, ChefHat, Loader2, ShieldCheck, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "./BlogData";
import { toast } from "sonner";
import RoomCard from "@/components/RoomCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Imagens profissionais
const heroImg = "dyad-media://media/residencialparaisobilene/.dyad/media/1c9d6e5f4982e6d059d0f4851996ab8a.png";
const patioDia = "dyad-media://media/residencialparaisobilene/.dyad/media/7748c3233fe0711b64e160b022001984.JPG";
const barImg = "dyad-media://media/residencialparaisobilene/.dyad/media/86666666666666666666666666666669.png";
const piscinaNoite = "dyad-media://media/residencialparaisobilene/.dyad/media/46bbd0275b1cc969c64deb4a1ef38a0a.jpg";
const fotoArtistica = "dyad-media://media/residencialparaisobilene/.dyad/media/86666666666666666666666666666668.png";

interface RoomAvailability {
  id: string;
  name: string;
  type: string;
  price_per_night: number;
  description: string;
  total_quantity: number;
  available_count: number;
}

const Index = () => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<RoomAvailability[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split('T')[0];

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      toast.error(t('search.error_dates'));
      return;
    }

    setIsSearching(true);
    
    try {
      let query = supabase.from('rooms').select('*');
      if (roomType !== 'all') {
        query = query.eq('type', roomType);
      }
      const { data: rooms, error: roomsError } = await query;
      if (roomsError) throw roomsError;

      const { data: reservations, error: resError } = await supabase
        .from('reservations')
        .select('room_id')
        .filter('check_in', 'lt', checkOut)
        .filter('check_out', 'gt', checkIn)
        .eq('status', 'confirmed');

      if (resError) throw resError;

      const availability = rooms.map(room => {
        const occupiedCount = reservations.filter(r => r.room_id === room.id).length;
        return {
          ...room,
          available_count: room.total_quantity - occupiedCount
        };
      });

      setResults(availability);
      
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (error) {
      console.error("Erro ao verificar disponibilidade:", error);
      toast.error("Erro ao verificar disponibilidade. Tente novamente.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleBook = (roomName: string) => {
    const msg = `Olá! Gostaria de reservar:\n🏠 ${roomName}\n📅 Check-in: ${checkIn}\n📅 Check-out: ${checkOut}`;
    window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
            {t('hero.title')}
          </h1>
          <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto font-light font-body mb-12 animate-fade-in-delayed">
            {t('hero.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-5xl mx-auto bg-white shadow-2xl p-4 md:p-2 rounded-2xl md:rounded-full animate-slide-up-delayed">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-2 w-full px-2 md:px-4">
                <div className="flex flex-col items-start py-1 md:py-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1">{t('search.checkin')}</label>
                  <input 
                    type="date" 
                    min={today}
                    className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none cursor-pointer"
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start py-1 md:py-2 sm:border-l border-gray-100 sm:pl-4">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1">{t('search.checkout')}</label>
                  <input 
                    type="date" 
                    min={checkIn || today}
                    className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none cursor-pointer"
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start py-1 md:py-2 sm:border-l border-gray-100 sm:pl-4">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1">{t('search.type')}</label>
                  <Select onValueChange={setRoomType} defaultValue="all">
                    <SelectTrigger className="w-full bg-transparent border-none p-0 h-auto text-sm font-bold focus:ring-0 shadow-none text-left">
                      <SelectValue placeholder={t('search.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      <SelectItem value="T1">{t('search.t1')}</SelectItem>
                      <SelectItem value="T2">{t('search.t2')}</SelectItem>
                      <SelectItem value="Quarto">{t('search.room')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <button 
                onClick={checkAvailability}
                disabled={isSearching}
                className="bg-amber hover:bg-amber-dark text-accent-foreground px-10 py-4 rounded-xl md:rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 w-full md:w-auto shadow-lg md:shadow-none"
              >
                {isSearching ? <Loader2 className="animate-spin" size={16} /> : <><Search size={16} /> {t('search.button')}</>}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {results.length > 0 && (
        <section ref={resultsRef} className="py-24 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Resultados para as suas datas</h2>
              <p className="text-muted-foreground font-body">De {checkIn} até {checkOut}</p>
              <div className="w-12 h-1 bg-amber mx-auto mt-4" />
            </div>

            <div className="max-w-5xl mx-auto">
              {results.map((room) => (
                <RoomCard 
                  key={room.id}
                  type={room.type}
                  title={room.name}
                  description={room.description}
                  price={room.price_per_night}
                  image={heroImg}
                  isAvailable={room.available_count > 0}
                  onBook={() => handleBook(room.name)}
                  amenities={["Wi-Fi Grátis", "Ar Condicionado", "Segurança 24h"]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <span className="text-amber text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Excelência no Bilene</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Porquê escolher a Residencial Paraíso?</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Localização Privilegiada", desc: "A apenas 2 minutos da lagoa, oferecemos o equilíbrio perfeito entre proximidade e tranquilidade." },
                  { icon: ShieldCheck, title: "Segurança & Privacidade", desc: "Recinto fechado com vigilância 24h e estacionamento privado para sua total paz de espírito." },
                  { icon: Heart, title: "Hospitalidade Genuína", desc: "Uma equipa dedicada a tornar a sua estadia memorável, cuidando de cada detalhe com carinho." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="text-amber" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img src={fotoArtistica} alt="Ambiente Paraíso" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-amber p-8 text-accent-foreground hidden md:block shadow-xl">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest">Satisfação dos Hóspedes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: t('home.features.design'), desc: t('home.features.designDesc'), img: fotoArtistica },
              { icon: UtensilsCrossed, title: t('home.features.kitchen'), desc: t('home.features.kitchenDesc'), img: barImg },
              { icon: Waves, title: t('home.features.leisure'), desc: t('home.features.leisureDesc'), img: piscinaNoite },
              { icon: ChefHat, title: t('home.features.restaurant'), desc: t('home.features.restaurantDesc'), img: patioDia },
            ].map((feature, i) => (
              <div key={i} className="group bg-white p-4 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-2 px-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm font-body leading-relaxed px-2 mb-4">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.blog')}</h2>
            <p className="text-gray-500 font-body">{t('home.blogDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-amber text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{post.category}</div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3 text-gray-900 group-hover:text-amber transition-colors line-clamp-2 h-12">{post.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-3 mb-4 font-body">{post.excerpt}</p>
                  <span className="text-amber text-xs font-bold flex items-center gap-1">Ler Mais <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
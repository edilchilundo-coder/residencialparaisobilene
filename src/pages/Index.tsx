"use client";

import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import fotoArtistica from "@/assets/foto-artistica.png";
import piscina from "@/assets/piscina.jpg";
import piscinaNoite3 from "@/assets/piscina-noite-3.jpg";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";
import fachada from "@/assets/fachada.png";
import salaAmpla from "@/assets/sala-ampla.jpg";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import camaKing from "@/assets/cama-king.jpg";
import cozinha2 from "@/assets/cozinha-2.jpg";
import cadeira from "@/assets/cadeira.jpg";
import { Home, UtensilsCrossed, Waves, Search, ArrowRight, Star, Quote, ChefHat, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<RoomAvailability[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split('T')[0];

  const testimonials = [
    {
      name: "Ricardo Santos",
      text: "Experiência fantástica! A casa T2 é super espaçosa e a piscina é ótima para relaxar depois da praia. Atendimento nota 10.",
      rating: 5
    },
    {
      name: "Ana Paula",
      text: "O melhor custo-benefício do Bilene. Fiquei no quarto suite e estava tudo impecável. A localização é perfeita.",
      rating: 5
    },
    {
      name: "Carlos M.",
      text: "Segurança e tranquilidade. Viajei com a família e nos sentimos em casa. Recomendo vivamente a Casa T1 para casais.",
      rating: 5
    }
  ];

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      toast.error(t('search.error_dates'));
      return;
    }

    setIsSearching(true);
    
    try {
      // 1. Buscar todos os quartos
      let query = supabase.from('rooms').select('*');
      if (roomType !== 'all') {
        query = query.eq('type', roomType);
      }
      const { data: rooms, error: roomsError } = await query;
      if (roomsError) throw roomsError;

      // 2. Buscar reservas que coincidem com as datas
      const { data: reservations, error: resError } = await supabase
        .from('reservations')
        .select('room_id')
        .filter('check_in', 'lt', checkOut)
        .filter('check_out', 'gt', checkIn)
        .eq('status', 'confirmed');

      if (resError) throw resError;

      // 3. Calcular disponibilidade
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

  const getRoomImage = (type: string) => {
    if (type === 'T1') return camaKing;
    if (type === 'T2') return quartoT2;
    return quartoT1;
  };

  const getAmenities = (type: string) => {
    const base = ["Wi-Fi Grátis", "Ar Condicionado", "Segurança 24h"];
    if (type === 'T1' || type === 'T2') return [...base, "Cozinha Equipada", "Sala de Estar"];
    return [...base, "WC Privativo"];
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${fotoArtistica})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-white/95 text-base md:text-xl max-w-2xl mx-auto font-medium font-body mb-12 animate-fade-in-delayed drop-shadow-md">
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
                  image={getRoomImage(room.type)}
                  isAvailable={room.available_count > 0}
                  onBook={() => handleBook(room.name)}
                  amenities={getAmenities(room.type)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: t('home.features.design'), desc: t('home.features.designDesc'), img: salaAmpla },
              { icon: UtensilsCrossed, title: t('home.features.kitchen'), desc: t('home.features.kitchenDesc'), img: cozinha2 },
              { icon: Waves, title: t('home.features.leisure'), desc: t('home.features.leisureDesc'), img: piscinaNoite3 },
              { icon: ChefHat, title: t('home.features.restaurant'), desc: t('home.features.restaurantDesc'), img: gastronomiaImg },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <feature.icon className="text-amber" size={20} />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.testimonials')}</h2>
            <div className="w-12 h-1 bg-amber mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-gray-100 relative">
                <Star className="absolute top-4 right-4 text-amber/10" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 font-body">"{t.text}"</p>
                <h5 className="font-bold text-gray-900">{t.name}</h5>
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
              <Link key={post.id} to="/blog" className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
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
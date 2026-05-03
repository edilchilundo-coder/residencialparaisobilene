"use client";

import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import bilenePraia from "@/assets/bilene-praia.jpg";
import piscina from "@/assets/piscina.jpg";
import heroReal from "@/assets/hero-real.jpg";
import piscinaNoite1 from "@/assets/piscina-noite-1.jpg";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";
import fachada from "@/assets/fachada.png";
import salaAmpla from "@/assets/sala-ampla.jpg";
import { Home, UtensilsCrossed, Waves, Calendar, Search, ArrowRight, Star, Quote, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "./Blog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import RoomTypeCard from "@/components/RoomTypeCard";

const Index = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      toast.error("Por favor, selecione as datas.");
      return;
    }
    setIsSearching(true);
    // Simular busca e scroll
    setTimeout(() => {
      setIsSearching(false);
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 800);
  };

  const handleBook = (type: string) => {
    const msg = `Olá! Gostaria de reservar:\n🏠 ${type}\n📅 Check-in: ${checkIn || 'A definir'}\n📅 Check-out: ${checkOut || 'A definir'}`;
    window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const roomTypes = [
    {
      title: "Casa T1",
      images: [quartoT1, salaAmpla, fachada],
      size: "60 m²",
      capacity: "2 Adultos",
      bedType: "1 Quarto",
      type: "Casa T1"
    },
    {
      title: "Casa T2",
      images: [quartoT2, salaAmpla, piscina],
      size: "90 m²",
      capacity: "4 Adultos",
      bedType: "2 Quartos",
      type: "Casa T2"
    },
    {
      title: "Quarto",
      images: [quartoT1, bilenePraia, piscinaNoite1],
      size: "30 m²",
      capacity: "2 Adultos",
      bedType: "Suite Casal",
      type: "Quarto"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${heroReal})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
            Residencial Paraíso <br /> Bilene
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light font-body mb-12 animate-fade-in-delayed">
            O seu refúgio de luxo a apenas 2 minutos da lagoa.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white shadow-2xl p-2 rounded-full animate-slide-up-delayed">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 grid grid-cols-2 gap-2 w-full px-4">
                <div className="flex flex-col items-start py-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Check-in</label>
                  <input 
                    type="date" 
                    min={today}
                    className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none"
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start py-2 border-l border-gray-100 pl-4">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Check-out</label>
                  <input 
                    type="date" 
                    min={checkIn || today}
                    className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none"
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="bg-[#C82820] hover:bg-[#A0201A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 w-full md:w-auto"
              >
                {isSearching ? "..." : <><Search size={16} /> Verificar</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section ref={resultsRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Acomodações</h2>
            <div className="w-12 h-1 bg-red-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <RoomTypeCard 
                key={index}
                title={room.title}
                images={room.images}
                size={room.size}
                capacity={room.capacity}
                bedType={room.bedType}
                onBook={() => handleBook(room.type)}
                onReadMore={() => navigate('/apartamentos')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-50 transition-colors duration-500">
                <Home className="text-red-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Design Moderno</h4>
              <p className="text-gray-500 text-sm font-body leading-relaxed">Espaços decorados com elegância e equipados para o seu conforto total.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-50 transition-colors duration-500">
                <UtensilsCrossed className="text-red-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Cozinha Completa</h4>
              <p className="text-gray-500 text-sm font-body leading-relaxed">Liberdade total para preparar as suas refeições com equipamentos de qualidade.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-50 transition-colors duration-500">
                <Waves className="text-red-600" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Lazer & Piscina</h4>
              <p className="text-gray-500 text-sm font-body leading-relaxed">Desfrute da nossa piscina e áreas de convívio exclusivas para hóspedes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiências Memoráveis</h2>
            <p className="text-gray-500 font-body">Descubra o que o Bilene tem de melhor para oferecer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <Link key={post.id} to="/blog" className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">{post.category}</div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 h-12">{post.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-3 mb-4 font-body">{post.excerpt}</p>
                  <span className="text-red-600 text-xs font-bold flex items-center gap-1">Ler Mais <ArrowRight size={12} /></span>
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
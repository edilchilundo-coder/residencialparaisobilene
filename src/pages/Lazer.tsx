"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Sun, Moon, Wind, Coffee, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import piscinaNoite3 from "@/assets/piscina-noite-3.jpg";
import sunsetLoungeExt from "@/assets/sunset-lounge-exterior.webp";

const Lazer = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHeader 
        title="Lazer & Bem-Estar" 
        subtitle="Espaços desenhados para o seu relaxamento total" 
      />

      {/* Lounge Principal */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-amber mb-4">
                <Moon size={18} />
                <span className="text-xs font-bold uppercase tracking-widest font-body">Ambiente Noturno</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Lounge Premium</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                Desfrute de noites mágicas no nosso lounge principal. Com iluminação quente, sofás confortáveis e um deck de madeira elegante, é o local perfeito para uma conversa descontraída sob as estrelas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber">
                    <Users size={20} />
                  </div>
                  <span className="text-sm font-bold font-body">Socialização</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-sm font-bold font-body">Conforto VIP</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={piscinaNoite3} 
                  alt="Lounge Noturno" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Lounge & Gazebos */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-amber mb-4">
                <Sun size={18} />
                <span className="text-xs font-bold uppercase tracking-widest font-body">Pé na Areia</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Beach Lounge & Gazebos</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                Sinta a vibração do Bilene nos nossos espaços "pé na areia". Murais coloridos, gazebos de madeira e áreas de sombra proporcionam o refúgio ideal para ler um livro ou desfrutar de um cocktail refrescante durante o dia.
              </p>
              <div className="space-y-4">
                {[
                  "Gazebos privativos com sofás",
                  "Área de areia branca relaxante",
                  "Decoração artística e local",
                  "Sombra natural e brisa constante"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Wind size={18} className="text-amber" />
                    <span className="text-sm font-medium font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={sunsetLoungeExt} 
                  alt="Beach Lounge" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-6">
            O seu momento de paz espera por si
          </h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-body">
            Na Residencial Paraíso Bilene, o lazer é levado a sério. Venha descobrir os nossos recantos favoritos.
          </p>
          <a
            href="https://wa.me/258877302100"
            className="inline-block bg-amber text-accent-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-dark transition font-body"
          >
            Reservar Estadia
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Lazer;
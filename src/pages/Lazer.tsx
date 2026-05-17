"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Sun, Moon, Wind, Users, Sparkles } from "lucide-react";

const discoImg = "dyad-media://media/residencialparaisobilene/.dyad/media/86666666666666666666666666666670.png";
const patioNoite = "dyad-media://media/residencialparaisobilene/.dyad/media/86666666666666666666666666666667.png";

const Lazer = () => {
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
                  src={patioNoite} 
                  alt="Lounge Noturno" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disco & Entretenimento */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-amber mb-4">
                <Sun size={18} />
                <span className="text-xs font-bold uppercase tracking-widest font-body">Diversão Garantida</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Espaço Disco & Lounge</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                O nosso espaço interior oferece um ambiente vibrante com iluminação LED e som de alta qualidade, ideal para eventos privados ou momentos de descontração com amigos.
              </p>
              <div className="space-y-4">
                {[
                  "Iluminação LED atmosférica",
                  "Mobiliário confortável e moderno",
                  "Ambiente climatizado",
                  "Som de alta fidelidade"
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
                  src={discoImg} 
                  alt="Espaço Disco" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lazer;
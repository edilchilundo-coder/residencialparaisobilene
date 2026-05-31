import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Heart, Star, Shield, Users, CheckCircle2 } from "lucide-react";
import fachada from "@/assets/fachada.png";
import piscina from "@/assets/piscina.jpg";

const SobreNos = () => {
  return (
    <Layout>
      <PageHeader title="Sobre Nós" subtitle="Conheça a história por trás da Residencial Paraíso Bilene" />

      {/* História & Imagem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">A Nossa Missão</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-6">
                A Residencial Paraíso Bilene nasceu do sonho de criar um espaço onde famílias e casais possam desfrutar da beleza natural da Praia do Bilene com todo o conforto moderno. 
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body mb-8">
                Situados a apenas 2 minutos de carro da praia, oferecemos apartamentos T1 e T2 totalmente equipados, num ambiente seguro e acolhedor. O nosso compromisso é com a sua tranquilidade e satisfação.
              </p>
              <div className="space-y-4">
                {["Hospitalidade Moçambicana", "Conforto Moderno", "Segurança 24h", "Localização Privilegiada"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber" size={20} />
                    <span className="font-bold text-sm uppercase tracking-wider font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <img src={fachada} alt="Fachada Residencial Paraíso" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 z-0 hidden sm:block">
                <img src={piscina} alt="Piscina Residencial" className="rounded-sm shadow-xl border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Paixão", desc: "Cada detalhe é pensado para que a sua estadia seja memorável." },
              { icon: Star, title: "Qualidade", desc: "Apartamentos modernos que superam as expectativas." },
              { icon: Shield, title: "Confiança", desc: "Vigilância 24 horas para a sua total tranquilidade." },
              { icon: Users, title: "Dedicação", desc: "Uma equipa focada em tornar cada momento especial." },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-card border border-border text-center group hover:border-amber transition-colors">
                <item.icon className="text-amber mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-foreground mb-2 font-body uppercase tracking-widest text-sm">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-6">
            Pronto para viver esta experiência?
          </h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-body">
            Estamos à sua espera para lhe proporcionar os melhores dias na Praia do Bilene.
          </p>
          <a
            href="https://wa.me/258877302100"
            className="inline-block bg-amber text-accent-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-dark transition font-body"
          >
            Falar com a Equipa
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNos;
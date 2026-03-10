import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Heart, Star, Shield, Users } from "lucide-react";

const SobreNos = () => {
  return (
    <Layout>
      <PageHeader title="Sobre Nós" subtitle="Conheça a história por trás do ParaísoBilene" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">A Nossa Missão</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body">
              O ParaísoBilene nasceu do sonho de criar um espaço onde famílias e casais possam desfrutar da beleza natural da Praia do Bilene com todo o conforto moderno. Situados a apenas 2 minutos de carro da praia, oferecemos apartamentos T1 e T2 totalmente equipados, num ambiente seguro e acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Heart, title: "Paixão pela Hospitalidade", desc: "Cada detalhe é pensado para que a sua estadia seja verdadeiramente memorável." },
              { icon: Star, title: "Qualidade Premium", desc: "Apartamentos modernos e bem equipados que superam as expectativas." },
              { icon: Shield, title: "Segurança e Confiança", desc: "Vigilância 24 horas e um ambiente familiar para a sua tranquilidade." },
              { icon: Users, title: "Atendimento Personalizado", desc: "Uma equipa dedicada a tornar cada momento especial." },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-secondary border border-border">
                <item.icon className="text-amber mb-4" size={32} />
                <h4 className="font-bold text-foreground mb-2 font-body">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-4">
              Venha Conhecer o Nosso Paraíso
            </h3>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto font-body">
              Estamos prontos para recebê-lo e proporcionar a melhor experiência na Praia do Bilene.
            </p>
            <a
              href="https://wa.me/258877302100"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-dark-deeper transition font-body"
            >
              Fale Connosco
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNos;

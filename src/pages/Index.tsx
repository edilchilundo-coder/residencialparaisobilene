import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import { Home, UtensilsCrossed, Waves, Shield, Car, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="h-screen flex items-center pt-16 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-amber font-semibold tracking-[0.2em] uppercase text-sm mb-4 block font-body">
            Luxury Hotel & Best Resort
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            O Seu Refúgio Perfeito <br className="hidden sm:block" /> na Praia do Bilene
          </h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light font-body">
            Descubra um espaço de conforto e hospitalidade a apenas 2 minutos de carro da praia. Apartamentos T1 e T2 equipados para si e para a sua família.
          </p>
          <a
            href="https://wa.me/258877302100"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-accent-foreground px-8 py-4 transition font-semibold text-lg font-body"
          >
            Reservar com Desconto
          </a>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="section-dark py-4">
        <div className="container mx-auto px-6 text-center flex flex-col md:flex-row justify-center items-center gap-4">
          <span className="bg-amber text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse font-body text-accent-foreground">
            Oferta Limitada
          </span>
          <p className="font-medium text-sm md:text-base font-body">
            Estadia Premium: de <del className="text-muted-foreground">8.500 MT</del> por apenas{" "}
            <span className="text-amber font-bold text-lg">6.500 MT / noite</span>.
          </p>
        </div>
      </div>

      {/* Apartments Section */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground mb-4">Acomodações Premium</h2>
          <p className="text-muted-foreground mb-16 font-body">
            Escolha entre os nossos espaçosos Apartamentos T1 ou T2, ambos concebidos para um conforto absoluto.
          </p>

          <div className="bg-card p-6 sm:p-8 shadow-xl border border-border text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 border-b border-border pb-8">
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

            <div className="flex flex-col sm:flex-row justify-between items-center section-dark p-6 sm:p-8 relative overflow-hidden gap-6">
              <div className="absolute top-0 right-0 bg-amber text-xs font-bold px-4 py-1 rounded-bl-lg uppercase font-body text-accent-foreground">
                Promoção Ativa
              </div>
              <div className="pt-4 sm:pt-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1 font-body">Tarifa Promocional</p>
                <div className="flex items-end gap-3 flex-wrap">
                  <p className="text-3xl sm:text-4xl font-bold text-amber">
                    6.500 MT <span className="text-sm font-normal text-muted-foreground">/ noite</span>
                  </p>
                  <p className="text-lg text-muted-foreground line-through mb-1 font-body">8.500 MT</p>
                </div>
              </div>
              <a
                href="https://wa.me/258877302100"
                className="bg-amber hover:bg-amber-dark px-8 py-4 font-semibold transition text-lg shadow-lg font-body text-accent-foreground whitespace-nowrap"
              >
                Garantir a Minha Reserva
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Porquê Escolher-nos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Waves, title: "Piscina Comum", desc: "Área de lazer exclusiva para hóspedes relaxarem após a praia." },
              { icon: Shield, title: "Segurança 24h", desc: "Tranquilidade garantida com vigilância permanente no recinto." },
              { icon: Car, title: "Estacionamento", desc: "Lugar reservado e seguro para o seu veículo dentro da propriedade." },
              { icon: Users, title: "Hospitalidade", desc: "Uma equipa dedicada para tornar a sua estadia inesquecível." },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-primary-foreground/10">
                <item.icon className="mx-auto text-amber mb-4" size={40} />
                <h5 className="font-bold mb-2 font-body">{item.title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Reserve Agora e Poupe 24%
          </h3>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto font-body">
            Aproveite a nossa tarifa promocional e garanta momentos inesquecíveis na Praia do Bilene.
          </p>
          <a
            href="https://wa.me/258877302100"
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

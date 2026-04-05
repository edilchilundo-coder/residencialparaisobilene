import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import bilenePraia from "@/assets/bilene-praia.jpg";
import cozinha from "@/assets/cozinha.jpg";
import sala from "@/assets/sala.jpg";
import fachada from "@/assets/fachada.png";
import salaAmpla from "@/assets/sala-ampla.jpg";
import piscina from "@/assets/piscina.jpg";
import { Home, UtensilsCrossed, Waves, Shield, Car, Users, Ship, ChefHat, Bike, Sun, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* Gallery Preview - O Nosso Paraíso */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">O Nosso Paraíso</h2>
            <div className="w-20 h-1 bg-amber mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 gallery-item">
              <img src={fachada} alt="Fachada do Aparthotel" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="gallery-item h-48 md:h-auto">
              <img src={salaAmpla} alt="Sala de Estar" className="w-full h-full object-cover" loading="lazy" />
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

          {/* Google Maps Street View */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <MapPin className="text-amber" size={28} />
              <h3 className="text-2xl font-bold text-foreground">Localização & Street View</h3>
            </div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl rounded-sm mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCIHM0ogKEICAgIDWyeCyiwE!2m2!1d-25.2795538!2d33.2490682!3f149.89!4f0!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Residencial Paraíso Bilene - Street View"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1791.2!2d33.2490682!3d-25.2795538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee129cde071581b%3A0x780ff448817554!2sResidencial%20Para%C3%ADso%20Bilene!5e0!3m2!1spt-PT!2smz!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Residencial Paraíso Bilene - Mapa"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/rskhHsLuzh8VC9Z2A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-semibold transition font-body"
              >
                <MapPin size={18} />
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/galeria" className="inline-block border-b-2 border-amber pb-1 font-bold text-foreground hover:text-amber transition font-body">
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Experiências Memoráveis */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Experiências Memoráveis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Ship, title: "Passeios de Barco", desc: "Lagoa do Bilene" },
              { icon: ChefHat, title: "Gastronomia", desc: "Frutos do Mar Frescos" },
              { icon: Bike, title: "Quad Biking", desc: "Aventura nas Dunas" },
              { icon: Sun, title: "Sunset Lounge", desc: "Música e Drinks" },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 bg-card shadow-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber transition-colors duration-300">
                  <item.icon className="text-amber group-hover:text-accent-foreground transition-colors" size={28} />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-body">{item.desc}</p>
              </div>
            ))}
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

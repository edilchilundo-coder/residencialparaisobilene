import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contactos = () => {
  return (
    <Layout>
      <PageHeader title="Contactos" subtitle="Estamos aqui para ajudá-lo a planear a sua estadia perfeita" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Entre em Contacto</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground font-body">Telefone</h4>
                    <a href="tel:+258877302100" className="text-muted-foreground hover:text-amber transition font-body">+258 877 302 100</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground font-body">Email</h4>
                    <a href="mailto:info@paraisobilene.com" className="text-muted-foreground hover:text-amber transition font-body">info@paraisobilene.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground font-body">Localização</h4>
                    <p className="text-muted-foreground font-body">Praia do Bilene, Gaza, Moçambique</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground font-body">Horário</h4>
                    <p className="text-muted-foreground font-body">Check-in: 14h00 | Check-out: 11h00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/258877302100"
                  className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-accent-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest transition font-body"
                >
                  <MessageCircle size={18} /> Contactar via WhatsApp
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-secondary rounded-sm overflow-hidden shadow-lg min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="mx-auto text-amber mb-4" size={48} />
                <h4 className="font-bold text-foreground text-xl mb-2">Praia do Bilene</h4>
                <p className="text-muted-foreground font-body text-sm">
                  Gaza, Moçambique<br />
                  A apenas 2 minutos de carro da praia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactos;

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
            <div className="rounded-sm overflow-hidden shadow-lg min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5!2d33.2458!3d-25.4574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee4215c3b5e4e5d%3A0x0!2sResidencial%20Para%C3%ADso%20Bilene!5e0!3m2!1spt-PT!2smz!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Residencial Paraíso Bilene - Mapa"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactos;

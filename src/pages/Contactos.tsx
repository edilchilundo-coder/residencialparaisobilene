import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contactos = () => {
  const whatsappMsg = encodeURIComponent("Olá! Gostaria de saber mais sobre a disponibilidade e reservas na Residencial Paraíso Bilene.");

  return (
    <Layout>
      <PageHeader title="Contactos" subtitle="Estamos aqui para ajudá-lo a planear a sua estadia perfeita" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
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
                  href={`https://wa.me/258877302100?text=${whatsappMsg}`}
                  className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-accent-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest transition font-body"
                >
                  <MessageCircle size={18} /> Contactar via WhatsApp
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-sm overflow-hidden shadow-lg min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1710345678901!6m8!1m7!1sCAoSLEFGMVFpcE9QZzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVf!2m2!1d-25.2795538!2d33.2490682!3f0!4f0!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Residencial Paraíso Bilene - Street View"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <HelpCircle className="text-amber" size={28} />
              <h2 className="text-3xl font-bold text-foreground">Perguntas Frequentes</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-body font-semibold">Qual é a distância da praia?</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Estamos localizados a apenas 2 minutos de carro da praia principal do Bilene, oferecendo um equilíbrio perfeito entre proximidade e tranquilidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-body font-semibold">Os apartamentos têm cozinha?</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Sim, todos os nossos apartamentos (T1 e T2) possuem cozinhas totalmente equipadas com fogão, frigorífico e utensílios básicos para a sua conveniência.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-body font-semibold">Existe estacionamento seguro?</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Sim, oferecemos estacionamento privado e seguro dentro do recinto da Residencial, com vigilância 24 horas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-body font-semibold">A piscina é comum ou privada?</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  A piscina é uma área de lazer comum, exclusiva para os hóspedes da Residencial Paraíso Bilene.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactos;
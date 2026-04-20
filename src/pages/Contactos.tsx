"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle, Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contactos = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const { error } = await supabase
       .from("contact_messages" as any)
       .insert([data as any]);

      if (error) throw error;

      toast.success("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    }
  };

  const whatsappMsg = encodeURIComponent("Olá! Gostaria de saber mais sobre a disponibilidade e reservas na Residencial Paraíso Bilene.");

  return (
    <Layout>
      <PageHeader title="Contactos" subtitle="Estamos aqui para ajudá-lo a planear a sua estadia perfeita" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24">
            {/* Contact Form */}
            <div className="bg-secondary p-8 sm:p-10 shadow-sm border border-border">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest font-body">Nome Completo</label>
                    <input 
                      {...register("name")}
                      className="w-full p-3 bg-white border border-border focus:border-amber outline-none transition font-body text-sm"
                      placeholder="Ex: João Silva"
                    />
                    {errors.name && <p className="text-destructive text-xs font-body">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest font-body">Email</label>
                    <input 
                      {...register("email")}
                      className="w-full p-3 bg-white border border-border focus:border-amber outline-none transition font-body text-sm"
                      placeholder="joao@email.com"
                    />
                    {errors.email && <p className="text-destructive text-xs font-body">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest font-body">Assunto</label>
                  <input 
                    {...register("subject")}
                    className="w-full p-3 bg-white border border-border focus:border-amber outline-none transition font-body text-sm"
                    placeholder="Ex: Reserva para Agosto"
                  />
                  {errors.subject && <p className="text-destructive text-xs font-body">{errors.subject.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest font-body">Mensagem</label>
                  <textarea 
                    {...register("message")}
                    rows={5}
                    className="w-full p-3 bg-white border border-border focus:border-amber outline-none transition font-body text-sm resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                  {errors.message && <p className="text-destructive text-xs font-body">{errors.message.message}</p>}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-amber text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : <><Send size={18} /> Enviar Mensagem</>}
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Informações</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-body text-sm">Telefone</h4>
                      <a href="tel:+258877302100" className="text-muted-foreground hover:text-amber transition font-body text-sm">+258 87 730 2100</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-body text-sm">Email</h4>
                      <a href="mailto:info@paraisobilene.com" className="text-muted-foreground hover:text-amber transition font-body text-sm">info@paraisobilene.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-body text-sm">Localização</h4>
                      <p className="text-muted-foreground font-body text-sm">Praia do Bilene, Gaza, Moçambique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-body text-sm">Horário</h4>
                      <p className="text-muted-foreground font-body text-sm">Check-in: 14h | Check-out: 11h</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    href={`https://wa.me/258877302100?text=${whatsappMsg}`}
                    className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-bold text-sm uppercase tracking-widest transition font-body border-b-2 border-amber pb-1"
                  >
                    <MessageCircle size={18} /> Contactar via WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-sm overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1710345678901!6m8!1m7!1sCAoSLEFGMVFpcE9QZzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVfXzVf!2m2!1d-25.2795538!2d33.2490682!3f0!4f0!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Residencial Paraíso Bilene - Street View"
                />
              </div>
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
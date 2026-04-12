"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { User, Phone, Send, Calendar as CalendarIcon } from "lucide-react";

const bookingSchema = z.object({
  guest_name: z.string().min(3, "Nome muito curto"),
  guest_phone: z.string().min(9, "Telefone inválido"),
  check_in: z.string().min(1, "Data de check-in obrigatória"),
  check_out: z.string().min(1, "Data de check-out obrigatória"),
  apartment_type: z.string(),
});

type BookingValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    check_in: string;
    check_out: string;
    apartment_type: string;
  };
}

const BookingModal = ({ isOpen, onClose, initialData }: BookingModalProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    values: {
      ...initialData,
      // Garante que se vier vazio do Index, o formulário ainda possa ser preenchido
      check_in: initialData.check_in || "",
      check_out: initialData.check_out || "",
    },
  });

  const onSubmit = async (data: BookingValues) => {
    try {
      const { error } = await supabase.from("bookings").insert([data]);
      
      if (error) {
        console.error("Erro Supabase:", error);
        throw new Error(error.message);
      }

      const msg = `Olá! Acabei de solicitar uma reserva pelo site:\n👤 Nome: ${data.guest_name}\n📞 Tel: ${data.guest_phone}\n🏠 Tipo: Apartamento ${data.apartment_type}\n📅 Check-in: ${data.check_in}\n📅 Check-out: ${data.check_out}`;
      
      toast.success("Solicitação registada com sucesso!");
      
      setTimeout(() => {
        window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
        onClose();
      }, 1000);
    } catch (error: any) {
      toast.error(`Erro ao processar: ${error.message || "Verifique a ligação à base de dados"}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-display">Finalizar Solicitação</DialogTitle>
          <DialogDescription className="font-body">
            Preencha os seus dados para confirmarmos a disponibilidade.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <User size={14} className="text-amber" /> Nome Completo
            </label>
            <input 
              {...register("guest_name")}
              className="w-full p-3 bg-secondary border border-border focus:border-amber outline-none text-sm"
              placeholder="Seu nome"
            />
            {errors.guest_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.guest_name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Phone size={14} className="text-amber" /> Telefone / WhatsApp
            </label>
            <input 
              {...register("guest_phone")}
              className="w-full p-3 bg-secondary border border-border focus:border-amber outline-none text-sm"
              placeholder="Ex: +258 87..."
            />
            {errors.guest_phone && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.guest_phone.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <CalendarIcon size={14} className="text-amber" /> Check-in
              </label>
              <input 
                type="date"
                {...register("check_in")}
                className="w-full p-3 bg-secondary border border-border focus:border-amber outline-none text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <CalendarIcon size={14} className="text-amber" /> Check-out
              </label>
              <input 
                type="date"
                {...register("check_out")}
                className="w-full p-3 bg-secondary border border-border focus:border-amber outline-none text-sm"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-amber text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? "Processando..." : <><Send size={18} /> Solicitar Reserva</>}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  roomData: {
    id: string;
    name: string;
    price: number;
  };
  dates: {
    checkIn: string;
    checkOut: string;
  };
}

const BookingDialog = ({ isOpen, onClose, roomData, dates }: BookingDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Salvar na base de dados como pendente
      const { error } = await supabase
        .from('reservations')
        .insert([{
          room_id: roomData.id,
          check_in: dates.checkIn,
          check_out: dates.checkOut,
          guest_name: formData.name,
          guest_phone: formData.phone,
          guest_email: formData.email,
          status: 'pending'
        }]);

      if (error) throw error;

      // 2. Preparar mensagem WhatsApp
      const msg = `*Nova Solicitação de Reserva*\n\n` +
                  `🏠 *Acomodação:* ${roomData.name}\n` +
                  `📅 *Check-in:* ${dates.checkIn}\n` +
                  `📅 *Check-out:* ${dates.checkOut}\n\n` +
                  `👤 *Cliente:* ${formData.name}\n` +
                  `📞 *Contacto:* ${formData.phone}\n` +
                  `📧 *Email:* ${formData.email}\n\n` +
                  `Gostaria de confirmar a disponibilidade e proceder com o pagamento.`;

      window.open(`https://wa.me/258877302100?text=${encodeURIComponent(msg)}`, "_blank");
      
      toast.success("Solicitação enviada! Redirecionando para o WhatsApp...");
      onClose();
    } catch (error) {
      console.error("Erro ao processar reserva:", error);
      toast.error("Erro ao processar solicitação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Finalizar Reserva</DialogTitle>
          <DialogDescription className="font-body">
            Preencha os seus dados para enviarmos a solicitação da <strong>{roomData.name}</strong>.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">Nome Completo</Label>
            <Input 
              id="name" 
              required 
              placeholder="Ex: João Silva"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="font-body"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest">Telefone / WhatsApp</Label>
            <Input 
              id="phone" 
              required 
              placeholder="+258 ..."
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="font-body"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">Email (Opcional)</Label>
            <Input 
              id="email" 
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="font-body"
            />
          </div>

          <DialogFooter className="pt-4">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-amber hover:bg-amber-dark text-accent-foreground font-bold uppercase tracking-widest py-6"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" size={18} />}
              Confirmar via WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
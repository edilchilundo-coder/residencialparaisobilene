"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  LayoutDashboard, 
  CalendarCheck, 
  MessageSquare, 
  LogOut, 
  CheckCircle, 
  XCircle, 
  Clock,
  User,
  Phone
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Admin = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }
      fetchData();
    };

    checkUser();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [bookingsRes, messagesRes] = await Promise.all([
      supabase.from("bookings").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false })
    ]);

    if (bookingsRes.data) setBookings(bookingsRes.data);
    if (messagesRes.data) setMessages(messagesRes.data);
    setLoading(false);
  };

  const updateBookingStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Erro ao atualizar estado");
    } else {
      toast.success(`Reserva ${status}`);
      fetchData();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-secondary min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h1 className="text-4xl font-bold font-display flex items-center gap-3">
                <LayoutDashboard className="text-amber" /> Painel de Gestão
              </h1>
              <p className="text-muted-foreground font-body">Bem-vindo à área de administração da Residencial Paraíso.</p>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white border border-border px-4 py-2 text-sm font-bold hover:bg-destructive hover:text-white transition"
            >
              <LogOut size={16} /> Sair
            </button>
          </div>

          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="bg-white border border-border p-1 mb-8">
              <TabsTrigger value="bookings" className="flex items-center gap-2 px-6">
                <CalendarCheck size={18} /> Reservas
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center gap-2 px-6">
                <MessageSquare size={18} /> Mensagens
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <div className="grid grid-cols-1 gap-6">
                {bookings.length === 0 ? (
                  <div className="bg-white p-12 text-center border border-border">
                    <p className="text-muted-foreground">Nenhuma reserva encontrada.</p>
                  </div>
                ) : (
                  bookings.map((booking) => (
                    <div key={booking.id} className="bg-white p-6 border border-border shadow-sm flex flex-col md:flex-row justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                            booking.status === 'confirmado' ? 'bg-green-100 text-green-700' : 
                            booking.status === 'cancelado' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {booking.status}
                          </span>
                          <span className="text-xs text-muted-foreground font-body">
                            Solicitado em: {new Date(booking.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold font-display flex items-center gap-2">
                          <User size={18} className="text-amber" /> {booking.guest_name}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-body">
                          <p className="flex items-center gap-2"><Phone size={14} /> {booking.guest_phone}</p>
                          <p className="flex items-center gap-2 font-bold text-amber">Apartamento {booking.apartment_type}</p>
                          <p className="flex items-center gap-2"><Clock size={14} /> Check-in: {booking.check_in}</p>
                          <p className="flex items-center gap-2"><Clock size={14} /> Check-out: {booking.check_out}</p>
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-end gap-2">
                        {booking.status === 'pendente' && (
                          <>
                            <button 
                              onClick={() => updateBookingStatus(booking.id, 'confirmado')}
                              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition"
                            >
                              <CheckCircle size={14} /> Confirmar
                            </button>
                            <button 
                              onClick={() => updateBookingStatus(booking.id, 'cancelado')}
                              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition"
                            >
                              <XCircle size={14} /> Cancelar
                            </button>
                          </>
                        )}
                        <a 
                          href={`https://wa.me/${booking.guest_phone.replace(/\s/g, '')}`}
                          target="_blank"
                          className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-amber transition"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="messages">
              <div className="grid grid-cols-1 gap-6">
                {messages.length === 0 ? (
                  <div className="bg-white p-12 text-center border border-border">
                    <p className="text-muted-foreground">Nenhuma mensagem encontrada.</p>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} className="bg-white p-6 border border-border shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg font-display">{msg.subject}</h3>
                          <p className="text-sm text-amber font-body">{msg.name} ({msg.email})</p>
                        </div>
                        <span className="text-xs text-muted-foreground font-body">
                          {new Date(msg.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed bg-secondary p-4 border-l-4 border-amber">
                        {msg.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
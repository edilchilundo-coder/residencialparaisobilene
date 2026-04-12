-- Tabela para mensagens de contacto
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir inserção pública" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir leitura apenas para admin" ON public.contact_messages FOR SELECT TO authenticated USING (true);

-- Tabela para solicitações de reserva
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  apartment_type TEXT NOT NULL, -- 'T1' ou 'T2'
  guest_name TEXT NOT NULL,
  guest_phone TEXT NOT NULL,
  status TEXT DEFAULT 'pendente', -- 'pendente', 'confirmado', 'cancelado'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir inserção pública de reservas" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir leitura/escrita para admin" ON public.bookings FOR ALL TO authenticated USING (true);
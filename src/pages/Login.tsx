"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/admin");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-secondary py-20 px-6">
        <div className="w-full max-w-md bg-white p-8 shadow-xl border border-border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold font-display">Área Administrativa</h1>
            <p className="text-muted-foreground text-sm font-body">Inicie sessão para gerir as suas reservas</p>
          </div>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#f59e0b',
                    brandAccent: '#d97706',
                  }
                }
              }
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Endereço de Email',
                  password_label: 'Palavra-passe',
                  button_label: 'Entrar',
                }
              }
            }}
            theme="light"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
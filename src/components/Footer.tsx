import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-darker py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold tracking-wider mb-4 inline-block">
              <span className="text-primary-foreground">RESIDENCIAL PARAÍSO</span>
              <span className="text-amber">BILENE</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O seu refúgio de luxo na Praia do Bilene. Apartamentos T1 e T2 totalmente equipados a apenas 2 minutos da praia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm tracking-widest uppercase font-body">Navegação</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: t('nav.home'), path: "/" },
                { label: t('nav.apartments'), path: "/acomodacoes" },
                { label: t('nav.restaurant'), path: "/restaurante" },
                { label: t('nav.gallery'), path: "/galeria" },
                { label: t('nav.blog'), path: "/blog" },
                { label: t('nav.contacts'), path: "/contactos" },
                { label: t('nav.about'), path: "/sobre-nos" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-muted-foreground text-sm hover:text-amber transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm tracking-widest uppercase font-body">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+258877302100" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-amber transition-colors">
                <Phone size={16} className="text-amber" /> +258 87 730 2100
              </a>
              <a href="mailto:info@paraisobilene.com" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-amber transition-colors">
                <Mail size={16} className="text-amber" /> info@paraisobilene.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-amber mt-0.5 shrink-0" /> Praia do Bilene, Gaza, Moçambique
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Residencial Paraíso Bilene. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
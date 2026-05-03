import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "APARTAMENTOS", path: "/apartamentos" },
  { label: "GALERIA", path: "/galeria" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACTOS", path: "/contactos" },
  { label: "SOBRE NÓS", path: "/sobre-nos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-border py-2 shadow-sm" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start group">
          <div className={cn(
            "text-lg sm:text-xl font-bold tracking-[0.2em] transition-colors",
            scrolled || location.pathname !== "/" ? "text-primary" : "text-white"
          )}>
            RESIDENCIAL PARAÍSO
          </div>
          <div className="text-amber text-[10px] font-bold tracking-[0.4em] -mt-1">
            BILENE
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] font-bold tracking-[0.2em] transition-all hover:text-amber relative py-2",
                scrolled || location.pathname !== "/" ? "text-primary/70" : "text-white/80",
                location.pathname === link.path && "text-amber"
              )}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="tel:+258877302100" 
            className={cn(
              "flex items-center gap-2 text-[10px] font-bold tracking-widest transition-colors",
              scrolled || location.pathname !== "/" ? "text-primary" : "text-white"
            )}
          >
            <Phone size={14} className="text-amber" /> +258 87 730 2100
          </a>
          <a
            href="https://wa.me/258877302100"
            className="bg-amber hover:bg-amber-dark text-accent-foreground px-8 py-3 text-[10px] font-bold tracking-[0.2em] transition-all shadow-lg hover:scale-105"
          >
            RESERVAR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled || location.pathname !== "/" ? "text-primary" : "text-white"
          )}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-primary z-[-1] lg:hidden transition-transform duration-500 ease-in-out pt-24",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-xl font-bold tracking-widest py-2 border-b border-white/10",
                location.pathname === link.path ? "text-amber" : "text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/258877302100"
            className="bg-amber text-accent-foreground px-6 py-4 text-sm font-bold tracking-widest text-center mt-4"
          >
            RESERVAR AGORA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
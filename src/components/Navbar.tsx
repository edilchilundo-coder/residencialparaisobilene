import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "APARTAMENTOS", path: "/apartamentos" },
  { label: "GALERIA", path: "/galeria" },
  { label: "CONTACTOS", path: "/contactos" },
  { label: "SOBRE NÓS", path: "/sobre-nos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 text-lg sm:text-xl font-bold tracking-wider">
          <span className="text-primary-foreground">RESIDENCIAL PARAÍSO</span>
          <span className="text-amber">BILENE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-semibold tracking-widest transition-colors ${
                location.pathname === link.path
                  ? "text-primary-foreground border-b-2 border-amber pb-1"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/258877302100"
          className="hidden lg:inline-block bg-primary-foreground text-primary px-6 py-2 text-xs font-bold tracking-widest hover:bg-amber hover:text-accent-foreground transition-colors"
        >
          RESERVAR
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold tracking-widest py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-amber"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/258877302100"
              className="bg-amber text-accent-foreground px-6 py-3 text-xs font-bold tracking-widest text-center hover:bg-amber-dark transition-colors mt-2"
            >
              RESERVAR
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
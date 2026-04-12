import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Camera, MapPin } from "lucide-react";
import bilenePraia from "@/assets/bilene-praia.jpg";
import cozinha from "@/assets/cozinha.jpg";
import sala from "@/assets/sala.jpg";
import fachada from "@/assets/fachada.png";
import salaAmpla from "@/assets/sala-ampla.jpg";
import piscina from "@/assets/piscina.jpg";
import piscinaNoite1 from "@/assets/piscina-noite-1.jpg";
import piscinaNoite2 from "@/assets/piscina-noite-2.jpg";
import sunsetLoungeExt from "@/assets/sunset-lounge-exterior.webp";
import quadBikingImg from "@/assets/quad-biking.jpg";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import passeiosBarcoImg from "@/assets/passeios-barco.jpg";
import quartoT1 from "@/assets/quarto-t1.jpg";
import quartoT2 from "@/assets/quarto-t2.jpg";

const galleryImages = [
  { src: fachada, alt: "Fachada do Aparthotel", span: "md:col-span-2 md:row-span-2" },
  { src: passeiosBarcoImg, alt: "Passeios de Barco na Lagoa", span: "" },
  { src: gastronomiaImg, alt: "Gastronomia Local - Camarões", span: "" },
  { src: quadBikingImg, alt: "Aventura de Buggy nas Dunas", span: "" },
  { src: quartoT1, alt: "Quarto Apartamento T1", span: "" },
  { src: quartoT2, alt: "Quarto Apartamento T2", span: "" },
  { src: sunsetLoungeExt, alt: "Sunset Lounge Exterior", span: "" },
  { src: piscinaNoite1, alt: "Piscina Iluminada à Noite", span: "" },
  { src: piscinaNoite2, alt: "Área de Lazer Noturna", span: "" },
  { src: salaAmpla, alt: "Sala de Estar Ampla", span: "" },
  { src: piscina, alt: "Área da Piscina de Dia", span: "" },
  { src: cozinha, alt: "Cozinha Equipada", span: "" },
  { src: sala, alt: "Sala com TV", span: "" },
  { src: bilenePraia, alt: "Praia do Bilene", span: "md:col-span-2" },
];

const Galeria = () => {
  return (
    <Layout>
      <PageHeader title="Explore o Paraíso" subtitle="Conheça cada detalhe do nosso espaço, desde os interiores modernos até à nossa área de lazer" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground">
              <Camera size={20} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Galeria de Fotos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {galleryImages.map((img) => (
              <div key={img.alt} className={`gallery-item ${img.span} h-48 sm:h-auto ${img.span ? "sm:h-full" : "sm:h-48"}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground">
              <MapPin size={20} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Localização & Street View</h3>
          </div>
          <div className="rounded-sm overflow-hidden shadow-2xl min-h-[400px] w-full">
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
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/rskhHsLuzh8VC9Z2A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-semibold transition font-body"
            >
              <MapPin size={18} />
              Ver no Google Maps
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Galeria;
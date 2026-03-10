import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Camera, Play } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", alt: "Vista Geral", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600", alt: "Quarto", span: "" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600", alt: "Praia", span: "" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600", alt: "Piscina", span: "" },
  { src: "https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?auto=format&fit=crop&w=600", alt: "Sala", span: "" },
];

const Galeria = () => {
  return (
    <Layout>
      <PageHeader title="Explore o Paraíso" subtitle="Conheça cada detalhe do nosso espaço, desde os interiores modernos até à nossa área de lazer" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Gallery Photos */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground">
              <Camera size={20} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Galeria de Fotos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {galleryImages.map((img) => (
              <div key={img.alt} className={`gallery-item ${img.span} h-48 sm:h-auto ${img.span ? "sm:h-full" : "sm:h-48"}`}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-accent-foreground">
              <Play size={20} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Vídeo de Apresentação</h3>
          </div>
          <div className="relative w-full aspect-video overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920"
              className="w-full h-full object-cover"
              alt="Vídeo Preview"
            />
            <div className="absolute inset-0 bg-primary/50 flex items-center justify-center group-hover:bg-primary/30 transition duration-500">
              <button className="w-20 h-20 sm:w-24 sm:h-24 bg-amber text-accent-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300">
                <Play size={36} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Galeria;

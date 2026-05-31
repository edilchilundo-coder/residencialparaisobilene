import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Ship, ChefHat, Bike, Sun, ArrowRight } from "lucide-react";
import sunsetLoungeExt from "@/assets/sunset-lounge-exterior.webp";
import quadBikingImg from "@/assets/quad-biking.jpg";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import passeiosBarcoImg from "@/assets/passeios-barco.jpg";

const blogPosts = [
  {
    id: "passeios-de-barco",
    title: "Passeios de Barco: Descubra a Magia da Lagoa",
    category: "Atividades",
    icon: Ship,
    image: passeiosBarcoImg,
    excerpt: "Explore as águas cristalinas da Lagoa do Bilene e visite as praias desertas do outro lado. Uma experiência imperdível para toda a família.",
    content: "A Lagoa do Bilene é famosa pelas suas águas calmas e transparentes. Os passeios de barco permitem chegar a locais exclusivos, como a abertura da lagoa para o mar, onde o encontro das águas cria um cenário deslumbrante. É o local ideal para snorkeling e piqueniques memoráveis."
  },
  {
    id: "gastronomia-local",
    title: "Gastronomia: O Sabor Autêntico do Mar",
    category: "Culinária",
    icon: ChefHat,
    image: gastronomiaImg,
    excerpt: "Dos camarões grelhados à famosa matapa com mariscos. Saiba onde encontrar os melhores frutos do mar frescos do Bilene.",
    content: "A culinária do Bilene é uma celebração do Oceano Índico. Os pescadores locais trazem diariamente o melhor que o mar oferece. Recomendamos vivamente experimentar o peixe da época grelhado na brasa, acompanhado por arroz de coco, uma iguaria que define a hospitalidade moçambicana."
  },
  {
    id: "quad-biking",
    title: "Quad Biking: Adrenalina nas Dunas Brancas",
    category: "Aventura",
    icon: Bike,
    image: quadBikingImg,
    excerpt: "Sinta a liberdade ao percorrer as dunas de areia branca em moto-quatro. Uma aventura emocionante com vistas panorâmicas sobre o oceano.",
    content: "Para os amantes de aventura, o Quad Biking é a forma perfeita de explorar a geografia única do Bilene. Com guias experientes, poderá percorrer trilhos que levam a miradouros escondidos no topo das dunas, oferecendo uma vista de 360 graus sobre a lagoa e o mar."
  },
  {
    id: "sunset-lounge",
    title: "Sunset Lounge: Onde o Dia se Encontra com a Noite",
    category: "Lazer",
    icon: Sun,
    image: sunsetLoungeExt,
    excerpt: "Relaxe com música ambiente e cocktails refrescantes enquanto assiste ao pôr do sol mais bonito de Moçambique.",
    content: "Não há melhor forma de terminar o dia do que num dos lounges à beira da lagoa. Com uma seleção de bebidas premium e uma atmosfera descontraída, o pôr do sol no Bilene transforma-se num espetáculo de cores quentes que convida à celebração e ao convívio."
  }
];

const Blog = () => {
  return (
    <Layout>
      <PageHeader title="Blog do Paraíso" subtitle="Dicas e experiências para tornar a sua estadia inesquecível" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4 text-amber">
                    <post.icon size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest font-body">Experiência Bilene</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-amber transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-body">Leitura de 3 min</span>
                    <button className="text-amber font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Ler Mais <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Quer receber mais dicas do Bilene?</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto font-body">
            Siga-nos nas redes sociais ou entre em contacto para planearmos as suas atividades durante a estadia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/258877302100" className="bg-amber hover:bg-amber-dark text-accent-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm transition">
              Falar com a Equipa
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
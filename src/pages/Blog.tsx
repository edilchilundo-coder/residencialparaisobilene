"use client";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Ship, ChefHat, Bike, Sun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sunsetLoungeExt from "@/assets/sunset-lounge-exterior.webp";
import quadBikingImg from "@/assets/quad-biking.jpg";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import { blogPosts } from "./BlogData";

const Blog = () => {
  return (
    <Layout>
      <PageHeader title="Blog do Paraíso" subtitle="Dicas e experiências para tornar a sua estadia inesquecível" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <Link to={`/blog/${post.id}`} className="block relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4 text-amber">
                    <post.icon size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest font-body">Experiência Bilene</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-amber transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-body">Leitura de 3 min</span>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-amber font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Ler Mais <ArrowRight size={16} />
                    </Link>
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
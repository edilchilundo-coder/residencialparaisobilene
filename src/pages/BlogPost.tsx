"use client";

import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "./BlogData";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <Layout>
      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-amber font-bold text-xs uppercase tracking-widest mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-amber text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground text-xs font-body">
                <Calendar size={14} /> 15 de Março, 2024
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-between py-6 border-y border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <User size={20} className="text-amber" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Equipa Paraíso</p>
                  <p className="text-xs text-muted-foreground">Especialistas em Lazer</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-amber transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="aspect-video rounded-sm overflow-hidden mb-12 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none font-body text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium mb-8">
              {post.excerpt}
            </p>
            <div className="space-y-6">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-20 p-10 bg-secondary border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Gostou deste artigo?</h3>
            <p className="text-muted-foreground mb-8 font-body">
              Partilhe com os seus amigos ou reserve já a sua estadia para viver estas experiências pessoalmente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/258877302100" 
                className="bg-amber hover:bg-amber-dark text-accent-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm transition"
              >
                Reservar Agora
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
<?php get_header(); ?>
<section class="section text-center" style="min-height:60vh;display:flex;align-items:center">
    <div class="container">
        <span class="eyebrow">Erro 404</span>
        <h1 style="font-size:4rem;margin:1rem 0">Página não encontrada</h1>
        <p style="color:var(--muted);max-width:500px;margin:0 auto 2rem">A página que procura não existe ou foi movida. Volte ao início e continue a explorar o paraíso.</p>
        <a href="<?php echo esc_url( home_url('/') ); ?>" class="btn">Voltar ao Início</a>
    </div>
</section>
<?php get_footer(); ?>
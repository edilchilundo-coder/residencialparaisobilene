<?php
/**
 * Front page (Início) — demo homepage with hero, search, rooms, gallery, testimonials, blog highlights.
 * @package rpbilene
 */
get_header();
$img = RPBILENE_URI . '/assets/images';
?>

<!-- HERO -->
<section class="hero">
    <div class="hero-bg" style="background-image:url('<?php echo esc_url( $img . '/hero-real.jpg' ); ?>')"></div>
    <div class="hero-content">
        <h1><?php echo esc_html( rpbilene_get_option('rpb_hero_title','O seu refúgio à beira-mar') ); ?></h1>
        <p><?php echo esc_html( rpbilene_get_option('rpb_hero_sub','Apartamentos T1 e T2 totalmente equipados, a 2 minutos da praia mais bonita de Moçambique.') ); ?></p>

        <form class="search-bar" action="<?php echo esc_url( rpbilene_whatsapp_url() ); ?>" method="get" target="_blank" onsubmit="return rpbWaSearch(event)">
            <div class="field">
                <label>Check-in</label>
                <input type="date" id="rpb-checkin" required>
            </div>
            <div class="field">
                <label>Check-out</label>
                <input type="date" id="rpb-checkout" required>
            </div>
            <div class="field">
                <label>Tipologia</label>
                <select id="rpb-type">
                    <option value="Todos">Todos os tipos</option>
                    <option value="T1">Apartamento T1</option>
                    <option value="T2">Apartamento T2</option>
                    <option value="Quarto">Quarto Suite</option>
                </select>
            </div>
            <button type="submit" class="btn">🔍 Reservar</button>
        </form>
    </div>
</section>

<!-- FEATURES -->
<section class="section" style="background:#fff">
    <div class="container">
        <div class="grid grid-4">
            <?php
            $features = array(
                array('img'=>'sala-ampla.jpg',    'title'=>'Design Sofisticado',    'desc'=>'Espaços amplos com decoração contemporânea e o conforto de uma casa premium.'),
                array('img'=>'cozinha-2.jpg',     'title'=>'Cozinha Equipada',      'desc'=>'Apartamentos totalmente equipados para uma estadia independente e prática.'),
                array('img'=>'piscina-noite-3.jpg','title'=>'Lazer & Piscina',      'desc'=>'Piscina exterior, jardins tropicais e um pôr-do-sol inesquecível.'),
                array('img'=>'gastronomia.jpg',   'title'=>'Restaurante Próprio',  'desc'=>'Gastronomia local e internacional preparada por chefs da casa.'),
            );
            foreach ( $features as $f ): ?>
                <article class="feature-card">
                    <div class="img-wrap">
                        <img src="<?php echo esc_url( $img . '/' . $f['img'] ); ?>" alt="<?php echo esc_attr( $f['title'] ); ?>">
                        <span class="icon">★</span>
                    </div>
                    <h4><?php echo esc_html( $f['title'] ); ?></h4>
                    <p><?php echo esc_html( $f['desc'] ); ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ACCOMMODATIONS -->
<section class="section" style="background:var(--bg-soft)">
    <div class="container">
        <div class="section-title">
            <span class="eyebrow">Acomodações</span>
            <h2>Os Nossos Apartamentos</h2>
            <div class="divider"></div>
            <p>Escolha entre T1, T2 ou Quarto Suite, todos pensados para o conforto da sua família.</p>
        </div>

        <?php
        $rooms = array(
            array(
                'type'=>'T2','title'=>'Apartamento T2 Premium','price'=>'7 500',
                'img'=>'quarto-t2.jpg',
                'desc'=>'Dois quartos, sala ampla, cozinha equipada e varanda privada. Ideal para famílias até 6 pessoas.',
                'amenities'=>array('2 Quartos','Cozinha completa','Ar condicionado','Wi-Fi grátis','Vista jardim'),
            ),
            array(
                'type'=>'T1','title'=>'Apartamento T1 Conforto','price'=>'5 500',
                'img'=>'quarto-t1.jpg',
                'desc'=>'Um quarto, sala, cozinha e WC privativo. Perfeito para casais ou pequenas famílias.',
                'amenities'=>array('1 Quarto','Cozinha equipada','Ar condicionado','Wi-Fi grátis','Segurança 24h'),
            ),
            array(
                'type'=>'Quarto','title'=>'Quarto Suite','price'=>'3 500',
                'img'=>'cama-king.jpg',
                'desc'=>'Suite confortável com cama king-size e casa de banho privativa. Ideal para estadias curtas.',
                'amenities'=>array('Cama king','WC privativo','Ar condicionado','Wi-Fi grátis','Pequeno-almoço'),
            ),
        );
        foreach ( $rooms as $r ): ?>
        <article class="room-card">
            <div class="room-img" style="background-image:url('<?php echo esc_url( $img . '/' . $r['img'] ); ?>')"></div>
            <div class="room-body">
                <span class="badge"><?php echo esc_html( $r['type'] ); ?></span>
                <h3><?php echo esc_html( $r['title'] ); ?></h3>
                <p><?php echo esc_html( $r['desc'] ); ?></p>
                <div class="amenities">
                    <?php foreach ( $r['amenities'] as $a ): ?><span><?php echo esc_html( $a ); ?></span><?php endforeach; ?>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
                    <div><span class="price"><?php echo esc_html( $r['price'] ); ?> MZN</span> <small style="color:var(--muted)">/ noite</small></div>
                    <a href="<?php echo esc_url( rpbilene_whatsapp_url( 'Olá! Quero reservar: ' . $r['title'] ) ); ?>" class="btn" target="_blank">Reservar</a>
                </div>
            </div>
        </article>
        <?php endforeach; ?>
    </div>
</section>

<!-- GALLERY -->
<section class="section" style="background:#fff">
    <div class="container">
        <div class="section-title">
            <span class="eyebrow">Galeria</span>
            <h2>Um vislumbre do paraíso</h2>
            <div class="divider"></div>
        </div>
        <div class="gallery-grid">
            <?php foreach ( array('fachada.png','piscina.jpg','sala-ampla.jpg','bilene-praia.jpg','piscina-noite-3.jpg','Restaurante.png') as $g ): ?>
                <a href="<?php echo esc_url( $img . '/' . $g ); ?>"><img src="<?php echo esc_url( $img . '/' . $g ); ?>" alt="Galeria"></a>
            <?php endforeach; ?>
        </div>
        <div class="text-center" style="margin-top:2rem">
            <a href="<?php echo esc_url( home_url('/galeria') ); ?>" class="btn">Ver galeria completa</a>
        </div>
    </div>
</section>

<!-- TESTIMONIALS -->
<section class="section" style="background:var(--bg-soft)">
    <div class="container">
        <div class="section-title">
            <span class="eyebrow">Testemunhos</span>
            <h2>O que dizem os nossos hóspedes</h2>
            <div class="divider"></div>
        </div>
        <div class="grid grid-3">
            <?php
            $tests = array(
                array('name'=>'Ricardo Santos','text'=>'Experiência fantástica! A casa T2 é super espaçosa e a piscina é ótima para relaxar depois da praia. Atendimento nota 10.'),
                array('name'=>'Ana Paula',     'text'=>'O melhor custo-benefício do Bilene. Fiquei no quarto suite e estava tudo impecável. A localização é perfeita.'),
                array('name'=>'Carlos M.',      'text'=>'Segurança e tranquilidade. Viajei com a família e nos sentimos em casa. Recomendo vivamente a Casa T1 para casais.'),
            );
            foreach ( $tests as $t ): ?>
                <div class="testimonial">
                    <div class="stars">★ ★ ★ ★ ★</div>
                    <p>"<?php echo esc_html( $t['text'] ); ?>"</p>
                    <cite><?php echo esc_html( $t['name'] ); ?></cite>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- BLOG HIGHLIGHTS -->
<section class="section" style="background:#fff">
    <div class="container">
        <div class="section-title">
            <span class="eyebrow">Blog</span>
            <h2>Histórias do Bilene</h2>
            <div class="divider"></div>
        </div>
        <div class="grid grid-4">
            <?php
            $posts = get_posts( array( 'numberposts' => 4 ) );
            if ( $posts ) {
                foreach ( $posts as $p ): setup_postdata( $p ); ?>
                <a class="post-card" href="<?php echo esc_url( get_permalink( $p ) ); ?>">
                    <div class="thumb">
                        <?php if ( has_post_thumbnail( $p ) ) {
                            echo get_the_post_thumbnail( $p, 'rpb-card' );
                        } else { ?>
                            <img src="<?php echo esc_url( $img . '/bilene-praia.jpg' ); ?>" alt="">
                        <?php } ?>
                        <span class="cat"><?php $cats = get_the_category( $p->ID ); echo $cats ? esc_html( $cats[0]->name ) : 'Bilene'; ?></span>
                    </div>
                    <div class="body">
                        <h4><?php echo esc_html( get_the_title( $p ) ); ?></h4>
                        <p class="excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt( $p ), 18 ) ); ?></p>
                        <span class="read-more">Ler Mais →</span>
                    </div>
                </a>
                <?php endforeach; wp_reset_postdata();
            } else {
                $demo = array(
                    array('Praia do Bilene: guia completo','Tudo o que precisa para a sua viagem ao paraíso moçambicano.','bilene-praia.jpg','Viagem'),
                    array('Sabores locais a não perder','Os pratos típicos da costa moçambicana servidos no nosso restaurante.','gastronomia.jpg','Gastronomia'),
                    array('Passeios de barco e quad','Aventuras inesquecíveis para todas as idades, junto à lagoa.','passeios-barco.jpg','Lazer'),
                    array('Pôr-do-sol no Sunset Lounge','O melhor ângulo para apreciar o entardecer no Bilene.','sunset-lounge-exterior.webp','Experiência'),
                );
                foreach ( $demo as $d ): ?>
                    <a class="post-card" href="<?php echo esc_url( home_url('/blog') ); ?>">
                        <div class="thumb">
                            <img src="<?php echo esc_url( $img . '/' . $d[2] ); ?>" alt="<?php echo esc_attr( $d[0] ); ?>">
                            <span class="cat"><?php echo esc_html( $d[3] ); ?></span>
                        </div>
                        <div class="body">
                            <h4><?php echo esc_html( $d[0] ); ?></h4>
                            <p class="excerpt"><?php echo esc_html( $d[1] ); ?></p>
                            <span class="read-more">Ler Mais →</span>
                        </div>
                    </a>
                <?php endforeach;
            } ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
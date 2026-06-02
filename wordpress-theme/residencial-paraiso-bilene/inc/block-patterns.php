<?php
/**
 * Block patterns para o editor Gutenberg.
 * Permite ao utilizador inserir secções pré-desenhadas (hero, cards, galeria, CTA)
 * em qualquer página criada com o editor de blocos.
 *
 * @package rpbilene
 */
if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'init', function () {
    if ( ! function_exists( 'register_block_pattern_category' ) ) return;

    register_block_pattern_category( 'rpbilene', array(
        'label' => __( 'Residencial Paraíso Bilene', 'rpbilene' ),
    ) );

    $img = get_template_directory_uri() . '/assets/images';

    /* HERO */
    register_block_pattern( 'rpbilene/hero', array(
        'title'      => __( 'Hero com imagem de fundo', 'rpbilene' ),
        'categories' => array( 'rpbilene', 'banner' ),
        'content'    => '
<!-- wp:cover {"url":"' . esc_url( $img . '/hero-real.jpg' ) . '","dimRatio":50,"minHeight":80,"minHeightUnit":"vh","align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:80vh"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="' . esc_url( $img . '/hero-real.jpg' ) . '" data-object-fit="cover"/><div class="wp-block-cover__inner-container">
<!-- wp:heading {"textAlign":"center","level":1,"textColor":"white","fontSize":"xxlarge"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-text-color has-xxlarge-font-size">O seu refúgio à beira-mar</h1>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","textColor":"white","fontSize":"large"} -->
<p class="has-text-align-center has-white-color has-text-color has-large-font-size">Apartamentos T1 e T2 totalmente equipados, a 2 minutos da praia mais bonita de Moçambique.</p>
<!-- /wp:paragraph -->
<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"amber","textColor":"white","style":{"border":{"radius":"999px"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-amber-background-color has-text-color has-background wp-element-button" style="border-radius:999px">Reservar agora</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:cover -->',
    ) );

    /* FEATURES 4-COL */
    register_block_pattern( 'rpbilene/features', array(
        'title'      => __( 'Quatro destaques (cards)', 'rpbilene' ),
        'categories' => array( 'rpbilene', 'columns' ),
        'content'    => '
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"5rem","bottom":"5rem"}}}} -->
<div class="wp-block-group alignfull" style="padding-top:5rem;padding-bottom:5rem">
<!-- wp:columns -->
<div class="wp-block-columns">
<!-- wp:column --><div class="wp-block-column"><!-- wp:image {"sizeSlug":"large"} --><figure class="wp-block-image size-large"><img src="' . esc_url( $img . '/sala-ampla.jpg' ) . '" alt=""/></figure><!-- /wp:image --><!-- wp:heading {"level":4} --><h4>Design Sofisticado</h4><!-- /wp:heading --><!-- wp:paragraph --><p>Espaços amplos com decoração contemporânea.</p><!-- /wp:paragraph --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:image {"sizeSlug":"large"} --><figure class="wp-block-image size-large"><img src="' . esc_url( $img . '/cozinha-2.jpg' ) . '" alt=""/></figure><!-- /wp:image --><!-- wp:heading {"level":4} --><h4>Cozinha Equipada</h4><!-- /wp:heading --><!-- wp:paragraph --><p>Totalmente equipadas para uma estadia independente.</p><!-- /wp:paragraph --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:image {"sizeSlug":"large"} --><figure class="wp-block-image size-large"><img src="' . esc_url( $img . '/piscina-noite-3.jpg' ) . '" alt=""/></figure><!-- /wp:image --><!-- wp:heading {"level":4} --><h4>Lazer &amp; Piscina</h4><!-- /wp:heading --><!-- wp:paragraph --><p>Piscina exterior e jardins tropicais.</p><!-- /wp:paragraph --></div><!-- /wp:column -->
<!-- wp:column --><div class="wp-block-column"><!-- wp:image {"sizeSlug":"large"} --><figure class="wp-block-image size-large"><img src="' . esc_url( $img . '/gastronomia.jpg' ) . '" alt=""/></figure><!-- /wp:image --><!-- wp:heading {"level":4} --><h4>Restaurante</h4><!-- /wp:heading --><!-- wp:paragraph --><p>Gastronomia local e internacional.</p><!-- /wp:paragraph --></div><!-- /wp:column -->
</div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
    ) );

    /* GALLERY */
    register_block_pattern( 'rpbilene/gallery', array(
        'title'      => __( 'Galeria de imagens', 'rpbilene' ),
        'categories' => array( 'rpbilene', 'gallery' ),
        'content'    => '
<!-- wp:gallery {"columns":3,"linkTo":"none","align":"wide"} -->
<figure class="wp-block-gallery alignwide has-nested-images columns-3 is-cropped">
<!-- wp:image --><figure class="wp-block-image"><img src="' . esc_url( $img . '/fachada.png' ) . '" alt=""/></figure><!-- /wp:image -->
<!-- wp:image --><figure class="wp-block-image"><img src="' . esc_url( $img . '/piscina.jpg' ) . '" alt=""/></figure><!-- /wp:image -->
<!-- wp:image --><figure class="wp-block-image"><img src="' . esc_url( $img . '/sala-ampla.jpg' ) . '" alt=""/></figure><!-- /wp:image -->
<!-- wp:image --><figure class="wp-block-image"><img src="' . esc_url( $img . '/bilene-praia.jpg' ) . '" alt=""/></figure><!-- /wp:image -->
<!-- wp:image --><figure class="wp-block-image"><img src="' . esc_url( $img . '/piscina-noite-3.jpg' ) . '" alt=""/></figure><!-- /wp:image -->
<!-- wp:image --><figure class="wp-block-image"><img src="' . esc_url( $img . '/Restaurante.png' ) . '" alt=""/></figure><!-- /wp:image -->
</figure>
<!-- /wp:gallery -->',
    ) );

    /* CTA */
    register_block_pattern( 'rpbilene/cta', array(
        'title'      => __( 'CTA — Reserve agora', 'rpbilene' ),
        'categories' => array( 'rpbilene', 'call-to-action' ),
        'content'    => '
<!-- wp:cover {"customOverlayColor":"#1a2438","align":"full","minHeight":40,"minHeightUnit":"vh"} -->
<div class="wp-block-cover alignfull" style="min-height:40vh"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim" style="background-color:#1a2438"></span><div class="wp-block-cover__inner-container">
<!-- wp:heading {"textAlign":"center","textColor":"white"} --><h2 class="wp-block-heading has-text-align-center has-white-color has-text-color">Pronto para a sua escapadinha?</h2><!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","textColor":"white"} --><p class="has-text-align-center has-white-color has-text-color">Reserve já o seu apartamento no Bilene.</p><!-- /wp:paragraph -->
<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} --><div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"amber","textColor":"white"} --><div class="wp-block-button"><a class="wp-block-button__link has-white-color has-amber-background-color has-text-color has-background wp-element-button">Falar via WhatsApp</a></div><!-- /wp:button --></div><!-- /wp:buttons -->
</div></div>
<!-- /wp:cover -->',
    ) );
} );
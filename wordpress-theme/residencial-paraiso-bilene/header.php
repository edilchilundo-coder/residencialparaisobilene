<?php
/**
 * Header template
 * @package rpbilene
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Residencial Paraíso Bilene — Apartamentos T1 e T2 de luxo na Praia do Bilene, Moçambique. Reservas online.">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container header-inner">
    <div class="site-branding">
      <?php if ( has_custom_logo() ) : ?>
        <?php the_custom_logo(); ?>
      <?php else : ?>
        <a class="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>">
          <?php bloginfo( 'name' ); ?>
        </a>
      <?php endif; ?>
    </div>

    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>

    <nav class="site-nav" id="primary-menu">
      <?php
      wp_nav_menu( array(
        'theme_location' => 'primary',
        'container'      => false,
        'menu_class'     => 'nav-list',
        'fallback_cb'    => function() {
          echo '<ul class="nav-list">';
          echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">Início</a></li>';
          echo '<li><a href="' . esc_url( home_url( '/apartamentos' ) ) . '">Apartamentos</a></li>';
          echo '<li><a href="' . esc_url( home_url( '/galeria' ) ) . '">Galeria</a></li>';
          echo '<li><a href="' . esc_url( home_url( '/contactos' ) ) . '">Contactos</a></li>';
          echo '</ul>';
        },
      ) );
      ?>
      <a class="btn btn-amber header-cta" href="<?php echo esc_url( rpbilene_whatsapp_url() ); ?>" target="_blank" rel="noopener">Reservar</a>
    </nav>
  </div>
</header>
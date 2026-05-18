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

<header class="site-header" id="site-header">
    <div class="container nav-wrap">
        <div class="site-logo">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                <?php if ( has_custom_logo() ) {
                    the_custom_logo();
                } else { ?>
                    <img src="<?php echo esc_url( RPBILENE_URI . '/assets/images/logo.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>">
                <?php } ?>
            </a>
        </div>

        <nav class="main-nav" aria-label="<?php esc_attr_e( 'Menu Principal', 'rpbilene' ); ?>">
            <?php
            if ( has_nav_menu( 'primary' ) ) {
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => '',
                    'depth'          => 1,
                ) );
            } else { ?>
                <ul>
                    <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/apartamentos' ) ); ?>">Apartamentos</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/restaurante' ) ); ?>">Restaurante</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/lazer' ) ); ?>">Lazer</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/galeria' ) ); ?>">Galeria</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>">Blog</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/contactos' ) ); ?>">Contactos</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/sobre-nos' ) ); ?>">Sobre Nós</a></li>
                </ul>
            <?php } ?>
        </nav>

        <div class="nav-cta">
            <div class="lang-switch"><span>🌐</span><a href="#" class="active">PT</a><span>|</span><a href="#">EN</a></div>
            <a href="<?php echo esc_url( rpbilene_whatsapp_url() ); ?>" class="btn" target="_blank" rel="noopener">Reservar</a>
        </div>

        <button class="menu-toggle" aria-label="<?php esc_attr_e( 'Abrir menu', 'rpbilene' ); ?>" aria-controls="site-header" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
    </div>
</header>
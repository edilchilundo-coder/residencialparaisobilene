<?php
/**
 * Suporte oficial ao Elementor.
 *
 * - Declara o tema compatível com Elementor (locations API)
 * - Regista locais "header", "footer" e "single" para Theme Builder (Elementor Pro)
 * - Adiciona uma categoria própria de widgets/templates "Residencial Paraíso Bilene"
 * - Mostra aviso amigável caso o plugin Elementor não esteja instalado/activo
 *
 * @package rpbilene
 */
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 1) Declarar suporte oficial ao Elementor (Hello-theme-style).
 */
add_action( 'after_setup_theme', function () {
    add_theme_support( 'elementor' );
    add_theme_support( 'elementor-pro' );
    add_theme_support( 'elementor-header-footer' );
} );

/**
 * 2) Registar locais do Theme Builder (Elementor Pro).
 */
add_action( 'elementor/theme/register_locations', function ( $manager ) {
    $manager->register_all_core_location();
} );

/**
 * 3) Categoria própria de widgets/templates.
 */
add_action( 'elementor/elements/categories_registered', function ( $manager ) {
    $manager->add_category( 'rpbilene', array(
        'title' => __( 'Residencial Paraíso Bilene', 'rpbilene' ),
        'icon'  => 'fa fa-home',
    ) );
} );

/**
 * 4) Largura máxima do conteúdo (usado pelo Elementor para layout).
 */
if ( ! isset( $GLOBALS['content_width'] ) ) {
    $GLOBALS['content_width'] = 1200;
}

/**
 * 5) Aviso no admin quando o Elementor não está activo.
 */
add_action( 'admin_notices', function () {
    if ( did_action( 'elementor/loaded' ) ) return;
    if ( ! current_user_can( 'install_plugins' ) ) return;
    $url = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=elementor' ), 'install-plugin_elementor' );
    echo '<div class="notice notice-info"><p><strong>Residencial Paraíso Bilene:</strong> Para editar páginas com o construtor visual, instale o plugin <a href="' . esc_url( $url ) . '">Elementor</a> (gratuito).</p></div>';
} );

/**
 * 6) Garantir que o CPT "apartamento" também é editável pelo Elementor.
 */
add_filter( 'elementor/utils/get_public_post_types', function ( $types ) {
    $types['apartamento'] = __( 'Apartamento', 'rpbilene' );
    return $types;
} );
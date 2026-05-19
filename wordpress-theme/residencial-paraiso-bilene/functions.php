<?php
/**
 * Residencial Paraíso Bilene functions and definitions
 *
 * @package rpbilene
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'RPBILENE_VERSION', '1.0.0' );
define( 'RPBILENE_DIR', get_template_directory() );
define( 'RPBILENE_URI', get_template_directory_uri() );

/**
 * Theme setup
 */
function rpbilene_setup() {
    load_theme_textdomain( 'rpbilene', RPBILENE_DIR . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    add_theme_support( 'html5', array( 'search-form','comment-form','comment-list','gallery','caption','style','script' ) );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );

    // Gutenberg / block editor
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'custom-spacing' );
    add_theme_support( 'custom-units' );
    add_theme_support( 'border' );
    add_theme_support( 'link-color' );
    add_editor_style( 'assets/css/editor.css' );

    // Permite usar o editor de blocos também em widgets e no CPT apartamento
    add_post_type_support( 'page', 'editor' );

    // Menus
    register_nav_menus( array(
        'primary' => __( 'Menu Principal', 'rpbilene' ),
        'footer'  => __( 'Menu Rodapé', 'rpbilene' ),
    ) );

    // Image sizes
    set_post_thumbnail_size( 1200, 700, true );
    add_image_size( 'rpb-card', 600, 400, true );
    add_image_size( 'rpb-hero', 1920, 1080, true );
}
add_action( 'after_setup_theme', 'rpbilene_setup' );

/**
 * Enqueue scripts and styles
 */
function rpbilene_assets() {
    wp_enqueue_style( 'rpbilene-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap', array(), null );
    wp_enqueue_style( 'rpbilene-style', get_stylesheet_uri(), array(), RPBILENE_VERSION );
    wp_enqueue_script( 'rpbilene-main', RPBILENE_URI . '/assets/js/main.js', array(), RPBILENE_VERSION, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'rpbilene_assets' );

/**
 * Widget areas
 */
function rpbilene_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Barra Lateral Principal', 'rpbilene' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Adicione widgets à barra lateral.', 'rpbilene' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Rodapé', 'rpbilene' ),
        'id'            => 'footer-1',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'rpbilene_widgets_init' );

/**
 * Custom Post Type: Apartamentos (T1 / T2 / Quartos)
 */
function rpbilene_register_cpt() {
    register_post_type( 'apartamento', array(
        'labels' => array(
            'name'          => __( 'Apartamentos', 'rpbilene' ),
            'singular_name' => __( 'Apartamento', 'rpbilene' ),
            'add_new_item'  => __( 'Adicionar Apartamento', 'rpbilene' ),
            'edit_item'     => __( 'Editar Apartamento', 'rpbilene' ),
        ),
        'public'       => true,
        'has_archive'  => 'apartamentos',
        'menu_icon'    => 'dashicons-admin-home',
        'supports'     => array( 'title','editor','thumbnail','excerpt' ),
        'rewrite'      => array( 'slug' => 'apartamentos' ),
        'show_in_rest' => true,
    ) );

    register_taxonomy( 'tipo_apartamento', 'apartamento', array(
        'label'        => __( 'Tipo', 'rpbilene' ),
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => array( 'slug' => 'tipo' ),
    ) );
}
add_action( 'init', 'rpbilene_register_cpt' );

/**
 * Theme options helpers
 */
function rpbilene_get_option( $key, $default = '' ) {
    return get_theme_mod( $key, $default );
}

/**
 * Customizer settings
 */
function rpbilene_customize_register( $wp_customize ) {
    $wp_customize->add_section( 'rpbilene_contact', array(
        'title'    => __( 'Contactos & Reservas', 'rpbilene' ),
        'priority' => 30,
    ) );

    $fields = array(
        'phone'      => array( 'label' => 'Telefone',        'default' => '+258 87 730 2100' ),
        'whatsapp'   => array( 'label' => 'WhatsApp (n.º internacional sem +)', 'default' => '258877302100' ),
        'email'      => array( 'label' => 'Email',           'default' => 'info@paraisobilene.com' ),
        'address'    => array( 'label' => 'Endereço',        'default' => 'Praia do Bilene, Gaza, Moçambique' ),
        'hero_title' => array( 'label' => 'Título do Hero',  'default' => 'O seu refúgio à beira-mar' ),
        'hero_sub'   => array( 'label' => 'Subtítulo do Hero','default' => 'Apartamentos T1 e T2 totalmente equipados, a 2 minutos da praia mais bonita de Moçambique.' ),
    );

    foreach ( $fields as $key => $f ) {
        $wp_customize->add_setting( 'rpb_' . $key, array(
            'default'           => $f['default'],
            'sanitize_callback' => 'sanitize_text_field',
        ) );
        $wp_customize->add_control( 'rpb_' . $key, array(
            'label'   => $f['label'],
            'section' => 'rpbilene_contact',
            'type'    => 'text',
        ) );
    }
}
add_action( 'customize_register', 'rpbilene_customize_register' );

/**
 * Helper: WhatsApp link
 */
function rpbilene_whatsapp_url( $msg = '' ) {
    $num = rpbilene_get_option( 'rpb_whatsapp', '258877302100' );
    $msg = $msg ?: 'Olá! Gostaria de saber mais sobre a disponibilidade na Residencial Paraíso Bilene.';
    return 'https://wa.me/' . $num . '?text=' . rawurlencode( $msg );
}

/**
 * Excerpt length
 */
function rpbilene_excerpt_length( $length ) { return 24; }
add_filter( 'excerpt_length', 'rpbilene_excerpt_length' );

function rpbilene_excerpt_more( $more ) { return '…'; }
add_filter( 'excerpt_more', 'rpbilene_excerpt_more' );

/**
 * Include demo importer
 */
require_once RPBILENE_DIR . '/inc/demo-content.php';
require_once RPBILENE_DIR . '/inc/block-patterns.php';
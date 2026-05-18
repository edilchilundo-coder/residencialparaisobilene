<?php
/**
 * One-click demo content importer
 * @package rpbilene
 */
if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'admin_menu', function() {
    add_theme_page(
        __( 'Importar Demo', 'rpbilene' ),
        __( 'Importar Demo', 'rpbilene' ),
        'manage_options',
        'rpbilene-demo',
        'rpbilene_demo_page'
    );
} );

function rpbilene_demo_page() {
    if ( isset( $_POST['rpbilene_import'] ) && check_admin_referer( 'rpbilene_demo_action', 'rpbilene_demo_nonce' ) ) {
        rpbilene_run_demo_import();
        echo '<div class="notice notice-success"><p><strong>Conteúdo demo importado com sucesso!</strong></p></div>';
    }
    ?>
    <div class="wrap">
        <h1>Importar Conteúdo Demo — Residencial Paraíso Bilene</h1>
        <p>Cria as páginas (Início, Apartamentos, Restaurante, Lazer, Galeria, Blog, Contactos, Sobre Nós),
            publica artigos de exemplo, regista 3 apartamentos demo (T1, T2, Quarto) e configura o menu principal.</p>
        <form method="post">
            <?php wp_nonce_field( 'rpbilene_demo_action', 'rpbilene_demo_nonce' ); ?>
            <p><button type="submit" name="rpbilene_import" class="button button-primary button-hero">Importar Conteúdo Demo</button></p>
        </form>
    </div>
    <?php
}

function rpbilene_create_page( $title, $slug, $content = '' ) {
    $existing = get_page_by_path( $slug );
    if ( $existing ) return $existing->ID;
    return wp_insert_post( array(
        'post_title'   => $title,
        'post_name'    => $slug,
        'post_content' => $content,
        'post_status'  => 'publish',
        'post_type'    => 'page',
    ) );
}

function rpbilene_run_demo_import() {
    $home_id  = rpbilene_create_page( 'Início',       'inicio',       '' );
    $blog_id  = rpbilene_create_page( 'Blog',         'blog',         '' );
    $apt_id   = rpbilene_create_page( 'Apartamentos', 'apartamentos', '<p>Conheça as nossas tipologias T1, T2 e Quartos Suite, todas equipadas para o seu conforto.</p>' );
    $rest_id  = rpbilene_create_page( 'Restaurante',  'restaurante',  '<p>Gastronomia local e internacional servida no nosso restaurante interno, com vista para a piscina.</p>' );
    $lazer_id = rpbilene_create_page( 'Lazer',        'lazer',        '<p>Piscina, passeios de barco, quad biking e o famoso Sunset Lounge à beira da lagoa do Bilene.</p>' );
    $gal_id   = rpbilene_create_page( 'Galeria',      'galeria',      '<p>Imagens do nosso espaço, da praia e das experiências que os nossos hóspedes vivem.</p>' );
    $cont_id  = rpbilene_create_page( 'Contactos',    'contactos',    '<p>Telefone: +258 87 730 2100<br>Email: info@paraisobilene.com<br>Endereço: Praia do Bilene, Gaza, Moçambique</p>' );
    $about_id = rpbilene_create_page( 'Sobre Nós',    'sobre-nos',    '<p>O Residencial Paraíso Bilene nasceu para oferecer a famílias e casais um refúgio premium na Praia do Bilene.</p>' );

    update_option( 'show_on_front', 'page' );
    update_option( 'page_on_front', $home_id );
    update_option( 'page_for_posts', $blog_id );

    $posts = array(
        array( 'Praia do Bilene: guia completo para a sua viagem', 'Tudo o que precisa de saber antes de visitar este paraíso moçambicano.' ),
        array( 'Sabores locais: o que comer no Bilene',            'Camarão grelhado, matapa, peixe fresco e cocktails ao pôr-do-sol.' ),
        array( 'Passeios de barco e quad biking na lagoa',         'Aventuras para todas as idades junto à famosa lagoa do Bilene.' ),
        array( 'O melhor pôr-do-sol no Sunset Lounge',             'A nossa esplanada premium com vista panorâmica.' ),
    );
    foreach ( $posts as $p ) {
        if ( ! get_page_by_title( $p[0], OBJECT, 'post' ) ) {
            wp_insert_post( array(
                'post_title'   => $p[0],
                'post_content' => '<p>' . $p[1] . '</p>',
                'post_status'  => 'publish',
                'post_type'    => 'post',
            ) );
        }
    }

    $apartamentos = array(
        array( 'Apartamento T2 Premium',  'Dois quartos, sala ampla, cozinha equipada e varanda privada.', 'T2' ),
        array( 'Apartamento T1 Conforto', 'Um quarto, sala, cozinha e WC privativo.', 'T1' ),
        array( 'Quarto Suite',            'Suite confortável com cama king-size e WC privativo.', 'Quarto' ),
    );
    foreach ( $apartamentos as $a ) {
        if ( ! get_page_by_title( $a[0], OBJECT, 'apartamento' ) ) {
            $pid = wp_insert_post( array(
                'post_title'   => $a[0],
                'post_content' => '<p>' . $a[1] . '</p>',
                'post_status'  => 'publish',
                'post_type'    => 'apartamento',
            ) );
            if ( $pid && ! is_wp_error( $pid ) ) {
                wp_set_object_terms( $pid, $a[2], 'tipo_apartamento', false );
            }
        }
    }

    $menu_name = 'Menu Principal RPB';
    $menu = wp_get_nav_menu_object( $menu_name );
    if ( ! $menu ) {
        $menu_id = wp_create_nav_menu( $menu_name );
        $items = array(
            array( 'Início',       $home_id ),
            array( 'Apartamentos', $apt_id ),
            array( 'Restaurante',  $rest_id ),
            array( 'Lazer',        $lazer_id ),
            array( 'Galeria',      $gal_id ),
            array( 'Blog',         $blog_id ),
            array( 'Contactos',    $cont_id ),
            array( 'Sobre Nós',    $about_id ),
        );
        foreach ( $items as $item ) {
            wp_update_nav_menu_item( $menu_id, 0, array(
                'menu-item-title'     => $item[0],
                'menu-item-object'    => 'page',
                'menu-item-object-id' => $item[1],
                'menu-item-type'      => 'post_type',
                'menu-item-status'    => 'publish',
            ) );
        }
        $locations = get_theme_mod( 'nav_menu_locations' );
        $locations['primary'] = $menu_id;
        $locations['footer']  = $menu_id;
        set_theme_mod( 'nav_menu_locations', $locations );
    }

    flush_rewrite_rules();
}
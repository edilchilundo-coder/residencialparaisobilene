<?php
/**
 * WPBakery Page Builder integration
 *
 * Permite editar todas as páginas, posts e o CPT "apartamento" com o WPBakery
 * (antes Visual Composer). Funciona em modo Front-end e Back-end.
 *
 * @package rpbilene
 */
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Regista o tema como "tema oficial" para o WPBakery — remove o aviso de
 * licença ao ativar e habilita o builder em todos os tipos de conteúdo.
 */
add_action( 'vc_before_init', function () {
    if ( function_exists( 'vc_set_as_theme' ) ) {
        vc_set_as_theme( true );
    }

    // Tipos de conteúdo onde o WPBakery aparece
    if ( function_exists( 'vc_set_default_editor_post_types' ) ) {
        vc_set_default_editor_post_types( array( 'page', 'post', 'apartamento' ) );
    }

    // Adiciona a paleta do tema às opções de cor do WPBakery
    if ( function_exists( 'vc_add_shared_templates_param' ) ) {
        // noop placeholder
    }
} );

/**
 * Aviso amigável se o WPBakery não estiver instalado.
 */
add_action( 'admin_notices', function () {
    if ( defined( 'WPB_VC_VERSION' ) ) return;
    if ( ! current_user_can( 'install_plugins' ) ) return;
    $screen = get_current_screen();
    if ( ! $screen || $screen->id !== 'dashboard' ) return;
    echo '<div class="notice notice-info is-dismissible"><p><strong>Residencial Paraíso Bilene:</strong> instale o plugin <em>WPBakery Page Builder</em> para editar as páginas com o construtor visual. O tema também funciona perfeitamente com o editor Gutenberg.</p></div>';
} );

/**
 * Templates de partida WPBakery (aparecem em "Adicionar Template" → "My Templates")
 */
add_filter( 'vc_load_default_templates', function ( $templates ) {
    $img = RPBILENE_URI . '/assets/images';

    $templates[] = array(
        'name'    => 'Bilene — Hero',
        'content' => '[vc_row full_width="stretch_row" css=".vc_custom_hero{background-image:url(' . esc_url( $img . '/hero-real.jpg' ) . ') !important;background-size:cover !important;background-position:center !important;padding:140px 0 !important;}" el_class="vc_custom_hero"][vc_column][vc_custom_heading text="O seu refúgio à beira-mar" font_container="tag:h1|font_size:56|text_align:center|color:%23ffffff" use_theme_fonts="yes"][vc_column_text css=".vc_custom_text{color:#fff !important;text-align:center !important;}"]Apartamentos T1 e T2 totalmente equipados, a 2 minutos da praia.[/vc_column_text][vc_btn title="Reservar agora" style="flat" color="warning" align="center" link="url:%23contactos|"][/vc_column][/vc_row]',
    );

    $templates[] = array(
        'name'    => 'Bilene — 4 Destaques',
        'content' => '[vc_row][vc_column width="1/4"][vc_single_image image="" img_size="medium" image="' . esc_url( $img . '/sala-ampla.jpg' ) . '"][vc_custom_heading text="Design Sofisticado" font_container="tag:h4|text_align:center"][vc_column_text]Espaços amplos com decoração contemporânea.[/vc_column_text][/vc_column][vc_column width="1/4"][vc_single_image image="' . esc_url( $img . '/cozinha-2.jpg' ) . '"][vc_custom_heading text="Cozinha Equipada" font_container="tag:h4|text_align:center"][vc_column_text]Totalmente equipadas para estadia independente.[/vc_column_text][/vc_column][vc_column width="1/4"][vc_single_image image="' . esc_url( $img . '/piscina-noite-3.jpg' ) . '"][vc_custom_heading text="Lazer & Piscina" font_container="tag:h4|text_align:center"][vc_column_text]Piscina exterior e jardins tropicais.[/vc_column_text][/vc_column][vc_column width="1/4"][vc_single_image image="' . esc_url( $img . '/gastronomia.jpg' ) . '"][vc_custom_heading text="Restaurante" font_container="tag:h4|text_align:center"][vc_column_text]Gastronomia local e internacional.[/vc_column_text][/vc_column][/vc_row]',
    );

    $templates[] = array(
        'name'    => 'Bilene — CTA Reserva',
        'content' => '[vc_row full_width="stretch_row" css=".vc_custom_cta{background:#1a2438 !important;padding:80px 0 !important;}" el_class="vc_custom_cta"][vc_column][vc_custom_heading text="Pronto para a sua escapadinha?" font_container="tag:h2|text_align:center|color:%23ffffff" use_theme_fonts="yes"][vc_btn title="Falar via WhatsApp" style="flat" color="warning" align="center" link="url:https%3A%2F%2Fwa.me%2F258877302100|target:_blank"][/vc_column][/vc_row]',
    );

    return $templates;
} );

/**
 * Adiciona um template de página "Largura Total — WPBakery" (sem hero, sem container)
 * que dá ao WPBakery liberdade total para desenhar a página inteira.
 */
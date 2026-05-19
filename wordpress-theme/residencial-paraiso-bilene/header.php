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

<?php
/**
 * Render the block-based header template part.
 * Edit it in the Site Editor: Aparência → Editor → Padrões → Partes de modelo → Cabeçalho.
 */
if ( function_exists( 'block_template_part' ) ) {
    block_template_part( 'header' );
}
?>
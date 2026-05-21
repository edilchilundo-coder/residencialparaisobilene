<?php
/**
 * Template Name: Largura Total (WPBakery / Gutenberg)
 *
 * Página sem hero nem container — ideal para construir do zero com WPBakery
 * Page Builder ou com blocos full-width do Gutenberg.
 *
 * @package rpbilene
 */
get_header();
while ( have_posts() ) : the_post(); ?>
    <main class="rpb-fullwidth">
        <?php the_content(); ?>
    </main>
<?php endwhile; get_footer();
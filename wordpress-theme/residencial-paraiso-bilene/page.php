<?php
/**
 * Generic page template
 * @package rpbilene
 */
get_header();
$img = RPBILENE_URI . '/assets/images';
while ( have_posts() ) : the_post();
    $hero = has_post_thumbnail() ? get_the_post_thumbnail_url( null, 'rpb-hero' ) : $img . '/fachada.png';
?>
<div class="page-hero" style="--page-hero-img:url('<?php echo esc_url( $hero ); ?>')">
    <div>
        <p class="breadcrumbs"><?php bloginfo('name'); ?></p>
        <h1><?php the_title(); ?></h1>
    </div>
</div>

<article class="content-area">
    <?php the_content(); ?>
</article>
<?php endwhile; get_footer(); ?>
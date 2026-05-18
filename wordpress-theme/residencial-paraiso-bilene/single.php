<?php
/**
 * Single post template
 * @package rpbilene
 */
get_header();
$img = RPBILENE_URI . '/assets/images';
while ( have_posts() ) : the_post();
    $hero = has_post_thumbnail() ? get_the_post_thumbnail_url( null, 'rpb-hero' ) : $img . '/bilene-praia.jpg';
?>
<div class="page-hero" style="--page-hero-img:url('<?php echo esc_url( $hero ); ?>')">
    <div>
        <p class="breadcrumbs"><?php $cats = get_the_category(); echo $cats ? esc_html( $cats[0]->name ) : 'Blog'; ?></p>
        <h1><?php the_title(); ?></h1>
    </div>
</div>

<article class="content-area">
    <p style="color:var(--muted);font-size:.85rem;letter-spacing:.1em;text-transform:uppercase">
        <?php echo esc_html( get_the_date() ); ?> &middot; <?php the_author(); ?>
    </p>
    <?php the_content(); ?>

    <?php if ( comments_open() || get_comments_number() ) : ?>
        <div style="margin-top:3rem"><?php comments_template(); ?></div>
    <?php endif; ?>
</article>
<?php endwhile; get_footer(); ?>
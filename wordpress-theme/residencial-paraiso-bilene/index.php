<?php
/**
 * Main index — blog listing fallback
 * @package rpbilene
 */
get_header();
$img = RPBILENE_URI . '/assets/images';
?>
<div class="page-hero" style="--page-hero-img:url('<?php echo esc_url( $img . '/bilene-praia.jpg' ); ?>')">
    <div>
        <p class="breadcrumbs">Blog</p>
        <h1><?php single_post_title( '', false ) ?: bloginfo('name'); ?></h1>
    </div>
</div>

<section class="section">
    <div class="container">
        <?php if ( have_posts() ) : ?>
            <div class="grid grid-3">
                <?php while ( have_posts() ) : the_post(); ?>
                    <a class="post-card" href="<?php the_permalink(); ?>">
                        <div class="thumb">
                            <?php if ( has_post_thumbnail() ) {
                                the_post_thumbnail('rpb-card');
                            } else { ?>
                                <img src="<?php echo esc_url( $img . '/bilene-praia.jpg' ); ?>" alt="">
                            <?php } ?>
                            <?php $cats = get_the_category(); if ( $cats ) : ?>
                                <span class="cat"><?php echo esc_html( $cats[0]->name ); ?></span>
                            <?php endif; ?>
                        </div>
                        <div class="body">
                            <h4><?php the_title(); ?></h4>
                            <p class="excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
                            <span class="read-more">Ler Mais →</span>
                        </div>
                    </a>
                <?php endwhile; ?>
            </div>
            <div class="text-center" style="margin-top:3rem">
                <?php the_posts_pagination( array( 'mid_size' => 2 ) ); ?>
            </div>
        <?php else : ?>
            <p class="text-center">Nenhum artigo encontrado.</p>
        <?php endif; ?>
    </div>
</section>
<?php get_footer(); ?>
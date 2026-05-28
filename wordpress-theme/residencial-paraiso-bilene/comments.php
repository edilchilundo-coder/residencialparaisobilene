<?php if ( post_password_required() ) return; ?>
<div id="comments" class="comments-area">
    <?php if ( have_comments() ) : ?>
        <h3><?php comments_number( 'Sem comentários', '1 comentário', '% comentários' ); ?></h3>
        <ol class="comment-list" style="list-style:none;padding:0">
            <?php wp_list_comments( array( 'style' => 'ol', 'short_ping' => true ) ); ?>
        </ol>
        <?php the_comments_navigation(); ?>
    <?php endif; ?>
    <?php comment_form(); ?>
</div>
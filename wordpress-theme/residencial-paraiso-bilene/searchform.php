<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <label class="screen-reader-text" for="s">Pesquisar:</label>
    <input type="search" id="s" name="s" placeholder="Pesquisar…" value="<?php echo esc_attr( get_search_query() ); ?>" style="padding:.75rem 1rem;border:1px solid var(--border);width:100%">
    <button type="submit" class="btn" style="margin-top:.5rem">Pesquisar</button>
</form>
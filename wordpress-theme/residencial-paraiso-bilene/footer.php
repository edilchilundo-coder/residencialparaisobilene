<?php
/**
 * Footer template
 * @package rpbilene
 */
?>
<footer class="site-footer">
    <div class="container">
        <div class="grid">
            <div>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="brand">
                    RESIDENCIAL PARAÍSO <span class="amber">BILENE</span>
                </a>
                <p>O seu refúgio de luxo na Praia do Bilene. Apartamentos T1 e T2 totalmente equipados a apenas 2 minutos da praia.</p>
            </div>

            <div>
                <h4>Navegação</h4>
                <?php if ( has_nav_menu( 'footer' ) ) {
                    wp_nav_menu( array(
                        'theme_location' => 'footer',
                        'container'      => false,
                        'depth'          => 1,
                    ) );
                } else { ?>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem">
                        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/apartamentos' ) ); ?>">Apartamentos</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/galeria' ) ); ?>">Galeria</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>">Blog</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contactos' ) ); ?>">Contactos</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/sobre-nos' ) ); ?>">Sobre Nós</a></li>
                    </ul>
                <?php } ?>
            </div>

            <div>
                <h4>Contacto</h4>
                <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.75rem;font-size:.875rem">
                    <li>📞 <a href="tel:<?php echo esc_attr( str_replace( ' ', '', rpbilene_get_option('rpb_phone','+258877302100') ) ); ?>"><?php echo esc_html( rpbilene_get_option('rpb_phone','+258 87 730 2100') ); ?></a></li>
                    <li>✉️ <a href="mailto:<?php echo esc_attr( rpbilene_get_option('rpb_email','info@paraisobilene.com') ); ?>"><?php echo esc_html( rpbilene_get_option('rpb_email','info@paraisobilene.com') ); ?></a></li>
                    <li>📍 <?php echo esc_html( rpbilene_get_option('rpb_address','Praia do Bilene, Gaza, Moçambique') ); ?></li>
                </ul>
            </div>
        </div>

        <div class="copyright">
            © <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. Todos os direitos reservados.
        </div>
    </div>
</footer>

<a href="<?php echo esc_url( rpbilene_whatsapp_url() ); ?>" class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
</a>

<?php wp_footer(); ?>
</body>
</html>
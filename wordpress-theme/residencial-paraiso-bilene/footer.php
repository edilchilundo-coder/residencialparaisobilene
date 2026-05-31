<?php
/**
 * Footer template
 * @package rpbilene
 */
?>
<?php
$rpb_phone    = rpbilene_get_option( 'rpb_phone',    '+258 87 730 2100' );
$rpb_email    = rpbilene_get_option( 'rpb_email',    'info@paraisobilene.com' );
$rpb_address  = rpbilene_get_option( 'rpb_address',  'Praia do Bilene, Gaza, Moçambique' );
$rpb_whatsapp = rpbilene_get_option( 'rpb_whatsapp', '258877302100' );
?>
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-col">
      <h3 class="footer-brand">RESIDENCIAL PARAÍSO <span>BILENE</span></h3>
      <p><?php bloginfo( 'description' ); ?></p>
    </div>

    <div class="footer-col">
      <h4>Navegação</h4>
      <?php
      wp_nav_menu( array(
        'theme_location' => 'footer',
        'container'      => false,
        'menu_class'     => 'footer-menu',
        'fallback_cb'    => function() {
          echo '<ul class="footer-menu">';
          echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">Início</a></li>';
          echo '<li><a href="' . esc_url( home_url( '/apartamentos' ) ) . '">Apartamentos</a></li>';
          echo '<li><a href="' . esc_url( home_url( '/galeria' ) ) . '">Galeria</a></li>';
          echo '<li><a href="' . esc_url( home_url( '/contactos' ) ) . '">Contactos</a></li>';
          echo '</ul>';
        },
      ) );
      ?>
    </div>

    <div class="footer-col">
      <h4>Contacto</h4>
      <p>
        📞 <a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', $rpb_phone ) ); ?>"><?php echo esc_html( $rpb_phone ); ?></a><br>
        ✉️ <a href="mailto:<?php echo esc_attr( $rpb_email ); ?>"><?php echo esc_html( $rpb_email ); ?></a><br>
        📍 <?php echo esc_html( $rpb_address ); ?>
      </p>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>© <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. Todos os direitos reservados.</p>
  </div>
</footer>

<a href="<?php echo esc_url( rpbilene_whatsapp_url() ); ?>" class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
</a>

<?php wp_footer(); ?>
</body>
</html>
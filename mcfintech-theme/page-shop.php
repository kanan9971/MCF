<?php
/* Template Name: Shop */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">Products</span>
    <h1>Shop</h1>
  </div>
</div>

<section>
  <div class="container">
    <div class="section-header centered fade-up">
      <span class="section-label">Available Now</span>
      <h2>Our Products</h2>
    </div>

    <?php if ( class_exists( 'WooCommerce' ) ) : ?>
      <?php echo do_shortcode( '[products limit="12" columns="3"]' ); ?>
    <?php else : ?>
    <div class="product-grid">
      <div class="product-card fade-up">
        <div class="product-img"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg></div>
        <div class="product-body"><h3>Computer</h3><p>High-performance computer for professional use.</p></div>
        <div class="product-price"><span class="price-sale">$15,000.00</span><span class="price-original">$20,000.00</span></div>
        <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="add-to-cart">Enquire Now</a>
      </div>
    </div>
    <?php endif; ?>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

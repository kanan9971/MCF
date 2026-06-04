<?php
/* Template Name: Promotion */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">Latest Innovations</span>
    <h1>Store</h1>
    <p>Join MC Fintech Solutions Limited: Innovate the Future of Finance</p>
  </div>
</div>

<section>
  <div class="container">
    <div class="section-header centered fade-up">
      <span class="section-label">What's New</span>
      <h2>At the forefront of fintech innovation</h2>
      <p>At MC Fintech Solutions Limited, we're passionate about revolutionizing the financial technology landscape. We're thrilled to introduce our latest innovations designed to keep you at the forefront of the fintech industry.</p>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="product-grid">
      <div class="product-card fade-up">
        <div class="product-img"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <div class="product-body"><span class="product-date">Aug 23, 2026</span><h3>F Plus Program</h3><p>Advanced AI-driven algorithm to detect and analyze currency trends.</p></div>
      </div>
      <div class="product-card fade-up delay-1">
        <div class="product-img"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="product-body"><span class="product-date">Oct 14, 2026</span><h3>Smartwatch</h3><p>Light-weight and customized watch for daily operations</p></div>
      </div>
      <div class="product-card fade-up delay-2">
        <div class="product-img"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg></div>
        <div class="product-body"><span class="product-date">Aug 23, 2026</span><h3>Laptop 1000</h3><p>High quality and user-friendly laptop to assist your work</p></div>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner fade-up">
      <span class="section-label">Don't Miss Out</span>
      <h2>Transform your financial operations</h2>
      <p>Don't miss this opportunity to transform your financial operations with MC Fintech Solutions Limited. Contact us today to schedule a demo and experience the future of fintech!</p>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="btn btn-primary">Contact Us →</a>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

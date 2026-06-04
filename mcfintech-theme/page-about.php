<?php
/* Template Name: About Us */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">Who We Are</span>
    <h1>About Us</h1>
  </div>
</div>

<section>
  <div class="container">
    <div class="section-header fade-up">
      <span class="section-label">Our Story</span>
      <h2>Built on Experience. Driven by Innovation.</h2>
      <p>Established with a rich history of industry service experience, MC Fintech Solutions Ltd has successfully served hundreds of renowned group companies and brand clients. With a passion for design, keen insight into marketing trends, and a deep understanding of the market, we thrive alongside our clients in a dynamic environment.</p>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="two-col-intro fade-up">
      <div class="intro-text">
        <span class="section-label">Our Mission</span>
        <h2>Streamlining Business, Powering Growth</h2>
        <p>Our mission is to streamline business operations, making them more efficient, excellent and effective. Through our enterprise management systems, we help various industries accelerate their development.</p>
      </div>
      <div class="intro-deco">
        <div class="intro-deco-pattern"></div>
        <div class="intro-deco-badge">
          <span class="badge-main">Mission Driven</span>
          <span class="badge-sub">Innovation &amp; Excellence</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-header centered fade-up">
      <span class="section-label">Our Values</span>
      <h2>The principles that guide everything we do</h2>
    </div>
    <div class="values-grid">
      <div class="value-card fade-up"><span class="value-num">01</span><p>People-Oriented and Heartfelt Service</p></div>
      <div class="value-card fade-up delay-1"><span class="value-num">02</span><p>Perfection Pursuit — Integrity and Innovation</p></div>
      <div class="value-card fade-up delay-2"><span class="value-num">03</span><p>Promote Business Innovation, Service to Enhance Brand Value</p></div>
      <div class="value-card fade-up"><span class="value-num">04</span><p>Emphasis on Technology — Using Technology to Create Value for You</p></div>
      <div class="value-card fade-up delay-1"><span class="value-num">05</span><p>Customer-First Service — We foster transparency and security</p></div>
      <div class="value-card fade-up delay-2"><span class="value-num">06</span><p>We aim to connect customer with us through Innovations and Creative Thinking.</p></div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner fade-up">
      <span class="section-label">Get In Touch</span>
      <h2>Ready to work together?</h2>
      <p>Whether you're an enterprise looking to modernize, or a startup ready to scale — we're here to help.</p>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="btn btn-primary">Contact Us →</a>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

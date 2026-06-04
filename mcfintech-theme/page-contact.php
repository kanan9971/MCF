<?php
/* Template Name: Contact */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">Reach Out</span>
    <h1>Contact</h1>
  </div>
</div>

<section>
  <div class="container">
    <div class="contact-layout">
      <div>
        <div class="section-header fade-up">
          <span class="section-label">Get In Touch</span>
          <h2>We'd love to hear from you</h2>
        </div>
        <div class="contact-info fade-up">
          <div class="contact-item">
            <div class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div><strong>Address</strong><p>Unit 02, 12/F Boss Commercial Centre, 28 Ferry Street, Yau Ma Tei, Kowloon, Hong Kong</p></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <div><strong>Email</strong><p><a href="mailto:info@mcfintech.com" style="color:var(--accent);">info@mcfintech.com</a></p></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div><strong>Phone</strong><p><a href="tel:+85231052020" style="color:var(--accent);">+852 3105 2020</a></p></div>
          </div>
        </div>
        <div class="getting-there fade-up" style="margin-top:2.5rem;">
          <h3>Getting There</h3>
          <div class="transport-item"><strong>By MTR</strong><p>Yau Ma Tei Station (Tsuen Wan Line): Exit A1 or A2. Jordan Station (Kwun Tong Line): Exit C.</p></div>
          <div class="transport-item"><strong>By Bus</strong><p>2E, 12, 914, 914X to Ferry Street Station.</p></div>
        </div>
      </div>
      <div class="fade-up">
        <?php
        // Use Contact Form 7 if available, otherwise fallback to plain HTML form
        if ( function_exists( 'wpcf7' ) && shortcode_exists( 'contact-form-7' ) ) {
            echo do_shortcode( '[contact-form-7 id="contact-form" title="Contact Form"]' );
        } else {
        ?>
        <form class="contact-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
          <?php wp_nonce_field( 'mcfintech_contact', 'contact_nonce' ); ?>
          <input type="hidden" name="action" value="mcfintech_contact">
          <div class="section-header" style="margin-bottom:2rem;">
            <span class="section-label">Send a Message</span>
            <h2>How can we help?</h2>
          </div>
          <div class="form-group"><label for="name">Your Name</label><input type="text" id="name" name="name" placeholder="John Smith" required></div>
          <div class="form-group"><label for="email">Email Address</label><input type="email" id="email" name="email" placeholder="john@example.com" required></div>
          <div class="form-group"><label for="message">Message</label><textarea id="message" name="message" rows="6" placeholder="Tell us how we can help you..." required></textarea></div>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message →</button>
        </form>
        <?php } ?>
      </div>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

<?php
/* Template Name: Join Us */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">Careers</span>
    <h1>Join Our Team Today</h1>
  </div>
</div>

<section>
  <div class="container">
    <div class="section-header fade-up" style="max-width:760px;">
      <span class="section-label">Why Join Us</span>
      <h2>Be part of the fintech revolution</h2>
      <p>At MC Fintech Solutions Limited, we're at the forefront of fintech innovation, developing cutting-edge software and providing expert IT consultancy. We're always looking for talented individuals to join our dynamic team. If you're passionate about technology and finance, we want to hear from you!</p>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-header centered fade-up"><span class="section-label">Open Positions</span><h2>Find your role</h2></div>
    <div class="roles-grid">
      <div class="role-card fade-up">
        <span class="role-badge">Internship</span>
        <h3>Internship</h3>
        <p>Learn from experienced developers, assist in developing and testing financial software.</p>
        <dl class="role-req"><dt>Requirements</dt><dd>CS degree (in progress or completed)</dd><dt>Duration</dt><dd>3–6 months</dd></dl>
      </div>
      <div class="role-card fade-up delay-1">
        <span class="role-badge">Full-Time</span>
        <h3>Technician</h3>
        <p>Technical support for fintech products, ensuring smooth operation and excellent client service.</p>
        <dl class="role-req"><dt>Requirements</dt><dd>Bachelor's in IT/CS; 1–2 years experience</dd></dl>
      </div>
      <div class="role-card fade-up delay-2">
        <span class="role-badge">Full-Time</span>
        <h3>Assistant</h3>
        <p>Support senior consultants, conduct fintech trend research, and contribute to strategic projects.</p>
        <dl class="role-req"><dt>Requirements</dt><dd>Bachelor's in Business/Finance/CS; strong analytical skills</dd></dl>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner fade-up">
      <span class="section-label">Apply Now</span>
      <h2>Join Us — Click Here →</h2>
      <p>"The only limit is the extent of your imagination." — Jayla H.</p>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="btn btn-primary">Apply Now →</a>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

<?php
/* Template Name: My Way */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">AI Memory Videos</span>
    <h1>My Way: Your Memorable Voice and Appearance Recorder</h1>
    <p>Preserve your precious memories in My Way</p>
  </div>
</div>

<section>
  <div class="container">
    <div class="section-header fade-up" style="max-width:700px;">
      <span class="section-label">About My Way</span>
      <h2>Transform your photos and sounds into heartfelt video stories</h2>
      <p>Discover how My Way transforms your photos and sounds into heartfelt video stories that cherish your treasured moments.</p>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-header centered fade-up"><span class="section-label">Features</span><h2>What makes My Way special</h2></div>
    <div class="features-grid">
      <div class="feature-card fade-up"><div class="feature-num">1</div><h4>True Narrative</h4><p>Create memorable videos using your own images and audio, crafted uniquely to tell your personal story with emotional depth.</p></div>
      <div class="feature-card fade-up delay-1"><div class="feature-num">2</div><h4>Exclusive Customization</h4><p>Highly customized your video theme, avatar image, dubbing language to match personal stories and identities.</p></div>
      <div class="feature-card fade-up delay-2"><div class="feature-num">3</div><h4>Simple Operation</h4><p>Smart templates are provided, making it accessible and enjoyable for everyone to preserve memories.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-header centered fade-up"><span class="section-label">Use Cases</span><h2>Capture every milestone</h2></div>
    <div class="scenarios-grid fade-up">
      <div class="scenario-item"><span>Graduation</span></div>
      <div class="scenario-item"><span>Career Success</span></div>
      <div class="scenario-item"><span>Marriage</span></div>
      <div class="scenario-item"><span>Childbirth</span></div>
      <div class="scenario-item"><span>Testament</span></div>
      <div class="scenario-item"><span>Others</span></div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div style="max-width:680px;margin:0 auto;text-align:center;" class="fade-up">
      <div class="stars" style="justify-content:center;margin-bottom:1.5rem;"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <blockquote style="font-family:var(--font-heading);font-size:1.3rem;font-style:italic;color:var(--text-primary);line-height:1.5;margin-bottom:1.25rem;">"My Way transformed our special moments into unforgettable stories with heartfelt creativity and flawless execution."</blockquote>
      <div class="testimonial-author" style="text-align:center;"><strong>Emily Parker</strong><span>Event Coordinator</span></div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner fade-up">
      <span class="section-label">Start Today</span>
      <h2>Ready to preserve your memories?</h2>
      <p>Contact us to learn more about My Way and start creating your video story.</p>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="btn btn-primary">Get Started →</a>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

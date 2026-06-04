<?php
/* Template Name: AI Videos */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">AI-Powered</span>
    <h1>AI Videos</h1>
    <p>Discover Distinctive Advantages and Impactful Results</p>
  </div>
</div>

<section>
  <div class="container">
    <div class="section-header centered fade-up">
      <span class="section-label">Our AI Video Services</span>
      <h2>Exclusive AI video experiences</h2>
      <p>Explore three exclusive AI video services designed to preserve memories, enhance professional presence, and engage financial audiences.</p>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="ai-featured">
      <div class="ai-card fade-up">
        <div class="ai-card-icon">🎬</div>
        <h3>My Way: Cherished Memory Videos</h3>
        <p>Craft heartfelt AI-generated videos capturing milestones like weddings and graduations, creating lasting personal keepsakes.</p>
        <a href="<?php echo esc_url( home_url( '/my-way-project/' ) ); ?>" class="read-more" style="margin-top:1rem;display:inline-flex;">Explore My Way →</a>
      </div>
      <div class="ai-card fade-up delay-1">
        <div class="ai-card-icon">✨</div>
        <h3>Aura: Professional Introduction Videos</h3>
        <p>Deliver polished personal introductions tailored for professionals, boosting confidence and making memorable first impressions.</p>
        <a href="<?php echo esc_url( home_url( '/aura-project-overview/' ) ); ?>" class="read-more" style="margin-top:1rem;display:inline-flex;">Explore Aura →</a>
      </div>
      <div class="ai-card fade-up delay-2">
        <div class="ai-card-icon">📊</div>
        <h3>儀+約你: Engaging Financial Videos</h3>
        <p>Produce captivating financial-themed AI videos featuring Mrs Cheung, designed to inform and entertain audiences effectively.</p>
        <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="read-more" style="margin-top:1rem;display:inline-flex;">Learn More →</a>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-header centered fade-up"><span class="section-label">Deep Dive</span><h2>Explore each service in detail</h2></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
      <div class="funding-card fade-up">
        <div class="funding-card-icon"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
        <h4>My Way</h4>
        <p>Transform personal photos and audio into heartfelt AI video stories. Perfect for commemorating life's most meaningful milestones.</p>
        <a href="<?php echo esc_url( home_url( '/my-way-project/' ) ); ?>" class="read-more" style="margin-top:1rem;display:inline-flex;">View Details →</a>
      </div>
      <div class="funding-card fade-up delay-1">
        <div class="funding-card-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <h4>Aura</h4>
        <p>Stand out with a stunning one-minute professional intro video featuring your digital avatar and AI-enhanced voiceovers.</p>
        <a href="<?php echo esc_url( home_url( '/aura-project-overview/' ) ); ?>" class="read-more" style="margin-top:1rem;display:inline-flex;">View Details →</a>
      </div>
      <div class="funding-card fade-up delay-2">
        <div class="funding-card-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <h4>儀+約你</h4>
        <p>Engaging AI financial videos presented by Mrs Cheung, designed to make complex financial concepts accessible and entertaining.</p>
        <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="read-more" style="margin-top:1rem;display:inline-flex;">Enquire Now →</a>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner fade-up">
      <span class="section-label">Get Started</span>
      <h2>Ready to create your AI video?</h2>
      <p>Contact us today to learn more about our AI video services and how they can transform your story.</p>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="btn btn-primary">Contact Us →</a>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

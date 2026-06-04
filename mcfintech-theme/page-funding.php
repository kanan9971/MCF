<?php
/* Template Name: Funding */
get_header();
mcfintech_nav( true );
?>

<div class="page-hero">
  <div class="page-hero-inner">
    <span class="section-label">Funding</span>
    <h1>MCF Funding Service</h1>
  </div>
</div>

<section>
  <div class="container">
    <div class="two-col-intro fade-up">
      <div class="intro-text">
        <span class="section-label">Why Choose Us</span>
        <h2>Empowering Fintech Growth in Hong Kong</h2>
        <p>In Hong Kong's dynamic FinTech landscape, we empower established players to adapt and innovate while providing startups with the targeted resources they need to scale. We also guide investors toward actionable opportunities. Our commitment is to foster growth that not only strengthens the individual businesses but also enhances the broader financial community, reinforcing Hong Kong's position as a global FinTech hub.</p>
      </div>
      <div class="intro-deco">
        <div class="intro-deco-pattern"></div>
        <div class="intro-deco-badge"><span class="badge-main">HK FinTech</span><span class="badge-sub">Global Hub</span></div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-header fade-up"><span class="section-label">Opportunities</span><h2>Funding Opportunities</h2></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;">
      <div class="promo-card fade-up"><span class="section-label">Enterprise Innovation</span><p>Provide funding consulting service to facilitate the adoption of cutting-edge fintech solutions by local enterprises, organisations, and the public sector, with a view to promoting innovation and technology in Hong Kong's financial industry.</p></div>
      <div class="promo-card fade-up delay-1"><span class="section-label">Talent Development</span><p>Provide funding consulting service to technology talent for them to undertake research and development work in Hong Kong, and to local enterprises for their staff to receive fintech training.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-header fade-up">
      <span class="section-label">Our Commitment</span>
      <h2>Funding Scheme and Support</h2>
      <p>At MC Fintech Solutions Limited, we are committed to fostering innovation and technological advancement in Hong Kong's fintech sector. Our funding initiatives aim to support local enterprises, startups, and talent in driving the future of financial technology.</p>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-header centered fade-up"><span class="section-label">Supporting Services</span><h2>How We Help You Succeed</h2></div>
    <div class="funding-grid">
      <div class="funding-card fade-up"><div class="funding-card-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><h4>Fundraising Solution</h4><p>End-to-end fundraising support to connect your fintech venture with the right investors and capital sources.</p></div>
      <div class="funding-card fade-up delay-1"><div class="funding-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><h4>Pitch Deck Creation Service</h4><p>Compelling, investor-ready pitch decks that articulate your vision and demonstrate market opportunity.</p></div>
      <div class="funding-card fade-up delay-2"><div class="funding-card-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><h4>Financial Modeling Service</h4><p>Robust financial models and projections to support funding applications and strategic planning.</p></div>
      <div class="funding-card fade-up"><div class="funding-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h4>Investment Outreach Service</h4><p>Strategic outreach to our network of investors, venture capital firms, and institutional backers.</p></div>
      <div class="funding-card fade-up delay-1"><div class="funding-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h4>Market Research Support</h4><p>Data-driven market research to validate your concept, size opportunities, and inform strategy.</p></div>
      <div class="funding-card fade-up delay-2"><div class="funding-card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><h4>Fintech Legal Support Service</h4><p>Expert legal guidance on licensing, compliance, regulatory requirements, and funding agreements.</p></div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner fade-up">
      <span class="section-label">Get Started</span>
      <h2>Ready to secure your funding?</h2>
      <p>Contact our team today to learn how we can support your fintech journey.</p>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="btn btn-primary">Contact Us →</a>
    </div>
  </div>
</section>

<?php
mcfintech_footer_html();
get_footer();

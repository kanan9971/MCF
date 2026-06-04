<?php
/**
 * MC Fintech Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Theme Setup
function mcfintech_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', [
        'height'      => 60,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ] );
    add_theme_support( 'woocommerce' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'mcfintech' ),
        'footer'  => __( 'Footer Navigation', 'mcfintech' ),
    ] );
}
add_action( 'after_setup_theme', 'mcfintech_setup' );

// Enqueue Scripts & Styles
function mcfintech_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'mcfintech-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400&display=swap',
        [],
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'mcfintech-style',
        get_stylesheet_uri(),
        [ 'mcfintech-fonts' ],
        wp_get_theme()->get( 'Version' )
    );

    // Main JS
    wp_enqueue_script(
        'mcfintech-main',
        get_template_directory_uri() . '/js/main.js',
        [],
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'mcfintech_scripts' );

// Helper: Navigation HTML (shared across templates)
function mcfintech_nav( $dark = true ) {
    $class = $dark ? 'nav-dark' : 'nav-light';
    $home  = home_url( '/' );
    ?>
    <nav class="site-nav <?php echo esc_attr( $class ); ?>" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="<?php echo esc_url( $home ); ?>" class="nav-logo">MC Fintech</a>
        <ul class="nav-menu" role="list">
          <li><a href="<?php echo esc_url( $home ); ?>">Home</a></li>
          <li><a href="<?php echo esc_url( home_url( '/about-us-cone/' ) ); ?>">About Us</a></li>
          <li><a href="<?php echo esc_url( home_url( '/sample-page/' ) ); ?>">Services</a></li>
          <li><a href="<?php echo esc_url( home_url( '/funding/' ) ); ?>">Funding</a></li>
          <li><a href="<?php echo esc_url( home_url( '/178-2/' ) ); ?>">Promotion</a></li>
          <li class="nav-dropdown">
            <button aria-expanded="false" aria-haspopup="true">AI Videos ▾</button>
            <ul class="dropdown-menu" role="list">
              <li><a href="<?php echo esc_url( home_url( '/my-way-project/' ) ); ?>">My Way</a></li>
              <li><a href="<?php echo esc_url( home_url( '/aura-project-overview/' ) ); ?>">Aura</a></li>
            </ul>
          </li>
          <li><a href="<?php echo esc_url( home_url( '/shop/' ) ); ?>">Shop</a></li>
          <li><a href="<?php echo esc_url( home_url( '/test/' ) ); ?>">Join Us</a></li>
          <li><a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a href="#" class="nav-lang">EN / 中</a>
          <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>" class="nav-cta">Contact</a>
        </div>
        <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-drawer" role="dialog" aria-label="Mobile navigation">
      <a href="<?php echo esc_url( $home ); ?>">Home</a>
      <a href="<?php echo esc_url( home_url( '/about-us-cone/' ) ); ?>">About Us</a>
      <a href="<?php echo esc_url( home_url( '/sample-page/' ) ); ?>">Services</a>
      <a href="<?php echo esc_url( home_url( '/funding/' ) ); ?>">Funding</a>
      <a href="<?php echo esc_url( home_url( '/178-2/' ) ); ?>">Promotion</a>
      <a href="<?php echo esc_url( home_url( '/ai-videos/' ) ); ?>">AI Videos</a>
      <a href="<?php echo esc_url( home_url( '/my-way-project/' ) ); ?>">My Way</a>
      <a href="<?php echo esc_url( home_url( '/aura-project-overview/' ) ); ?>">Aura</a>
      <a href="<?php echo esc_url( home_url( '/shop/' ) ); ?>">Shop</a>
      <a href="<?php echo esc_url( home_url( '/test/' ) ); ?>">Join Us</a>
      <a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>">Contact</a>
    </div>
    <?php
}

// Helper: Footer HTML
function mcfintech_footer_html() {
    $home = home_url( '/' );
    ?>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="logo">MC Fintech</span>
            <address>12/F Boss Commercial Centre, 28 Ferry Street, Yau Ma Tei, Kowloon, Hong Kong</address>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="<?php echo esc_url( $home ); ?>">Home</a></li>
              <li><a href="<?php echo esc_url( home_url( '/about-us-cone/' ) ); ?>">About Us</a></li>
              <li><a href="<?php echo esc_url( home_url( '/sample-page/' ) ); ?>">Services</a></li>
              <li><a href="<?php echo esc_url( home_url( '/funding/' ) ); ?>">Funding</a></li>
              <li><a href="<?php echo esc_url( home_url( '/test/' ) ); ?>">Join Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="<?php echo esc_url( home_url( '/178-2/' ) ); ?>">Promotion</a></li>
              <li><a href="<?php echo esc_url( home_url( '/ai-videos/' ) ); ?>">AI Videos</a></li>
              <li><a href="<?php echo esc_url( home_url( '/my-way-project/' ) ); ?>">My Way</a></li>
              <li><a href="<?php echo esc_url( home_url( '/aura-project-overview/' ) ); ?>">Aura</a></li>
              <li><a href="<?php echo esc_url( home_url( '/shop/' ) ); ?>">Shop</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>">Contact</a></li>
              <li><a href="<?php echo esc_url( home_url( '/contact-1/' ) ); ?>">Directions</a></li>
              <li><a href="<?php echo esc_url( wp_login_url() ); ?>">Login</a></li>
              <li><a href="<?php echo esc_url( wp_registration_url() ); ?>">Register</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; All rights reserved MC Fintech Solutions Limited</p>
          <div class="social-icons">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Twitter/X"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
    <?php
}

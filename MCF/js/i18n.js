/* MC Fintech Solutions Ltd — i18n 中英文切换 */
/* Chinese content sourced from original mcfintech.com/zh/ pages */

(function () {
  'use strict';

  const STORAGE_KEY = 'mcfintech_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  const translations = {
    // ===== 通用导航 (from doc section 4.1) =====
    'nav-home': { en: 'Home', zh: '首頁' },
    'nav-about': { en: 'About Us', zh: '關於我們' },
    'nav-services': { en: 'Services', zh: '服務' },
    'nav-funding': { en: 'Funding', zh: '資助' },
    'nav-promotion': { en: 'Promotion', zh: '推廣' },
    'nav-ai-videos': { en: 'AI Videos ▾', zh: 'AI Videos ▾' },
    'nav-my-way': { en: 'My Way', zh: 'My Way' },
    'nav-aura': { en: 'Aura', zh: 'Aura' },
    'nav-shop': { en: 'Shop', zh: '商店' },
    'nav-join-us': { en: 'Join Us', zh: '加入我們' },
    'nav-contact': { en: 'Contact', zh: '聯絡我們' },
    'nav-lang-label-en': { en: '<span class="lang-active">EN</span> / 中', zh: 'EN / <span class="lang-active">中</span>' },
    'nav-cta': { en: 'Contact', zh: '聯絡我們' },
    'nav-logo': { en: 'MC Fintech', zh: 'MC Fintech' },

    // 移动端抽屉
    'drawer-home': { en: 'Home', zh: '首頁' },
    'drawer-about': { en: 'About Us', zh: '關於我們' },
    'drawer-services': { en: 'Services', zh: '服務' },
    'drawer-funding': { en: 'Funding', zh: '資助' },
    'drawer-promotion': { en: 'Promotion', zh: '推廣' },
    'drawer-ai-videos': { en: 'AI Videos', zh: 'AI Videos' },
    'drawer-my-way': { en: 'My Way', zh: 'My Way' },
    'drawer-aura': { en: 'Aura', zh: 'Aura' },
    'drawer-shop': { en: 'Shop', zh: '商店' },
    'drawer-join-us': { en: 'Join Us', zh: '加入我們' },
    'drawer-contact': { en: 'Contact', zh: '聯絡我們' },

    // 页脚 (from doc section 4.1 footer)
    'footer-company': { en: 'Company', zh: 'Company' },
    'footer-products': { en: 'Products', zh: 'Products' },
    'footer-connect': { en: 'Connect', zh: 'Connect' },
    'footer-home': { en: 'Home', zh: '首頁' },
    'footer-about': { en: 'About Us', zh: '關於我們' },
    'footer-services': { en: 'Services', zh: '服務' },
    'footer-funding': { en: 'Funding', zh: '資助' },
    'footer-join-us': { en: 'Join Us', zh: '加入我們' },
    'footer-promotion': { en: 'Promotion', zh: '推廣' },
    'footer-ai-videos': { en: 'AI Videos', zh: 'AI Videos' },
    'footer-my-way': { en: 'My Way', zh: 'My Way' },
    'footer-aura': { en: 'Aura', zh: 'Aura' },
    'footer-shop': { en: 'Shop', zh: '商店' },
    'footer-contact': { en: 'Contact', zh: '聯絡我們' },
    'footer-directions': { en: 'Directions', zh: '取得位置' },
    'footer-login': { en: 'Login', zh: 'Login' },
    'footer-register': { en: 'Register', zh: 'Register' },
    'footer-copyright': {
      en: '© All rights reserved MC Fintech Solutions Limited',
      zh: '©萬利科技有限公司版權所有'
    },
    'footer-address': {
      en: '12/F Boss Commercial Centre, 28 Ferry Street, Yau Ma Tei, Kowloon, Hong Kong',
      zh: '香港九龍佐敦渡船街28號寶時商業中心12樓'
    },

    // ===== 首页 index.html (from doc section 3.14 / 4.1) =====
    'index-hero-tagline': { en: 'Think and Link', zh: '思考和連接' },
    'index-hero-quote': {
      en: '"Ignoring technological change in a financial system based upon technology is like a mouse starving to death because someone moved their cheese"',
      zh: '"忽視基於技術的金融體系中的技術變革，就像一隻老鼠因為有人移動了他們的乳酪而餓死一樣。"'
    },
    'index-hero-attr': { en: '— Chris Skinner', zh: '— 克里斯·斯金納' },
    'index-hero-cta': { en: 'Explore ↓', zh: '探索更多 ↓' },
    'index-about-label': { en: 'About MC Fintech', zh: 'About MC Fintech' },
    'index-about-title': { en: 'Innovative Enterprise Management Systems', zh: 'Innovative Enterprise Management Systems' },
    'index-about-desc': {
      en: 'MC Fintech Solutions Ltd develops innovative enterprise management computer systems. Its comprehensive solutions boost business efficiency, optimize human resource use, and, backed by years of professional experience, deliver effective, user-friendly, stable, and reliable tools to enhance operations.',
      zh: '萬利科技致力於開發創新企業管理電腦系統，其全面解決方案可提升業務效率、優化人力資源利用，並憑藉多年專業經驗，提供高效、易用、穩定可靠的工具以提升營運效率。'
    },
    'index-badge-main': { en: 'MC Fintech', zh: 'MC Fintech' },
    'index-badge-sub': { en: 'Est. Hong Kong', zh: 'Est. Hong Kong' },
    'index-service-label': { en: 'What We Offer', zh: 'What We Offer' },
    'index-service-title': { en: 'Our Service', zh: '我們的服務' },
    'index-service-desc': {
      en: 'MC Fintech delivers cutting-edge fintech and tech-integrated services, including AI avatar video creation, IT-driven operational solutions, computer hardware retail, and AI digital person-powered financial query support. With a focus on blending innovation and practicality, it tailors services to streamline workflows, enhance efficiency, and provide seamless, intelligent experiences, empowering clients to thrive in a tech-driven landscape.',
      zh: '萬利科技公司提供尖端金融科技及技術整合服務，包括 AI 虛擬形象影片製作、IT 驅動的營運解決方案、電腦硬體零售以及 AI 數字人金融諮詢支援。 萬利科技公司著重於創新與實用的融合，透過客製化服務簡化工作流程、提升效率，並提供無縫智慧體驗，賦能客戶在科技驅動的時代蓬勃發展。'
    },
    'index-service-readmore': { en: 'Read More →', zh: '瞭解更多 →' },
    'index-promise-label': { en: 'Our Promise', zh: 'Our Promise' },
    'index-promise-title': { en: 'Customer First', zh: '以客爲先' },
    'index-promise-desc': {
      en: 'Our commitment is to customer-centric service, bringing breakthroughs in enterprise management through effective, reliable, and specialized services.',
      zh: '我們的承諾是以客戶為本，為企業管理帶來突破，提供有效、可靠及專門的服務。'
    },
    'index-promise-readmore': { en: 'Read More →', zh: '瞭解更多 →' },
    'index-services-label': { en: 'Services', zh: 'Services' },
    'index-services-title': { en: 'Professional services to streamline your business', zh: 'Professional services to streamline your business' },
    'index-services-desc': {
      en: 'We offer a range of convenient and professional services designed to streamline your business operations. By choosing MC Fintech Solutions Ltd, you will gain access to a professional team that delivers quick, reliable, and specialized services, making your business management more efficient, secure, and effective.',
      zh: '我們提供一系列便捷專業的服務，旨在簡化您的業務運作。選擇萬利科技公司，您將獲得一支專業團隊，提供快速、可靠且專業的服務，讓您的業務管理更有效率、更安全、更有效。'
    },
    'index-service1-title': { en: 'Enterprise Network Solutions', zh: '企業網絡解決方案' },
    'index-service1-desc': {
      en: 'Our Enterprise Network Solutions, tailored for fintech, connect your systems, partners, and clients with secure, real-time connectivity. Built to fortify data flow, align with compliance, and scale with your growth, they streamline collaboration, mitigate risks, and keep operations agile.',
      zh: '我們專為金融科技量身訂製的企業網路解決方案，為您的系統、合作夥伴和客戶提供安全、即時的連線。這些解決方案旨在強化資料流，符合合規性，並隨著您的業務成長而擴展，從而簡化協作、降低風險並保持敏捷營運。'
    },
    'index-service2-title': { en: 'Enterprise Cloud Solutions', zh: '企業雲端解決方案' },
    'index-service2-desc': {
      en: 'Harnessing secure cloud infrastructure, we craft and deploy scalable platforms to elevate your financial operations — from transaction processing and regulatory reporting to global team collaboration. Our solutions are built to cut costs, enhance flexibility, and grow with your business demands, simplifying complex tasks and fueling organizational agility.',
      zh: '我們利用安全的雲端基礎架構，建構並部署可擴展的平台，以提升您的財務營運—從交易處理、監管報告到全球團隊協作。我們的解決方案旨在降低成本、增強靈活性，並隨著您的業務需求而擴展，簡化複雜的任務並提升組織敏捷性。'
    },
    'index-service3-title': { en: 'Cyber Security Solutions', zh: '網路安全解決方案' },
    'index-service3-desc': {
      en: 'Using cutting-edge threat intelligence, we develop and strengthen defenses to shield your financial assets — from transaction data and client information to core systems. Our solutions are built to block breaches, ensure compliance, and adapt to emerging risks, safeguarding daily operations and reinforcing organizational resilience.',
      zh: '我們運用尖端威脅情報，開發並強化防禦措施，保護您的金融資產－從交易資料、客戶資訊到核心系統。我們的解決方案旨在阻止違規行為，確保合規性，並適應新興風險，保障日常營運安全並增強組織韌性。'
    },
    'index-service4-title': { en: 'AI Solutions', zh: 'AI Solutions' },
    'index-service4-desc': {
      en: 'Harnessing state-of-the-art artificial intelligence, we build and deploy smart tools to transform your financial processes — from fraud detection and algorithmic trading to personalized client insights. Our solutions are built to sharpen decision-making, automate complex tasks, and align with shifting market dynamics, enhancing operational precision and driving business growth.',
      zh: 'Harnessing state-of-the-art artificial intelligence, we build and deploy smart tools to transform your financial processes—from fraud detection and algorithmic trading to personalized client insights. Our solutions are built to sharpen decision-making, automate complex tasks, and align with shifting market dynamics, enhancing operational precision and driving business growth.'
    },
    'index-testimonials-label': { en: 'Testimonials', zh: 'Testimonials' },
    'index-testimonials-title': { en: 'What people are saying', zh: '客戶對我們的評價' },
    'index-testimonial1': {
      en: '"MC Fintech Solutions Ltd\'s enterprise management system has significantly improved our operational efficiency and customer satisfaction."',
      zh: '"萬利科技有限公司的企業管理系統大大提升了我們的運作效率和客戶滿意度。"'
    },
    'index-testimonial1-author': { en: 'Liz S.', zh: 'Liz S.' },
    'index-testimonial1-role': { en: 'Retailer', zh: '零售商' },
    'index-testimonial2': {
      en: '"Our collaboration with MC Fintech Solutions on a joint research project exceeded all expectations. Their team\'s insights into emerging fintech trends and rigorous analytical approach significantly enhanced the quality of our findings."',
      zh: '"我們與萬利科技有限公司在聯合研究計畫上的合作超越了所有人的預期。他們的團隊對新興金融科技趨勢的洞察力和嚴謹的分析方法大大提高了我們研究結果的品質。"'
    },
    'index-testimonial2-author': { en: 'Sarah C.', zh: 'Sarah C.' },
    'index-testimonial2-role': { en: 'Financier', zh: '金融家' },
    'index-testimonial3': {
      en: '"Their commitment to data protection and understanding of financial systems allowed us to create a robust solution tailored for fintech applications."',
      zh: '"他們對數據保護的承諾和對金融系統的理解使我們能夠創建針對金融科技應用的強大解決方案。"'
    },
    'index-testimonial3-author': { en: 'David Z.', zh: 'David Z.' },
    'index-testimonial3-role': { en: 'Product Manager', zh: '產品經理' },
    'index-cooperation-label': { en: 'Cooperation', zh: 'Cooperation' },
    'index-cooperation-title': { en: 'We welcome all forms of cooperation', zh: '我們歡迎任何形式的合作' },
    'index-cooperation-desc': {
      en: 'Join MC Fintech Solutions Ltd and be part of a dynamic team revolutionizing enterprise management with innovative technology. We\'d love to hear from you!',
      zh: '加入萬利科技有限公司，成為充滿活力的團隊的一員，用創新技術徹底改變企業管理。我們很樂意聽取您的意見！'
    },
    'index-cooperation-btn': { en: 'Join Us →', zh: '加入我們 →' },

    // ===== 关于我们 about.html (from doc section 3.2 / 4.2) =====
    'about-hero-label': { en: 'Who We Are', zh: 'Who We Are' },
    'about-hero-title': { en: 'About Us', zh: '關於我們' },
    'about-story-label': { en: 'Our Story', zh: 'Our Story' },
    'about-story-title': { en: 'Built on Experience. Driven by Innovation.', zh: 'Built on Experience. Driven by Innovation.' },
    'about-story-desc': {
      en: 'Established with a rich history of industry service experience, MC Fintech Solutions Ltd has successfully served hundreds of renowned group companies and brand clients. With a passion for design, keen insight into marketing trends, and a deep understanding of the market, we thrive alongside our clients in a dynamic environment.',
      zh: '萬利科技有限公司擁有豐富的行業服務經驗，已成功服務數百家知名集團公司和品牌客戶。憑藉對設計的熱情、對行銷趨勢的敏銳洞察力和對市場的深刻理解，我們在充滿活力的環境中與客戶一起蓬勃發展。'
    },
    'about-mission-label': { en: 'Our Mission', zh: '我們的使命' },
    'about-mission-title': { en: 'Streamlining Business, Powering Growth', zh: 'Streamlining Business, Powering Growth' },
    'about-mission-desc': {
      en: 'Our mission is to streamline business operations, making them more efficient, excellent and effective. Through our enterprise management systems, we help various industries accelerate their development.',
      zh: '我們的使命是簡化業務運營，使其更有效率、卓越與有影響力。透過我們的企業管理系統，我們幫助各行各業加速發展。'
    },
    'about-mission-badge': { en: 'Mission Driven', zh: 'Mission Driven' },
    'about-mission-sub': { en: 'Innovation & Excellence', zh: 'Innovation & Excellence' },
    'about-values-label': { en: 'Our Values', zh: '我們的價值' },
    'about-values-title': { en: 'The principles that guide everything we do', zh: 'The principles that guide everything we do' },
    'about-value1': { en: 'People-Oriented and Heartfelt Service', zh: '以人為本與用心服務' },
    'about-value2': { en: 'Perfection Pursuit — Integrity and Innovation', zh: '追求完美誠信與創新' },
    'about-value3': { en: 'Promote Business Innovation, Service to Enhance Brand Value', zh: '推動業務創新，服務提升品牌價值' },
    'about-value4': { en: 'Emphasis on Technology — Using Technology to Create Value for You', zh: '重視科技通過科技為您創造價值' },
    'about-value5': { en: 'Customer-First Service — We foster transparency and security', zh: 'Customer-First Service — We foster transparency and security' },
    'about-value6': { en: 'We aim to connect customer with us through Innovations and Creative Thinking.', zh: '我們的目標是透過創新與創意思維連繫客戶。' },
    'about-cta-label': { en: 'Get In Touch', zh: 'Get In Touch' },
    'about-cta-title': { en: 'Ready to work together?', zh: 'Ready to work together?' },
    'about-cta-desc': {
      en: 'Whether you\'re an enterprise looking to modernize, or a startup ready to scale — we\'re here to help.',
      zh: 'Whether you\'re an enterprise looking to modernize, or a startup ready to scale — we\'re here to help.'
    },
    'about-cta-btn': { en: 'Contact Us →', zh: '聯絡我們 →' },

    // ===== 服务 services.html (from doc section 3.3 / 4.3) =====
    'services-hero-label': { en: 'What We Offer', zh: 'What We Offer' },
    'services-hero-title': { en: 'Services', zh: '服務' },
    'services-intro': {
      en: 'We offer a range of convenient and professional services designed to streamline your business operations. By choosing MC Fintech Solutions Ltd, you will gain access to a professional team that delivers quick, reliable, and specialized services, making your business management more efficient, secure, and effective.',
      zh: '我們提供一系列便捷專業的服務，旨在簡化您的業務運作。選擇萬利科技公司，您將獲得一支專業團隊，提供快速、可靠且專業的服務，讓您的業務管理更有效率、更安全、更有效。'
    },
    'services-quote': {
      en: '"One of the hardest things to do in technology is disrupt yourself."',
      zh: '"在技術領域，最難做的事情之一就是阻擋自己。"'
    },
    'services-quote-author': { en: '— Matt Mullenweg', zh: '— 馬特·查爾斯·穆倫維格' },

    // ===== 融资 funding.html (from doc section 3.4 / 4.4) =====
    'funding-hero-label': { en: 'Funding', zh: 'Funding' },
    'funding-hero-title': { en: 'MCF Funding Service', zh: 'MCF融資服務' },
    'funding-why-label': { en: 'Why Choose Us', zh: '爲什麽選擇我們' },
    'funding-why-title': { en: 'Empowering Fintech Growth in Hong Kong', zh: 'Empowering Fintech Growth in Hong Kong' },
    'funding-why-desc': {
      en: 'In Hong Kong\'s dynamic FinTech landscape, we empower established players to adapt and innovate while providing startups with the targeted resources they need to scale. We also guide investors toward actionable opportunities. Our commitment is to foster growth that not only strengthens the individual businesses but also enhances the broader financial community, reinforcing Hong Kong\'s position as a global FinTech hub.',
      zh: '在香港蓬勃發展的金融科技領域，我們賦能成熟企業，使其適應並創新，同時為新創公司提供其拓展規模所需的精準資源。我們也引導投資人把握切實可行的投資機會。我們致力於促進成長，不僅增強個體企業實力，更提升整個金融界的水平，鞏固香港作為全球金融科技中心的地位。'
    },
    'funding-badge-main': { en: 'HK FinTech', zh: 'HK FinTech' },
    'funding-badge-sub': { en: 'Global Hub', zh: 'Global Hub' },
    'funding-opp-label': { en: 'Opportunities', zh: 'Opportunities' },
    'funding-opp-title': { en: 'Funding Opportunities', zh: '萬利科技有限公司的融資機會' },
    'funding-opp1-label': { en: 'Enterprise Innovation', zh: 'Enterprise Innovation' },
    'funding-opp1-desc': {
      en: 'Provide funding consulting service to facilitate the adoption of cutting-edge fintech solutions by local enterprises, organisations, and the public sector, with a view to promoting innovation and technology in Hong Kong\'s financial industry.',
      zh: '提供融資諮詢服務，促進本地企業、機構及公部門採用尖端金融科技解決方案，推動香港金融業的創新科技發展。'
    },
    'funding-opp2-label': { en: 'Talent Development', zh: 'Talent Development' },
    'funding-opp2-desc': {
      en: 'Provide funding consulting service to technology talent for them to undertake research and development work in Hong Kong, and to local enterprises for their staff to receive fintech training.',
      zh: '提供融資咨詢服務為科技人才提供在港從事研發工作的機會，並為本地企業提供員工接受金融科技培訓的機會。'
    },
    'funding-commit-label': { en: 'Our Commitment', zh: 'Our Commitment' },
    'funding-commit-title': { en: 'Funding Scheme and Support', zh: '資助計畫及支持' },
    'funding-commit-desc': {
      en: 'At MC Fintech Solutions Limited, we are committed to fostering innovation and technological advancement in Hong Kong\'s fintech sector. Our funding initiatives aim to support local enterprises, startups, and talent in driving the future of financial technology.',
      zh: '在萬利科技有限公司，我們致力於促進香港金融科技領域的創新和技術進步。我們的資助計畫旨在支持本地企業、新創企業和人才推動金融科技的未來。'
    },
    'funding-support-label': { en: 'Supporting Services', zh: 'Supporting Service' },
    'funding-support-title': { en: 'How We Help You Succeed', zh: 'How We Help You Succeed' },
    'funding-card1-title': { en: 'Fundraising Solution', zh: 'Fundraising Solution' },
    'funding-card1-desc': {
      en: 'End-to-end fundraising support to connect your fintech venture with the right investors and capital sources.',
      zh: '我們的募款解決方案簡化了資金獲取管道，將您與目標投資者聯繫起來，並引導您從策略到結束的每個步驟，以實現高效、成功的融資。'
    },
    'funding-card2-title': { en: 'Pitch Deck Creation Service', zh: 'Pitch Deck Creation Service' },
    'funding-card2-desc': {
      en: 'Compelling, investor-ready pitch decks that articulate your vision and demonstrate market opportunity.',
      zh: '我們的簡報創建服務精心製作引人注目、以投資者為中心的簡報——將清晰的故事敘述與數據視覺化相結合——以突出您的願景並激發資金興趣。'
    },
    'funding-card3-title': { en: 'Financial Modeling Service', zh: 'Financial Modeling Service' },
    'funding-card3-desc': {
      en: 'Robust financial models and projections to support funding applications and strategic planning.',
      zh: '我們的財務建模服務可以建立穩健的、適合投資者的預測（映射成長、風險和回報），以清晰的、有數據支持的見解來加強您的融資案例。'
    },
    'funding-card4-title': { en: 'Investment Outreach Service', zh: 'Investment Outreach Service' },
    'funding-card4-desc': {
      en: 'Strategic outreach to our network of investors, venture capital firms, and institutional backers.',
      zh: '我們的投資拓展服務將您與目標投資者聯繫起來，利用量身定制的溝通和關係建立來擴大您的融資機會。'
    },
    'funding-card5-title': { en: 'Market Research Support', zh: 'Market Research Support' },
    'funding-card5-desc': {
      en: 'Data-driven market research to validate your concept, size opportunities, and inform strategy.',
      zh: '我們的市場研究支援服務提供有關趨勢、競爭對手和機會的可行見解，以加強您的定位和投資者吸引力。'
    },
    'funding-card6-title': { en: 'Fintech Legal Support Service', zh: 'Fintech Legal Support Service' },
    'funding-card6-desc': {
      en: 'Expert legal guidance on licensing, compliance, regulatory requirements, and funding agreements.',
      zh: '我們的金融科技法律支援服務涵蓋監管框架、合約和合規性—以堅實的法律基礎保障您的營運並建立投資者信任。'
    },
    'funding-cta-label': { en: 'Get Started', zh: 'Get Started' },
    'funding-cta-title': { en: 'Ready to secure your funding?', zh: 'Ready to secure your funding?' },
    'funding-cta-desc': {
      en: 'Contact our team today to learn how we can support your fintech journey.',
      zh: 'Contact our team today to learn how we can support your fintech journey.'
    },
    'funding-cta-btn': { en: 'Contact Us →', zh: '聯絡我們 →' },

    // ===== 推广 promotion.html (from doc section 3.5 / 4.5) =====
    'promotion-hero-label': { en: 'Latest Innovations', zh: 'Latest Innovations' },
    'promotion-hero-title': { en: 'Store', zh: '商店' },
    'promotion-hero-desc': {
      en: 'Join MC Fintech Solutions Limited: Innovate the Future of Finance',
      zh: '加入萬利科技有限公司：創新金融的未來'
    },
    'promotion-intro-label': { en: 'What\'s New', zh: 'What\'s New' },
    'promotion-intro-title': { en: 'At the forefront of fintech innovation', zh: 'At the forefront of fintech innovation' },
    'promotion-intro-desc': {
      en: 'At MC Fintech Solutions Limited, we\'re passionate about revolutionizing the financial technology landscape. We\'re thrilled to introduce our latest innovations designed to keep you at the forefront of the fintech industry.',
      zh: '在萬利有限公司，我們熱衷於徹底改變金融技術領域。我們很高興推出我們最新的創新產品，旨在讓您始終處於金融科技行業的前沿。'
    },
    'promotion-cta-label': { en: 'Don\'t Miss Out', zh: 'Don\'t Miss Out' },
    'promotion-cta-title': { en: 'Transform your financial operations', zh: '連接我們' },
    'promotion-cta-desc': {
      en: 'Don\'t miss this opportunity to transform your financial operations with MC Fintech Solutions Limited. Contact us today to schedule a demo and experience the future of fintech!',
      zh: '不要錯過這個與萬利科技有限公司一起改變您的財務運營的機會。立即聯繫我們，安排演示並體驗金融科技的未來！'
    },
    'promotion-cta-btn': { en: 'Contact Us →', zh: '馬上購物 →' },

    // promotion product cards (from doc section 4.5)
    'promotion-date1': { en: 'Aug 23, 2026', zh: '2026年8月23日' },
    'promotion-product1-title': { en: 'F Plus Program', zh: 'F Plus 計劃' },
    'promotion-product1-desc': { en: 'Advanced AI-driven algorithm to detect and analyze currency trends.', zh: '先進的 AI 驅動演算法，用於檢測和分析貨幣趨勢。' },
    'promotion-date2': { en: 'Oct 14, 2026', zh: '2026年10月14日' },
    'promotion-product2-title': { en: 'Smartwatch', zh: '智能手錶' },
    'promotion-product2-desc': { en: 'Light-weight and customized watch for daily operations', zh: '輕巧客製化的日常運營用手錶' },
    'promotion-date3': { en: 'Aug 23, 2026', zh: '2026年8月23日' },
    'promotion-product3-title': { en: 'Laptop 1000', zh: '手提電腦1000' },
    'promotion-product3-desc': { en: 'High quality and user-friendly laptop to assist your work', zh: '高品質、使用者友善的筆記型電腦，助力您的工作' },

    // ===== AI视频 ai-videos.html (from doc section 3.6 / 4.6) =====
    'aivideos-hero-label': { en: 'AI-Powered', zh: 'AI-Powered' },
    'aivideos-hero-title': { en: 'AI Videos', zh: 'AI Videos' },
    'aivideos-hero-desc': {
      en: 'Discover Distinctive Advantages and Impactful Results',
      zh: '發現獨特的優勢和有影響力的成果'
    },
    'aivideos-intro-label': { en: 'Our AI Video Services', zh: 'Our AI Video Services' },
    'aivideos-intro-title': { en: 'Exclusive AI video experiences', zh: 'Exclusive AI video experiences' },
    'aivideos-intro-desc': {
      en: 'Explore three exclusive AI video services designed to preserve memories, enhance professional presence, and engage financial audiences.',
      zh: '探索三種旨在保存記憶、增強專業形象和吸引金融受眾的獨家 AI 影片服務。'
    },
    'aivideos-card1-title': { en: 'My Way: Cherished Memory Videos', zh: 'My Way：珍貴的記憶視頻' },
    'aivideos-card1-desc': {
      en: 'Craft heartfelt AI-generated videos capturing milestones like weddings and graduations, creating lasting personal keepsakes.',
      zh: '製作感人的AI生成視頻，記錄婚禮和畢業典禮等里程碑事件，創造持久的個人紀念品。'
    },
    'aivideos-card1-btn': { en: 'Explore My Way →', zh: 'Explore My Way →' },
    'aivideos-card2-title': { en: 'Aura: Professional Introduction Videos', zh: 'Aura: Professional Introduction Videos' },
    'aivideos-card2-desc': {
      en: 'Deliver polished personal introductions tailored for professionals, boosting confidence and making memorable first impressions.',
      zh: '提供針對專業人士量身訂製的精美個人介紹，增強信心並留下令人難忘的第一印象。'
    },
    'aivideos-card2-btn': { en: 'Explore Aura →', zh: 'Explore Aura →' },
    'aivideos-card3-title': { en: '儀+約你: Engaging Financial Videos', zh: '儀+約你: 沉浸式金融視頻' },
    'aivideos-card3-desc': {
      en: 'Produce captivating financial-themed AI videos featuring Mrs Cheung, designed to inform and entertain audiences effectively.',
      zh: '製作以張女士為主角的引人入勝的金融主題人工智能視頻，旨在有效地跟觀眾交流。'
    },
    'aivideos-card3-btn': { en: 'Learn More →', zh: 'Learn More →' },
    'aivideos-deep-label': { en: 'Deep Dive', zh: 'Deep Dive' },
    'aivideos-deep-title': { en: 'Explore each service in detail', zh: 'Explore each service in detail' },
    'aivideos-deep1-desc': {
      en: 'Transform personal photos and audio into heartfelt AI video stories. Perfect for commemorating life\'s most meaningful milestones — from graduations and weddings to personal testaments.',
      zh: '製作感人的影片來保存您最珍貴的回憶，例如畢業典禮和婚禮。'
    },
    'aivideos-deep2-desc': {
      en: 'Stand out with a stunning one-minute professional intro video featuring your digital avatar, custom backgrounds, and AI-enhanced voiceovers in English, Mandarin, or Cantonese.',
      zh: '專業的個人介紹影片旨在彰顯您獨特的專業身分。'
    },
    'aivideos-deep3-desc': {
      en: 'Engaging AI financial videos presented by Mrs Cheung, designed to make complex financial concepts accessible and entertaining for a broad audience.',
      zh: 'Engaging financial-themed videos featuring Mrs Cheung, blending expertise with captivating storytelling.'
    },
    'aivideos-cta-label': { en: 'Get Started', zh: 'Get Started' },
    'aivideos-cta-title': { en: 'Ready to create your AI video?', zh: 'Ready to create your AI video?' },
    'aivideos-cta-desc': {
      en: 'Contact us today to learn more about our AI video services and how they can transform your story.',
      zh: 'Contact us today to learn more about our AI video services and how they can transform your story.'
    },
    'aivideos-cta-btn': { en: 'Contact Us →', zh: '聯絡我們 →' },

    // ===== 我的方式 my-way.html (from doc section 3.7 / 4.7) =====
    'myway-hero-label': { en: 'AI Memory Videos', zh: 'AI Memory Videos' },
    'myway-hero-title': { en: 'My Way: Your Memorable Voice and Appearance Recorder', zh: 'My Way: Your Memorable Voice and Appearance Recorder' },
    'myway-hero-desc': { en: 'Preserve your precious memories in My Way', zh: 'Preserve your precious memories in My Way' },
    'myway-about-label': { en: 'About My Way', zh: 'About My Way' },
    'myway-about-title': { en: 'Transform your photos and sounds into heartfelt video stories', zh: 'Transform your photos and sounds into heartfelt video stories' },
    'myway-about-desc': {
      en: 'Discover how My Way transforms your photos and sounds into heartfelt video stories that cherish your treasured moments.',
      zh: 'Discover how My Way transforms your photos and sounds into heartfelt video stories that cherish your treasured moments.'
    },
    'myway-features-label': { en: 'Features', zh: 'Features' },
    'myway-features-title': { en: 'What makes My Way special', zh: 'What makes My Way special' },
    'myway-feature1-title': { en: 'True Narrative', zh: 'True Narrative' },
    'myway-feature1-desc': {
      en: 'Create memorable videos using your own images and audio, crafted uniquely to tell your personal story with emotional depth.',
      zh: 'Create memorable videos using your own images and audio, crafted uniquely to tell your personal story with emotional depth.'
    },
    'myway-feature2-title': { en: 'Exclusive Customization', zh: 'Exclusive Customization' },
    'myway-feature2-desc': {
      en: 'Highly customized your video theme, avatar image, dubbing language to match personal stories and identities.',
      zh: 'Highly customized your video theme, avatar image, dubbing language to match personal stories and identities.'
    },
    'myway-feature3-title': { en: 'Simple Operation', zh: 'Simple Operation' },
    'myway-feature3-desc': {
      en: 'Smart templates are provided, making it accessible and enjoyable for everyone to preserve memories.',
      zh: 'Smart templates are provided, making it accessible and enjoyable for everyone to preserve memories.'
    },
    'myway-scenarios-label': { en: 'Use Cases', zh: 'Use Cases' },
    'myway-scenarios-title': { en: 'Capture every milestone', zh: 'Capture every milestone' },
    'myway-scenario1': { en: 'Graduation', zh: 'Graduation' },
    'myway-scenario2': { en: 'Career Success', zh: 'Career Success' },
    'myway-scenario3': { en: 'Marriage', zh: 'Marriage' },
    'myway-scenario4': { en: 'Childbirth', zh: 'Childbirth' },
    'myway-scenario5': { en: 'Testament', zh: 'Testament' },
    'myway-scenario6': { en: 'Others', zh: 'Others' },
    'myway-testimonial': {
      en: '"My Way transformed our special moments into unforgettable stories with heartfelt creativity and flawless execution."',
      zh: '"My Way transformed our special moments into unforgettable stories with heartfelt creativity and flawless execution."'
    },
    'myway-testimonial-author': { en: 'Emily Parker', zh: 'Emily Parker' },
    'myway-testimonial-role': { en: 'Event Coordinator', zh: 'Event Coordinator' },
    'myway-cta-label': { en: 'Start Today', zh: 'Start Today' },
    'myway-cta-title': { en: 'Ready to preserve your memories?', zh: 'Ready to preserve your memories?' },
    'myway-cta-desc': {
      en: 'Contact us to learn more about My Way and start creating your video story.',
      zh: 'Contact us to learn more about My Way and start creating your video story.'
    },
    'myway-cta-btn': { en: 'Get Started →', zh: 'Get Started →' },

    // ===== 光环 aura.html (from doc section 3.8 / 4.8) =====
    'aura-hero-label': { en: 'Professional AI Videos', zh: 'Professional AI Videos' },
    'aura-hero-title': { en: 'Aura: Your AI-Powered Professional Intro Video', zh: 'Aura: Your AI-Powered Professional Intro Video' },
    'aura-hero-desc': { en: 'Customize Your Introduction Video in Aura', zh: 'Customize Your Introduction Video in Aura' },
    'aura-about-label': { en: 'About Aura', zh: 'About Aura' },
    'aura-about-title': { en: 'Own your spotlight', zh: 'Own your spotlight' },
    'aura-about-desc': {
      en: 'Stand out instantly with Aura. We craft stunning, one-minute intro videos featuring your realistic digital avatar, custom professional backgrounds, and crystal-clear, AI-enhanced voiceovers – in English, Mandarin, or Cantonese. Perfect your pitch, own your spotlight. Ready to shine?',
      zh: 'Stand out instantly with Aura. We craft stunning, one-minute intro videos featuring your realistic digital avatar, custom professional backgrounds, and crystal-clear, AI-enhanced voiceovers – in English, Mandarin, or Cantonese. Perfect your pitch, own your spotlight. Ready to shine?'
    },
    'aura-advantages-label': { en: 'Advantages', zh: 'Advantages' },
    'aura-advantages-title': { en: 'Why choose Aura?', zh: 'Why choose Aura?' },
    'aura-adv1-title': { en: 'One-Minute Highlights', zh: 'One-Minute Highlights' },
    'aura-adv1-desc': { en: 'Introduce your core value during the prime attention period', zh: 'Introduce your core value during the prime attention period' },
    'aura-adv2-title': { en: 'Realistic and Vivid Portraits', zh: 'Realistic and Vivid Portraits' },
    'aura-adv2-desc': { en: 'Generate a one-to-one dynamic image based on your photos', zh: 'Generate a one-to-one dynamic image based on your photos' },
    'aura-adv3-title': { en: 'Professional Customized Background', zh: 'Professional Customized Background' },
    'aura-adv3-desc': { en: 'Customize pictures and text backgrounds, and choose from a variety of professional templates', zh: 'Customize pictures and text backgrounds, and choose from a variety of professional templates' },
    'aura-adv4-title': { en: 'Optional Video Language', zh: 'Optional Video Language' },
    'aura-adv4-desc': { en: 'You can choose Mandarin, Cantonese or English dubbing to flexibly match application scenarios', zh: 'You can choose Mandarin, Cantonese or English dubbing to flexibly match application scenarios' },
    'aura-process-label': { en: 'Process', zh: 'Process' },
    'aura-process-title': { en: 'How Aura Works', zh: 'How Aura Works' },
    'aura-step1-title': { en: 'Personalize Your Profile', zh: 'Personalize Your Profile' },
    'aura-step1-desc': { en: 'Start by preparing your portrait and a sound recording.', zh: 'Start by preparing your portrait and a sound recording.' },
    'aura-step2-title': { en: 'Customize Your Video', zh: 'Customize Your Video' },
    'aura-step2-desc': { en: 'Fill out the Google Form for your introduction video script and background.', zh: 'Fill out the Google Form for your introduction video script and background.' },
    'aura-step3-title': { en: 'Finalize and Share', zh: 'Finalize and Share' },
    'aura-step3-desc': { en: 'Review your video, make final tweaks, and download or share.', zh: 'Review your video, make final tweaks, and download or share.' },
    'aura-cta-label': { en: 'Get Started', zh: 'Get Started' },
    'aura-cta-title': { en: 'Ready to shine with Aura?', zh: 'Ready to shine with Aura?' },
    'aura-cta-desc': { en: 'Contact us today to create your professional AI introduction video.', zh: 'Contact us today to create your professional AI introduction video.' },
    'aura-cta-btn': { en: 'Create Your Aura →', zh: 'Create Your Aura →' },

    // ===== 商店 shop.html (from doc section 3.9 / 4.9) =====
    'shop-hero-label': { en: 'Products', zh: 'Products' },
    'shop-hero-title': { en: 'Shop', zh: '商店' },
    'shop-intro-label': { en: 'Available Now', zh: 'Available Now' },
    'shop-intro-title': { en: 'Our Products', zh: 'Our Products' },
    'shop-product-title': { en: 'Computer', zh: '電腦' },
    'shop-product-desc': { en: 'High-performance computer for professional use.', zh: 'High-performance computer for professional use.' },
    'shop-product-btn': { en: 'Add to Cart', zh: '加入購物車' },

    // ===== 加入我们 join-us.html (from doc section 3.10 / 4.10) =====
    'joinus-hero-label': { en: 'Careers', zh: 'Careers' },
    'joinus-hero-title': { en: 'Join Our Team Today', zh: '現在就加入我們的團隊' },
    'joinus-intro-label': { en: 'Why Join Us', zh: 'Why Join Us' },
    'joinus-intro-title': { en: 'Be part of the fintech revolution', zh: 'Be part of the fintech revolution' },
    'joinus-intro-desc': {
      en: 'At MC Fintech Solutions Limited, we\'re at the forefront of fintech innovation, developing cutting-edge software and providing expert IT consultancy. We\'re always looking for talented individuals to join our dynamic team. If you\'re passionate about technology and finance, we want to hear from you!',
      zh: '萬利科技公司站在金融科技創新的前沿，致力於開發尖端軟體並提供專業的 IT 諮詢服務。我們始終期待優秀人才加入我們充滿活力的團隊。如果您對科技和金融充滿熱情，我們期待您的加入！'
    },
    'joinus-positions-label': { en: 'Open Positions', zh: 'Open Positions' },
    'joinus-positions-title': { en: 'Find your role', zh: 'Find your role' },
    'joinus-role1-badge': { en: 'Internship', zh: '實習' },
    'joinus-role1-title': { en: 'Internship', zh: 'Internship' },
    'joinus-role1-desc': {
      en: 'Learn from experienced developers, assist in developing and testing financial software.',
      zh: '向經驗豐富的開發人員學習並獲得金融科技方面的實踐經驗，協助開發和測試金融軟體應用程式。'
    },
    'joinus-role1-req': { en: 'Requirements', zh: '要求' },
    'joinus-role1-req-val': {
      en: 'CS degree (in progress or completed)',
      zh: '目前正在攻讀計算機科學或相關領域的學位'
    },
    'joinus-role1-dur': { en: 'Duration', zh: '持續時間' },
    'joinus-role1-dur-val': { en: '3–6 months', zh: '3-6 個月' },
    'joinus-role2-badge': { en: 'Full-Time', zh: '全職' },
    'joinus-role2-title': { en: 'Technician', zh: '技術人員' },
    'joinus-role2-desc': {
      en: 'Technical support for fintech products, ensuring smooth operation and excellent client service.',
      zh: '為我們的金融科技產品和服務提供技術支援，排查軟體問題並協助系統維護。'
    },
    'joinus-role2-req': { en: 'Requirements', zh: '要求' },
    'joinus-role2-req-val': {
      en: 'Bachelor\'s in IT/CS; 1–2 years experience',
      zh: 'IT、計算機科學或相關領域的學士學位，1-2 年 IT 支援或金融科技經驗'
    },
    'joinus-role3-badge': { en: 'Full-Time', zh: '全職' },
    'joinus-role3-title': { en: 'Assistant', zh: '助理' },
    'joinus-role3-desc': {
      en: 'Support senior consultants, conduct fintech trend research, and contribute to strategic projects.',
      zh: '在客戶專案和演示中為高級顧問提供支援，進行金融科技趨勢研究和市場分析。'
    },
    'joinus-role3-req': { en: 'Requirements', zh: '要求' },
    'joinus-role3-req-val': {
      en: 'Bachelor\'s in Business/Finance/CS; strong analytical skills',
      zh: '商業、金融或計算機科學學士學位，較強的分析和溝通能力'
    },
    'joinus-cta-label': { en: 'Apply Now', zh: 'Apply Now' },
    'joinus-cta-title': { en: 'Join Us — Click Here →', zh: '加入我們 — 按這裏 →' },
    'joinus-cta-desc': {
      en: '"The only limit is the extent of your imagination." — Jayla H.',
      zh: '"唯一的限制是你的想像力。" — Jayla H.'
    },
    'joinus-cta-btn': { en: 'Apply Now →', zh: 'Apply Now →' },

    // ===== 联系我们 contact.html (from doc section 3.11 / 4.11) =====
    'contact-hero-label': { en: 'Reach Out', zh: 'Reach Out' },
    'contact-hero-title': { en: 'Contact', zh: '聯絡我們' },
    'contact-info-label': { en: 'Get In Touch', zh: 'Get In Touch' },
    'contact-info-title': { en: 'We\'d love to hear from you', zh: 'We\'d love to hear from you' },
    'contact-address-label': { en: 'Address', zh: '地址' },
    'contact-address-val': {
      en: 'Unit 02, 12/F Boss Commercial Centre, 28 Ferry Street, Yau Ma Tei, Kowloon, Hong Kong',
      zh: '香港九龍佐敦渡船街28號寶時商業中心12樓1202'
    },
    'contact-email-label': { en: 'Email', zh: '電郵' },
    'contact-phone-label': { en: 'Phone', zh: '電話號碼' },
    'contact-getting-title': { en: 'Getting There', zh: 'Getting There' },
    'contact-transport1-label': { en: 'By MTR', zh: '乘搭地鐵' },
    'contact-transport1-desc': {
      en: 'Yau Ma Tei Station (Tsuen Wan Line): Exit A1 or A2. Jordan Station (Kwun Tong Line): Exit C.',
      zh: '油麻地站（荃灣線）：A1或A2出口。佐敦站（觀塘線）：C出口。'
    },
    'contact-transport2-label': { en: 'By Bus', zh: '乘搭巴士' },
    'contact-transport2-desc': {
      en: '2E, 12, 914, 914X to Ferry Street Station.',
      zh: '搭乘 2E、12、914、914X 公車到 Ferry Street 站。'
    },
    'contact-form-label': { en: 'Send a Message', zh: 'Send a Message' },
    'contact-form-title': { en: 'How can we help?', zh: 'How can we help?' },
    'contact-form-name-label': { en: 'Your Name', zh: 'Your Name' },
    'contact-form-name-placeholder': { en: 'John Smith', zh: 'John Smith' },
    'contact-form-email-label': { en: 'Email Address', zh: 'Email Address' },
    'contact-form-email-placeholder': { en: 'john@example.com', zh: 'john@example.com' },
    'contact-form-msg-label': { en: 'Message', zh: 'Message' },
    'contact-form-msg-placeholder': { en: 'Tell us how we can help you...', zh: 'Tell us how we can help you...' },
    'contact-form-btn': { en: 'Send Message →', zh: 'Send Message →' },

    // 测试标记
    'test-indicator': { en: '', zh: '【中文模式測試 ✓】' }
  };

  function getPageMappings() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const page = path.replace(/^\//, '').replace(/\.html$/, '') || 'index';

    const shared = [
      { sel: '.nav-logo', key: 'nav-logo' },
      { sel: '.nav-lang', key: 'nav-lang-label-en' },
      { sel: '.nav-cta', key: 'nav-cta' },
      { sel: '.nav-menu > li:nth-child(1) > a', key: 'nav-home' },
      { sel: '.nav-menu > li:nth-child(2) > a', key: 'nav-about' },
      { sel: '.nav-menu > li:nth-child(3) > a', key: 'nav-services' },
      { sel: '.nav-menu > li:nth-child(4) > a', key: 'nav-funding' },
      { sel: '.nav-menu > li:nth-child(5) > a', key: 'nav-promotion' },
      { sel: '.nav-dropdown > button', key: 'nav-ai-videos' },
      { sel: '.nav-menu > li:nth-child(7) > a', key: 'nav-shop' },
      { sel: '.nav-menu > li:nth-child(8) > a', key: 'nav-join-us' },
      { sel: '.nav-menu > li:nth-child(9) > a', key: 'nav-contact' },
      { sel: '.dropdown-menu > li:nth-child(1) > a', key: 'nav-my-way' },
      { sel: '.dropdown-menu > li:nth-child(2) > a', key: 'nav-aura' },
      { sel: '.nav-drawer > a:nth-child(1)', key: 'drawer-home' },
      { sel: '.nav-drawer > a:nth-child(2)', key: 'drawer-about' },
      { sel: '.nav-drawer > a:nth-child(3)', key: 'drawer-services' },
      { sel: '.nav-drawer > a:nth-child(4)', key: 'drawer-funding' },
      { sel: '.nav-drawer > a:nth-child(5)', key: 'drawer-promotion' },
      { sel: '.nav-drawer > a:nth-child(6)', key: 'drawer-ai-videos' },
      { sel: '.nav-drawer > a:nth-child(7)', key: 'drawer-my-way' },
      { sel: '.nav-drawer > a:nth-child(8)', key: 'drawer-aura' },
      { sel: '.nav-drawer > a:nth-child(9)', key: 'drawer-shop' },
      { sel: '.nav-drawer > a:nth-child(10)', key: 'drawer-join-us' },
      { sel: '.nav-drawer > a:nth-child(11)', key: 'drawer-contact' },
      { sel: '.footer-col:nth-of-type(1) h4', key: 'footer-company' },
      { sel: '.footer-col:nth-of-type(2) h4', key: 'footer-products' },
      { sel: '.footer-col:nth-of-type(3) h4', key: 'footer-connect' },
      { sel: '.footer-col:nth-of-type(1) li:nth-child(1) a', key: 'footer-home' },
      { sel: '.footer-col:nth-of-type(1) li:nth-child(2) a', key: 'footer-about' },
      { sel: '.footer-col:nth-of-type(1) li:nth-child(3) a', key: 'footer-services' },
      { sel: '.footer-col:nth-of-type(1) li:nth-child(4) a', key: 'footer-funding' },
      { sel: '.footer-col:nth-of-type(1) li:nth-child(5) a', key: 'footer-join-us' },
      { sel: '.footer-col:nth-of-type(2) li:nth-child(1) a', key: 'footer-promotion' },
      { sel: '.footer-col:nth-of-type(2) li:nth-child(2) a', key: 'footer-ai-videos' },
      { sel: '.footer-col:nth-of-type(2) li:nth-child(3) a', key: 'footer-my-way' },
      { sel: '.footer-col:nth-of-type(2) li:nth-child(4) a', key: 'footer-aura' },
      { sel: '.footer-col:nth-of-type(2) li:nth-child(5) a', key: 'footer-shop' },
      { sel: '.footer-col:nth-of-type(3) li:nth-child(1) a', key: 'footer-contact' },
      { sel: '.footer-col:nth-of-type(3) li:nth-child(2) a', key: 'footer-directions' },
      { sel: '.footer-col:nth-of-type(3) li:nth-child(3) a', key: 'footer-login' },
      { sel: '.footer-col:nth-of-type(3) li:nth-child(4) a', key: 'footer-register' },
      { sel: '.footer-bottom p', key: 'footer-copyright' },
      { sel: '.footer-brand address', key: 'footer-address' },
    ];

    const pageMappings = {
      'index': [
        { sel: '.hero-tagline', key: 'index-hero-tagline' },
        { sel: '.hero-quote', key: 'index-hero-quote' },
        { sel: '.hero-attr', key: 'index-hero-attr' },
        { sel: '.hero-cta', key: 'index-hero-cta' },
        { sel: '#explore .section-label', key: 'index-about-label' },
        { sel: '#explore h2', key: 'index-about-title' },
        { sel: '#explore .intro-text p', key: 'index-about-desc' },
        { sel: '.intro-deco-badge .badge-main', key: 'index-badge-main' },
        { sel: '.intro-deco-badge .badge-sub', key: 'index-badge-sub' },
        { sel: '.two-cards .promo-card:nth-child(1) .section-label', key: 'index-service-label' },
        { sel: '.two-cards .promo-card:nth-child(1) h3', key: 'index-service-title' },
        { sel: '.two-cards .promo-card:nth-child(1) p', key: 'index-service-desc' },
        { sel: '.two-cards .promo-card:nth-child(1) .read-more', key: 'index-service-readmore' },
        { sel: '.two-cards .promo-card:nth-child(2) .section-label', key: 'index-promise-label' },
        { sel: '.two-cards .promo-card:nth-child(2) h3', key: 'index-promise-title' },
        { sel: '.two-cards .promo-card:nth-child(2) p', key: 'index-promise-desc' },
        { sel: '.two-cards .promo-card:nth-child(2) .read-more', key: 'index-promise-readmore' },
        { sel: '.section-header .section-label', key: 'index-services-label' },
        { sel: '.section-header h2', key: 'index-services-title' },
        { sel: '.section-header p', key: 'index-services-desc' },
        { sel: '.service-card:nth-child(1) h3', key: 'index-service1-title' },
        { sel: '.service-card:nth-child(1) p', key: 'index-service1-desc' },
        { sel: '.service-card:nth-child(2) h3', key: 'index-service2-title' },
        { sel: '.service-card:nth-child(2) p', key: 'index-service2-desc' },
        { sel: '.service-card:nth-child(3) h3', key: 'index-service3-title' },
        { sel: '.service-card:nth-child(3) p', key: 'index-service3-desc' },
        { sel: '.service-card:nth-child(4) h3', key: 'index-service4-title' },
        { sel: '.service-card:nth-child(4) p', key: 'index-service4-desc' },
        { sel: '.section-header.centered .section-label', key: 'index-testimonials-label' },
        { sel: '.section-header.centered h2', key: 'index-testimonials-title' },
        { sel: '.testimonial-card:nth-child(1) blockquote', key: 'index-testimonial1' },
        { sel: '.testimonial-card:nth-child(1) .testimonial-author strong', key: 'index-testimonial1-author' },
        { sel: '.testimonial-card:nth-child(1) .testimonial-author span', key: 'index-testimonial1-role' },
        { sel: '.testimonial-card:nth-child(2) blockquote', key: 'index-testimonial2' },
        { sel: '.testimonial-card:nth-child(2) .testimonial-author strong', key: 'index-testimonial2-author' },
        { sel: '.testimonial-card:nth-child(2) .testimonial-author span', key: 'index-testimonial2-role' },
        { sel: '.testimonial-card:nth-child(3) blockquote', key: 'index-testimonial3' },
        { sel: '.testimonial-card:nth-child(3) .testimonial-author strong', key: 'index-testimonial3-author' },
        { sel: '.testimonial-card:nth-child(3) .testimonial-author span', key: 'index-testimonial3-role' },
        { sel: '.cta-band .section-label', key: 'index-cooperation-label' },
        { sel: '.cta-band h2', key: 'index-cooperation-title' },
        { sel: '.cta-band p', key: 'index-cooperation-desc' },
        { sel: '.cta-band .btn', key: 'index-cooperation-btn' },
      ],
      'about': [
        { sel: '.page-hero .section-label', key: 'about-hero-label' },
        { sel: '.page-hero h1', key: 'about-hero-title' },
        { sel: '.section-header .section-label', key: 'about-story-label' },
        { sel: '.section-header h2', key: 'about-story-title' },
        { sel: '.section-header p', key: 'about-story-desc' },
        { sel: '.two-col-intro .section-label', key: 'about-mission-label' },
        { sel: '.two-col-intro h2', key: 'about-mission-title' },
        { sel: '.two-col-intro .intro-text p', key: 'about-mission-desc' },
        { sel: '.intro-deco-badge .badge-main', key: 'about-mission-badge' },
        { sel: '.intro-deco-badge .badge-sub', key: 'about-mission-sub' },
        { sel: '.section-header.centered .section-label', key: 'about-values-label' },
        { sel: '.section-header.centered h2', key: 'about-values-title' },
        { sel: '.value-card:nth-child(1) p', key: 'about-value1' },
        { sel: '.value-card:nth-child(2) p', key: 'about-value2' },
        { sel: '.value-card:nth-child(3) p', key: 'about-value3' },
        { sel: '.value-card:nth-child(4) p', key: 'about-value4' },
        { sel: '.value-card:nth-child(5) p', key: 'about-value5' },
        { sel: '.value-card:nth-child(6) p', key: 'about-value6' },
        { sel: '.cta-band .section-label', key: 'about-cta-label' },
        { sel: '.cta-band h2', key: 'about-cta-title' },
        { sel: '.cta-band p', key: 'about-cta-desc' },
        { sel: '.cta-band .btn', key: 'about-cta-btn' },
      ],
      'services': [
        { sel: '.page-hero .section-label', key: 'services-hero-label' },
        { sel: '.page-hero h1', key: 'services-hero-title' },
        { sel: '.section-header p', key: 'services-intro' },
        { sel: '.quote-block blockquote', key: 'services-quote' },
        { sel: '.quote-block cite', key: 'services-quote-author' },
      ],
      'funding': [
        { sel: '.page-hero .section-label', key: 'funding-hero-label' },
        { sel: '.page-hero h1', key: 'funding-hero-title' },
        { sel: '.two-col-intro .section-label', key: 'funding-why-label' },
        { sel: '.two-col-intro h2', key: 'funding-why-title' },
        { sel: '.two-col-intro .intro-text p', key: 'funding-why-desc' },
        { sel: '.intro-deco-badge .badge-main', key: 'funding-badge-main' },
        { sel: '.intro-deco-badge .badge-sub', key: 'funding-badge-sub' },
        { sel: '.section-header .section-label', key: 'funding-opp-label' },
        { sel: '.section-header h2', key: 'funding-opp-title' },
        { sel: '.promo-card:nth-child(1) .section-label', key: 'funding-opp1-label' },
        { sel: '.promo-card:nth-child(1) p', key: 'funding-opp1-desc' },
        { sel: '.promo-card:nth-child(2) .section-label', key: 'funding-opp2-label' },
        { sel: '.promo-card:nth-child(2) p', key: 'funding-opp2-desc' },
        { sel: 'section:nth-of-type(3) .section-label', key: 'funding-commit-label' },
        { sel: 'section:nth-of-type(3) h2', key: 'funding-commit-title' },
        { sel: 'section:nth-of-type(3) p', key: 'funding-commit-desc' },
        { sel: '.section-header.centered .section-label', key: 'funding-support-label' },
        { sel: '.section-header.centered h2', key: 'funding-support-title' },
        { sel: '.funding-card:nth-child(1) h4', key: 'funding-card1-title' },
        { sel: '.funding-card:nth-child(1) p', key: 'funding-card1-desc' },
        { sel: '.funding-card:nth-child(2) h4', key: 'funding-card2-title' },
        { sel: '.funding-card:nth-child(2) p', key: 'funding-card2-desc' },
        { sel: '.funding-card:nth-child(3) h4', key: 'funding-card3-title' },
        { sel: '.funding-card:nth-child(3) p', key: 'funding-card3-desc' },
        { sel: '.funding-card:nth-child(4) h4', key: 'funding-card4-title' },
        { sel: '.funding-card:nth-child(4) p', key: 'funding-card4-desc' },
        { sel: '.funding-card:nth-child(5) h4', key: 'funding-card5-title' },
        { sel: '.funding-card:nth-child(5) p', key: 'funding-card5-desc' },
        { sel: '.funding-card:nth-child(6) h4', key: 'funding-card6-title' },
        { sel: '.funding-card:nth-child(6) p', key: 'funding-card6-desc' },
        { sel: '.cta-band .section-label', key: 'funding-cta-label' },
        { sel: '.cta-band h2', key: 'funding-cta-title' },
        { sel: '.cta-band p', key: 'funding-cta-desc' },
        { sel: '.cta-band .btn', key: 'funding-cta-btn' },
      ],
      'promotion': [
        { sel: '.page-hero .section-label', key: 'promotion-hero-label' },
        { sel: '.page-hero h1', key: 'promotion-hero-title' },
        { sel: '.page-hero p', key: 'promotion-hero-desc' },
        { sel: '.section-header.centered .section-label', key: 'promotion-intro-label' },
        { sel: '.section-header.centered h2', key: 'promotion-intro-title' },
        { sel: '.section-header.centered p', key: 'promotion-intro-desc' },
        // Product cards
        { sel: '.product-card:nth-child(1) .product-date', key: 'promotion-date1' },
        { sel: '.product-card:nth-child(1) h3', key: 'promotion-product1-title' },
        { sel: '.product-card:nth-child(1) .product-body p', key: 'promotion-product1-desc' },
        { sel: '.product-card:nth-child(2) .product-date', key: 'promotion-date2' },
        { sel: '.product-card:nth-child(2) h3', key: 'promotion-product2-title' },
        { sel: '.product-card:nth-child(2) .product-body p', key: 'promotion-product2-desc' },
        { sel: '.product-card:nth-child(3) .product-date', key: 'promotion-date3' },
        { sel: '.product-card:nth-child(3) h3', key: 'promotion-product3-title' },
        { sel: '.product-card:nth-child(3) .product-body p', key: 'promotion-product3-desc' },
        { sel: '.cta-band .section-label', key: 'promotion-cta-label' },
        { sel: '.cta-band h2', key: 'promotion-cta-title' },
        { sel: '.cta-band p', key: 'promotion-cta-desc' },
        { sel: '.cta-band .btn', key: 'promotion-cta-btn' },
      ],
      'ai-videos': [
        { sel: '.page-hero .section-label', key: 'aivideos-hero-label' },
        { sel: '.page-hero h1', key: 'aivideos-hero-title' },
        { sel: '.page-hero p', key: 'aivideos-hero-desc' },
        { sel: '.section-header.centered .section-label', key: 'aivideos-intro-label' },
        { sel: '.section-header.centered h2', key: 'aivideos-intro-title' },
        { sel: '.section-header.centered p', key: 'aivideos-intro-desc' },
        { sel: '.ai-card:nth-child(1) h3', key: 'aivideos-card1-title' },
        { sel: '.ai-card:nth-child(1) p', key: 'aivideos-card1-desc' },
        { sel: '.ai-card:nth-child(1) .read-more', key: 'aivideos-card1-btn' },
        { sel: '.ai-card:nth-child(2) h3', key: 'aivideos-card2-title' },
        { sel: '.ai-card:nth-child(2) p', key: 'aivideos-card2-desc' },
        { sel: '.ai-card:nth-child(2) .read-more', key: 'aivideos-card2-btn' },
        { sel: '.ai-card:nth-child(3) h3', key: 'aivideos-card3-title' },
        { sel: '.ai-card:nth-child(3) p', key: 'aivideos-card3-desc' },
        { sel: '.ai-card:nth-child(3) .read-more', key: 'aivideos-card3-btn' },
        { sel: 'section:nth-of-type(3) .section-label', key: 'aivideos-deep-label' },
        { sel: 'section:nth-of-type(3) h2', key: 'aivideos-deep-title' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(1) p', key: 'aivideos-deep1-desc' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(2) p', key: 'aivideos-deep2-desc' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(3) p', key: 'aivideos-deep3-desc' },
        { sel: '.cta-band .section-label', key: 'aivideos-cta-label' },
        { sel: '.cta-band h2', key: 'aivideos-cta-title' },
        { sel: '.cta-band p', key: 'aivideos-cta-desc' },
        { sel: '.cta-band .btn', key: 'aivideos-cta-btn' },
      ],
      'my-way': [
        { sel: '.page-hero .section-label', key: 'myway-hero-label' },
        { sel: '.page-hero h1', key: 'myway-hero-title' },
        { sel: '.page-hero p', key: 'myway-hero-desc' },
        { sel: '.section-header .section-label', key: 'myway-about-label' },
        { sel: '.section-header h2', key: 'myway-about-title' },
        { sel: '.section-header p', key: 'myway-about-desc' },
        { sel: '.section-header.centered .section-label', key: 'myway-features-label' },
        { sel: '.section-header.centered h2', key: 'myway-features-title' },
        { sel: '.feature-card:nth-child(1) h4', key: 'myway-feature1-title' },
        { sel: '.feature-card:nth-child(1) p', key: 'myway-feature1-desc' },
        { sel: '.feature-card:nth-child(2) h4', key: 'myway-feature2-title' },
        { sel: '.feature-card:nth-child(2) p', key: 'myway-feature2-desc' },
        { sel: '.feature-card:nth-child(3) h4', key: 'myway-feature3-title' },
        { sel: '.feature-card:nth-child(3) p', key: 'myway-feature3-desc' },
        { sel: 'section:nth-of-type(3) .section-label', key: 'myway-scenarios-label' },
        { sel: 'section:nth-of-type(3) h2', key: 'myway-scenarios-title' },
        { sel: '.scenario-item:nth-child(1) span', key: 'myway-scenario1' },
        { sel: '.scenario-item:nth-child(2) span', key: 'myway-scenario2' },
        { sel: '.scenario-item:nth-child(3) span', key: 'myway-scenario3' },
        { sel: '.scenario-item:nth-child(4) span', key: 'myway-scenario4' },
        { sel: '.scenario-item:nth-child(5) span', key: 'myway-scenario5' },
        { sel: '.scenario-item:nth-child(6) span', key: 'myway-scenario6' },
        { sel: 'section.bg-alt blockquote', key: 'myway-testimonial' },
        { sel: 'section.bg-alt .testimonial-author strong', key: 'myway-testimonial-author' },
        { sel: 'section.bg-alt .testimonial-author span', key: 'myway-testimonial-role' },
        { sel: '.cta-band .section-label', key: 'myway-cta-label' },
        { sel: '.cta-band h2', key: 'myway-cta-title' },
        { sel: '.cta-band p', key: 'myway-cta-desc' },
        { sel: '.cta-band .btn', key: 'myway-cta-btn' },
      ],
      'aura': [
        { sel: '.page-hero .section-label', key: 'aura-hero-label' },
        { sel: '.page-hero h1', key: 'aura-hero-title' },
        { sel: '.page-hero p', key: 'aura-hero-desc' },
        { sel: '.section-header .section-label', key: 'aura-about-label' },
        { sel: '.section-header h2', key: 'aura-about-title' },
        { sel: '.section-header p', key: 'aura-about-desc' },
        { sel: '.section-header.centered .section-label', key: 'aura-advantages-label' },
        { sel: '.section-header.centered h2', key: 'aura-advantages-title' },
        { sel: '.advantage-card:nth-child(1) h4', key: 'aura-adv1-title' },
        { sel: '.advantage-card:nth-child(1) p', key: 'aura-adv1-desc' },
        { sel: '.advantage-card:nth-child(2) h4', key: 'aura-adv2-title' },
        { sel: '.advantage-card:nth-child(2) p', key: 'aura-adv2-desc' },
        { sel: '.advantage-card:nth-child(3) h4', key: 'aura-adv3-title' },
        { sel: '.advantage-card:nth-child(3) p', key: 'aura-adv3-desc' },
        { sel: '.advantage-card:nth-child(4) h4', key: 'aura-adv4-title' },
        { sel: '.advantage-card:nth-child(4) p', key: 'aura-adv4-desc' },
        { sel: 'section:nth-of-type(3) .section-label', key: 'aura-process-label' },
        { sel: 'section:nth-of-type(3) h2', key: 'aura-process-title' },
        { sel: '.step-card:nth-child(1) h4', key: 'aura-step1-title' },
        { sel: '.step-card:nth-child(1) p', key: 'aura-step1-desc' },
        { sel: '.step-card:nth-child(2) h4', key: 'aura-step2-title' },
        { sel: '.step-card:nth-child(2) p', key: 'aura-step2-desc' },
        { sel: '.step-card:nth-child(3) h4', key: 'aura-step3-title' },
        { sel: '.step-card:nth-child(3) p', key: 'aura-step3-desc' },
        { sel: '.cta-band .section-label', key: 'aura-cta-label' },
        { sel: '.cta-band h2', key: 'aura-cta-title' },
        { sel: '.cta-band p', key: 'aura-cta-desc' },
        { sel: '.cta-band .btn', key: 'aura-cta-btn' },
      ],
      'shop': [
        { sel: '.page-hero .section-label', key: 'shop-hero-label' },
        { sel: '.page-hero h1', key: 'shop-hero-title' },
        { sel: '.section-header.centered .section-label', key: 'shop-intro-label' },
        { sel: '.section-header.centered h2', key: 'shop-intro-title' },
        { sel: '.product-card h3', key: 'shop-product-title' },
        { sel: '.product-card .product-body p', key: 'shop-product-desc' },
        { sel: '.add-to-cart', key: 'shop-product-btn' },
      ],
      'join-us': [
        { sel: '.page-hero .section-label', key: 'joinus-hero-label' },
        { sel: '.page-hero h1', key: 'joinus-hero-title' },
        { sel: '.section-header .section-label', key: 'joinus-intro-label' },
        { sel: '.section-header h2', key: 'joinus-intro-title' },
        { sel: '.section-header p', key: 'joinus-intro-desc' },
        { sel: '.section-header.centered .section-label', key: 'joinus-positions-label' },
        { sel: '.section-header.centered h2', key: 'joinus-positions-title' },
        { sel: '.role-card:nth-child(1) .role-badge', key: 'joinus-role1-badge' },
        { sel: '.role-card:nth-child(1) h3', key: 'joinus-role1-title' },
        { sel: '.role-card:nth-child(1) > p', key: 'joinus-role1-desc' },
        { sel: '.role-card:nth-child(1) .role-req dt:nth-of-type(1)', key: 'joinus-role1-req' },
        { sel: '.role-card:nth-child(1) .role-req dd:nth-of-type(1)', key: 'joinus-role1-req-val' },
        { sel: '.role-card:nth-child(1) .role-req dt:nth-of-type(2)', key: 'joinus-role1-dur' },
        { sel: '.role-card:nth-child(1) .role-req dd:nth-of-type(2)', key: 'joinus-role1-dur-val' },
        { sel: '.role-card:nth-child(2) .role-badge', key: 'joinus-role2-badge' },
        { sel: '.role-card:nth-child(2) h3', key: 'joinus-role2-title' },
        { sel: '.role-card:nth-child(2) > p', key: 'joinus-role2-desc' },
        { sel: '.role-card:nth-child(2) .role-req dt', key: 'joinus-role2-req' },
        { sel: '.role-card:nth-child(2) .role-req dd', key: 'joinus-role2-req-val' },
        { sel: '.role-card:nth-child(3) .role-badge', key: 'joinus-role3-badge' },
        { sel: '.role-card:nth-child(3) h3', key: 'joinus-role3-title' },
        { sel: '.role-card:nth-child(3) > p', key: 'joinus-role3-desc' },
        { sel: '.role-card:nth-child(3) .role-req dt', key: 'joinus-role3-req' },
        { sel: '.role-card:nth-child(3) .role-req dd', key: 'joinus-role3-req-val' },
        { sel: '.cta-band .section-label', key: 'joinus-cta-label' },
        { sel: '.cta-band h2', key: 'joinus-cta-title' },
        { sel: '.cta-band p', key: 'joinus-cta-desc' },
        { sel: '.cta-band .btn', key: 'joinus-cta-btn' },
      ],
      'contact': [
        { sel: '.page-hero .section-label', key: 'contact-hero-label' },
        { sel: '.page-hero h1', key: 'contact-hero-title' },
        { sel: '.contact-layout .section-label', key: 'contact-info-label' },
        { sel: '.contact-layout h2:first-of-type', key: 'contact-info-title' },
        { sel: '.contact-item:nth-child(1) strong', key: 'contact-address-label' },
        { sel: '.contact-item:nth-child(1) p', key: 'contact-address-val' },
        { sel: '.contact-item:nth-child(2) strong', key: 'contact-email-label' },
        { sel: '.contact-item:nth-child(3) strong', key: 'contact-phone-label' },
        { sel: '.getting-there h3', key: 'contact-getting-title' },
        { sel: '.transport-item:nth-child(1) strong', key: 'contact-transport1-label' },
        { sel: '.transport-item:nth-child(1) p', key: 'contact-transport1-desc' },
        { sel: '.transport-item:nth-child(2) strong', key: 'contact-transport2-label' },
        { sel: '.transport-item:nth-child(2) p', key: 'contact-transport2-desc' },
        { sel: '.contact-form .section-label', key: 'contact-form-label' },
        { sel: '.contact-form h2', key: 'contact-form-title' },
        { sel: '.form-group:nth-child(2) label', key: 'contact-form-name-label' },
        { sel: '.form-group:nth-child(2) input', key: 'contact-form-name-placeholder', attr: 'placeholder' },
        { sel: '.form-group:nth-child(3) label', key: 'contact-form-email-label' },
        { sel: '.form-group:nth-child(3) input', key: 'contact-form-email-placeholder', attr: 'placeholder' },
        { sel: '.form-group:nth-child(4) label', key: 'contact-form-msg-label' },
        { sel: '.form-group:nth-child(4) textarea', key: 'contact-form-msg-placeholder', attr: 'placeholder' },
        { sel: '.contact-form button', key: 'contact-form-btn' },
      ],
    };

    return { shared, page: pageMappings[page] || [] };
  }

  function applyTranslation(sel, key, attr) {
    const elements = document.querySelectorAll(sel);
    if (!elements.length) return;
    const t = translations[key];
    if (!t) return;
    const text = t[currentLang] || t['en'];
    elements.forEach(function (el) {
      if (attr) {
        el.setAttribute(attr, text);
      } else if (key === 'nav-lang-label-en') {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
  }

  function applyAllTranslations() {
    const mappings = getPageMappings();
    const all = [].concat(mappings.shared, mappings.page);
    all.forEach(function (m) {
      applyTranslation(m.sel, m.key, m.attr);
    });
    updateTestIndicator();
  }

  function createTestIndicator() {
    var el = document.getElementById('lang-test-indicator');
    if (!el) {
      el = document.createElement('div');
      el.id = 'lang-test-indicator';
      el.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--accent);color:#fff;padding:8px 16px;border-radius:8px;font-family:var(--font-body);font-size:0.85rem;font-weight:600;z-index:9999;box-shadow:0 4px 12px rgba(26,173,140,0.4);pointer-events:none;transition:opacity 0.3s;';
      document.body.appendChild(el);
    }
    return el;
  }

  function updateTestIndicator() {
    var el = document.getElementById('lang-test-indicator') || createTestIndicator();
    if (currentLang === 'zh') {
      el.textContent = translations['test-indicator'].zh;
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
      el.textContent = '';
    }
  }

  function init() {
    var langBtn = document.querySelector('.nav-lang');
    if (langBtn) {
      langBtn.addEventListener('click', function (e) {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem(STORAGE_KEY, currentLang);
        applyAllTranslations();
        langBtn.innerHTML = translations['nav-lang-label-en'][currentLang] || translations['nav-lang-label-en']['en'];
      });
    }

    if (langBtn) {
      langBtn.innerHTML = translations['nav-lang-label-en'][currentLang] || translations['nav-lang-label-en']['en'];
    }

    applyAllTranslations();

    if (currentLang === 'zh') {
      createTestIndicator();
      updateTestIndicator();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.MCFi18n = {
    getLang: function () { return currentLang; },
    setLang: function (lang) {
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      applyAllTranslations();
    },
    toggle: function () {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      localStorage.setItem(STORAGE_KEY, currentLang);
      applyAllTranslations();
    },
    refresh: applyAllTranslations,
  };
})();
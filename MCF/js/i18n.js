/* MC Fintech Solutions Ltd — i18n 中英文切換 */
/* 繁體中文（香港）翻譯 */

(function () {
  'use strict';

  const STORAGE_KEY = 'mcfintech_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  const translations = {
    // ===== 通用導航 =====
    'nav-home': { en: 'Home', zh: '首頁' },
    'nav-about': { en: 'About Us', zh: '關於我們' },
    'nav-services': { en: 'Services', zh: '服務' },
    'nav-funding': { en: 'Funding', zh: '融資' },
    'nav-promotion': { en: 'Promotion', zh: '推廣' },
    'nav-ai-videos': { en: 'AI Videos ▾', zh: 'AI 影片 ▾' },
    'nav-my-way': { en: 'My Way', zh: 'My Way' },
    'nav-aura': { en: 'Aura', zh: 'Aura' },
    'nav-shop': { en: 'Shop', zh: '商店' },
    'nav-join-us': { en: 'Join Us', zh: '加入我們' },
    'nav-contact': { en: 'Contact', zh: '聯絡我們' },
    'nav-lang-label-en': { en: '<span class="lang-active">EN</span> / 中', zh: 'EN / <span class="lang-active">中</span>' },
    'nav-cta': { en: 'Contact', zh: '聯絡我們' },
    'nav-logo': { en: 'MC Fintech', zh: 'MC Fintech' },

    // 流動端抽屜
    'drawer-home': { en: 'Home', zh: '首頁' },
    'drawer-about': { en: 'About Us', zh: '關於我們' },
    'drawer-services': { en: 'Services', zh: '服務' },
    'drawer-funding': { en: 'Funding', zh: '融資' },
    'drawer-promotion': { en: 'Promotion', zh: '推廣' },
    'drawer-ai-videos': { en: 'AI Videos', zh: 'AI 影片' },
    'drawer-my-way': { en: 'My Way', zh: 'My Way' },
    'drawer-aura': { en: 'Aura', zh: 'Aura' },
    'drawer-shop': { en: 'Shop', zh: '商店' },
    'drawer-join-us': { en: 'Join Us', zh: '加入我們' },
    'drawer-contact': { en: 'Contact', zh: '聯絡我們' },

    // 頁腳
    'footer-company': { en: 'Company', zh: '公司' },
    'footer-products': { en: 'Products', zh: '產品' },
    'footer-connect': { en: 'Connect', zh: '聯繫' },
    'footer-home': { en: 'Home', zh: '首頁' },
    'footer-about': { en: 'About Us', zh: '關於我們' },
    'footer-services': { en: 'Services', zh: '服務' },
    'footer-funding': { en: 'Funding', zh: '融資' },
    'footer-join-us': { en: 'Join Us', zh: '加入我們' },
    'footer-promotion': { en: 'Promotion', zh: '推廣' },
    'footer-ai-videos': { en: 'AI Videos', zh: 'AI 影片' },
    'footer-my-way': { en: 'My Way', zh: 'My Way' },
    'footer-aura': { en: 'Aura', zh: 'Aura' },
    'footer-shop': { en: 'Shop', zh: '商店' },
    'footer-contact': { en: 'Contact', zh: '聯絡我們' },
    'footer-directions': { en: 'Directions', zh: '取得位置' },
    'footer-login': { en: 'Login', zh: '登入' },
    'footer-register': { en: 'Register', zh: '註冊' },
    'footer-copyright': {
      en: '© All rights reserved MC Fintech Solutions Limited',
      zh: '©萬利科技有限公司版權所有'
    },
    'footer-address': {
      en: '12/F Boss Commercial Centre, 28 Ferry Street, Yau Ma Tei, Kowloon, Hong Kong',
      zh: '香港九龍佐敦渡船街28號寶時商業中心12樓'
    },

    // ===== 首頁 index.html =====
    'index-hero-tagline': { en: 'Think and Link', zh: '思考和連接' },
    'index-hero-quote': {
      en: '"Ignoring technological change in a financial system based upon technology is like a mouse starving to death because someone moved their cheese"',
      zh: '"忽視基於技術的金融體系中的技術變革，就像一隻老鼠因為有人移動了他們的乳酪而餓死一樣。"'
    },
    'index-hero-attr': { en: '— Chris Skinner', zh: '— 克里斯·斯金納' },
    'index-hero-cta': { en: 'Explore ↓', zh: '探索更多 ↓' },
    'index-about-label': { en: 'About MC Fintech', zh: '關於萬利科技' },
    'index-about-title': { en: 'Innovative Enterprise Management Systems', zh: '創新企業管理系統' },
    'index-about-desc': {
      en: 'MC Fintech Solutions Ltd develops innovative enterprise management computer systems. Its comprehensive solutions boost business efficiency, optimize human resource use, and, backed by years of professional experience, deliver effective, user-friendly, stable, and reliable tools to enhance operations.',
      zh: '萬利科技致力於開發創新企業管理電腦系統，其全面解決方案可提升業務效率、優化人力資源利用，並憑藉多年專業經驗，提供高效、易用、穩定可靠的工具以提升營運效率。'
    },
    'index-badge-main': { en: 'MC Fintech', zh: 'MC Fintech' },
    'index-badge-sub': { en: 'Est. Hong Kong', zh: '立足香港' },
    'index-service-label': { en: 'What We Offer', zh: '我們提供什麼' },
    'index-service-title': { en: 'Our Service', zh: '我們的服務' },
    'index-service-desc': {
      en: 'MC Fintech delivers cutting-edge fintech and tech-integrated services, including AI avatar video creation, IT-driven operational solutions, computer hardware retail, and AI digital person-powered financial query support. With a focus on blending innovation and practicality, it tailors services to streamline workflows, enhance efficiency, and provide seamless, intelligent experiences, empowering clients to thrive in a tech-driven landscape.',
      zh: '萬利科技公司提供尖端金融科技及技術整合服務，包括 AI 虛擬形象影片製作、IT 驅動的營運解決方案、電腦硬體零售以及 AI 數字人金融諮詢支援。萬利科技公司著重於創新與實用的融合，透過客製化服務簡化工作流程、提升效率，並提供無縫智慧體驗，賦能客戶在科技驅動的時代蓬勃發展。'
    },
    'index-service-readmore': { en: 'Read More →', zh: '了解更多 →' },
    'index-promise-label': { en: 'Our Promise', zh: '我們的承諾' },
    'index-promise-title': { en: 'Customer First', zh: '以客為先' },
    'index-promise-desc': {
      en: 'Our commitment is to customer-centric service, bringing breakthroughs in enterprise management through effective, reliable, and specialized services.',
      zh: '我們的承諾是以客戶為本，為企業管理帶來突破，提供有效、可靠及專門的服務。'
    },
    'index-promise-readmore': { en: 'Read More →', zh: '了解更多 →' },
    'index-services-label': { en: 'Services', zh: '專業服務' },
    'index-services-title': { en: 'Professional services to streamline your business', zh: '專業服務助您簡化業務營運' },
    'index-services-desc': {
      en: 'We offer a range of convenient and professional services designed to streamline your business operations. By choosing MC Fintech Solutions Ltd, you will gain access to a professional team that delivers quick, reliable, and specialized services, making your business management more efficient, secure, and effective.',
      zh: '我們提供一系列便捷專業的服務，旨在簡化您的業務運作。選擇萬利科技公司，您將獲得一支專業團隊，提供快速、可靠且專業的服務，讓您的業務管理更有效率、更安全、更有效。'
    },
    'index-service1-title': { en: 'Enterprise Network Solutions', zh: '企業網絡解決方案' },
    'index-service1-desc': {
      en: 'Our Enterprise Network Solutions, tailored for fintech, connect your systems, partners, and clients with secure, real-time connectivity. Built to fortify data flow, align with compliance, and scale with your growth, they streamline collaboration, mitigate risks, and keep operations agile.',
      zh: '我們專為金融科技量身訂製的企業網絡解決方案，為您的系統、合作夥伴和客戶提供安全、即時的連線。這些解決方案旨在強化資料流，符合合規要求，並隨著您的業務增長而擴展，從而簡化協作、降低風險並保持敏捷營運。'
    },
    'index-service2-title': { en: 'Enterprise Cloud Solutions', zh: '企業雲端解決方案' },
    'index-service2-desc': {
      en: 'Harnessing secure cloud infrastructure, we craft and deploy scalable platforms to elevate your financial operations — from transaction processing and regulatory reporting to global team collaboration. Our solutions are built to cut costs, enhance flexibility, and grow with your business demands, simplifying complex tasks and fueling organizational agility.',
      zh: '我們利用安全的雲端基礎架構，建構並部署可擴展的平台，以提升您的財務營運——從交易處理、監管報告到全球團隊協作。我們的解決方案旨在降低成本、增強靈活性，並隨著您的業務需求而擴展，簡化複雜的任務並提升組織敏捷性。'
    },
    'index-service3-title': { en: 'Cyber Security Solutions', zh: '網絡安全解決方案' },
    'index-service3-desc': {
      en: 'Using cutting-edge threat intelligence, we develop and strengthen defenses to shield your financial assets — from transaction data and client information to core systems. Our solutions are built to block breaches, ensure compliance, and adapt to emerging risks, safeguarding daily operations and reinforcing organizational resilience.',
      zh: '我們運用尖端威脅情報，開發並強化防禦措施，保護您的金融資產——從交易資料、客戶資訊到核心系統。我們的解決方案旨在阻止違規行為、確保合規，並適應新興風險，保障日常營運安全並增強組織韌性。'
    },
    'index-service4-title': { en: 'AI Solutions', zh: '人工智能解決方案' },
    'index-service4-desc': {
      en: 'Harnessing state-of-the-art artificial intelligence, we build and deploy smart tools to transform your financial processes — from fraud detection and algorithmic trading to personalized client insights. Our solutions are built to sharpen decision-making, automate complex tasks, and align with shifting market dynamics, enhancing operational precision and driving business growth.',
      zh: '我們利用最先進的人工智能技術，構建並部署智能工具以革新您的金融流程——從欺詐檢測和演算法交易到個性化客戶洞察。我們的解決方案旨在提升決策精準度、自動化複雜任務，並適應不斷變化的市場動態，增強營運精確度並推動業務增長。'
    },
    'index-testimonials-label': { en: 'Testimonials', zh: '客戶評價' },
    'index-testimonials-title': { en: 'What people are saying', zh: '客戶心聲' },
    'index-testimonial1': {
      en: '"MC Fintech Solutions Ltd\'s enterprise management system has significantly improved our operational efficiency and customer satisfaction."',
      zh: '"萬利科技有限公司的企業管理系統大大提升了我們的運作效率和客戶滿意度。"'
    },
    'index-testimonial1-author': { en: 'Liz S.', zh: 'Liz S.' },
    'index-testimonial1-role': { en: 'Retailer', zh: '零售商' },
    'index-testimonial2': {
      en: '"Our collaboration with MC Fintech Solutions on a joint research project exceeded all expectations. Their team\'s insights into emerging fintech trends and rigorous analytical approach significantly enhanced the quality of our findings."',
      zh: '"我們與萬利科技有限公司在聯合研究計劃上的合作超越了所有人的預期。他們的團隊對新興金融科技趨勢的洞察力和嚴謹的分析方法大大提高了我們研究結果的質素。"'
    },
    'index-testimonial2-author': { en: 'Sarah C.', zh: 'Sarah C.' },
    'index-testimonial2-role': { en: 'Financier', zh: '金融家' },
    'index-testimonial3': {
      en: '"Their commitment to data protection and understanding of financial systems allowed us to create a robust solution tailored for fintech applications."',
      zh: '"他們對數據保護的承諾和對金融系統的深入理解，使我們能夠創建針對金融科技應用的強大解決方案。"'
    },
    'index-testimonial3-author': { en: 'David Z.', zh: 'David Z.' },
    'index-testimonial3-role': { en: 'Product Manager', zh: '產品經理' },
    'index-cooperation-label': { en: 'Cooperation', zh: '攜手合作' },
    'index-cooperation-title': { en: 'We welcome all forms of cooperation', zh: '我們歡迎任何形式的合作' },
    'index-cooperation-desc': {
      en: 'Join MC Fintech Solutions Ltd and be part of a dynamic team revolutionizing enterprise management with innovative technology. We\'d love to hear from you!',
      zh: '加入萬利科技有限公司，成為充滿活力的團隊的一員，用創新技術徹底改變企業管理。我們很樂意聽取您的意見！'
    },
    'index-cooperation-btn': { en: 'Join Us →', zh: '加入我們 →' },

    // ===== 關於我們 about.html =====
    'about-hero-label': { en: 'Who We Are', zh: '關於我們' },
    'about-hero-title': { en: 'About Us', zh: '關於我們' },
    'about-story-label': { en: 'Our Story', zh: '我們的故事' },
    'about-story-title': { en: 'Built on Experience. Driven by Innovation.', zh: '建基於經驗，以創新驅動' },
    'about-story-desc': {
      en: 'Established with a rich history of industry service experience, MC Fintech Solutions Ltd has successfully served hundreds of renowned group companies and brand clients. With a passion for design, keen insight into marketing trends, and a deep understanding of the market, we thrive alongside our clients in a dynamic environment.',
      zh: '萬利科技有限公司擁有豐富的行業服務經驗，已成功服務數百家知名集團公司和品牌客戶。憑藉對設計的熱情、對市場趨勢的敏銳洞察力和對市場的深刻理解，我們在充滿活力的環境中與客戶一起蓬勃發展。'
    },
    'about-mission-label': { en: 'Our Mission', zh: '我們的使命' },
    'about-mission-title': { en: 'Streamlining Business, Powering Growth', zh: '簡化業務流程，推動業務增長' },
    'about-mission-desc': {
      en: 'Our mission is to streamline business operations, making them more efficient, excellent and effective. Through our enterprise management systems, we help various industries accelerate their development.',
      zh: '我們的使命是簡化業務營運，使其更有效率、卓越與富有成效。透過我們的企業管理系統，我們幫助各行各業加速發展。'
    },
    'about-mission-badge': { en: 'Mission Driven', zh: '使命驅動' },
    'about-mission-sub': { en: 'Innovation & Excellence', zh: '創新與卓越' },
    'about-values-label': { en: 'Our Values', zh: '我們的價值' },
    'about-values-title': { en: 'The principles that guide everything we do', zh: '指導我們一切行動的原則' },
    'about-value1': { en: 'People-Oriented and Heartfelt Service', zh: '以人為本，用心服務' },
    'about-value2': { en: 'Perfection Pursuit — Integrity and Innovation', zh: '追求完美——誠信與創新' },
    'about-value3': { en: 'Promote Business Innovation, Service to Enhance Brand Value', zh: '推動業務創新，以服務提升品牌價值' },
    'about-value4': { en: 'Emphasis on Technology — Using Technology to Create Value for You', zh: '重視科技——用科技為您創造價值' },
    'about-value5': { en: 'Customer-First Service — We foster transparency and security', zh: '以客為先——我們倡導透明與安全' },
    'about-value6': { en: 'We aim to connect customer with us through Innovations and Creative Thinking.', zh: '我們旨在透過創新與創意思維與客戶建立聯繫。' },
    'about-cta-label': { en: 'Get In Touch', zh: '聯絡我們' },
    'about-cta-title': { en: 'Ready to work together?', zh: '準備好攜手合作嗎？' },
    'about-cta-desc': {
      en: 'Whether you\'re an enterprise looking to modernize, or a startup ready to scale — we\'re here to help.',
      zh: '無論您是尋求現代化的企業，還是準備擴展的初創公司——我們隨時為您提供協助。'
    },
    'about-cta-btn': { en: 'Contact Us →', zh: '聯絡我們 →' },

    // ===== 服務 services.html =====
    'services-hero-label': { en: 'What We Offer', zh: '我們提供什麼' },
    'services-hero-title': { en: 'Services', zh: '專業服務' },
    'services-intro': {
      en: 'We offer a range of convenient and professional services designed to streamline your business operations. By choosing MC Fintech Solutions Ltd, you will gain access to a professional team that delivers quick, reliable, and specialized services, making your business management more efficient, secure, and effective.',
      zh: '我們提供一系列便捷專業的服務，旨在簡化您的業務運作。選擇萬利科技公司，您將獲得一支專業團隊，提供快速、可靠且專業的服務，讓您的業務管理更有效率、更安全、更有效。'
    },
    'services-network-label': { en: 'Network', zh: '網絡' },
    'services-network-title': { en: 'Enterprise Network Solutions', zh: '企業網絡解決方案' },
    'services-network-desc': {
      en: 'Our Enterprise Network Solutions, tailored for fintech, connect your systems, partners, and clients with secure, real-time connectivity. Built to fortify data flow, align with compliance, and scale with your growth, they streamline collaboration, mitigate risks, and keep operations agile.',
      zh: '我們專為金融科技量身訂製的企業網絡解決方案，為您的系統、合作夥伴和客戶提供安全、即時的連線。旨在強化資料流，符合合規要求，並隨著您的業務增長而擴展，從而簡化協作、降低風險並保持敏捷營運。'
    },
    'services-cloud-label': { en: 'Cloud', zh: '雲端' },
    'services-cloud-title': { en: 'Enterprise Cloud Solutions', zh: '企業雲端解決方案' },
    'services-cloud-desc': {
      en: 'Harnessing secure cloud infrastructure, we craft and deploy scalable platforms to elevate your financial operations — from transaction processing and regulatory reporting to global team collaboration. Our solutions are built to cut costs, enhance flexibility, and grow with your business demands, simplifying complex tasks and fueling organizational agility.',
      zh: '我們利用安全的雲端基礎架構，建構並部署可擴展的平台，以提升您的財務營運——從交易處理、監管報告到全球團隊協作。我們的解決方案旨在降低成本、增強靈活性，並隨著您的業務需求而擴展，簡化複雜的任務並提升組織敏捷性。'
    },
    'services-security-label': { en: 'Security', zh: '安全' },
    'services-security-title': { en: 'Cyber Security Solutions', zh: '網絡安全解決方案' },
    'services-security-desc': {
      en: 'Using cutting-edge threat intelligence, we develop and strengthen defenses to shield your financial assets — from transaction data and client information to core systems. Our solutions are built to block breaches, ensure compliance, and adapt to emerging risks, safeguarding daily operations and reinforcing organizational resilience.',
      zh: '我們運用尖端威脅情報，開發並強化防禦措施，保護您的金融資產——從交易資料、客戶資訊到核心系統。我們的解決方案旨在阻止違規行為、確保合規，並適應新興風險，保障日常營運安全並增強組織韌性。'
    },
    'services-ai-label': { en: 'Artificial Intelligence', zh: '人工智能' },
    'services-ai-title': { en: 'AI Solutions', zh: '人工智能解決方案' },
    'services-ai-desc': {
      en: 'Harnessing state-of-the-art artificial intelligence, we build and deploy smart tools to transform your financial processes — from fraud detection and algorithmic trading to personalized client insights. Our solutions are built to sharpen decision-making, automate complex tasks, and align with shifting market dynamics, enhancing operational precision and driving business growth.',
      zh: '我們利用最先進的人工智能技術，構建並部署智能工具以革新您的金融流程——從欺詐檢測和演算法交易到個性化客戶洞察。我們的解決方案旨在提升決策精準度、自動化複雜任務，並適應不斷變化的市場動態，增強營運精確度並推動業務增長。'
    },
    'services-quote': {
      en: '"One of the hardest things to do in technology is disrupt yourself."',
      zh: '"在技術領域，最難做的事情之一就是顛覆自己。"'
    },
    'services-quote-author': { en: '— Matt Mullenweg', zh: '— 馬特·查爾斯·穆倫維格' },

    // ===== 融資 funding.html =====
    'funding-hero-label': { en: 'Funding', zh: '融資服務' },
    'funding-hero-title': { en: 'MCF Funding Service', zh: 'MCF 融資服務' },
    'funding-why-label': { en: 'Why Choose Us', zh: '為什麼選擇我們' },
    'funding-why-title': { en: 'Empowering Fintech Growth in Hong Kong', zh: '推動香港金融科技發展' },
    'funding-why-desc': {
      en: 'In Hong Kong\'s dynamic FinTech landscape, we empower established players to adapt and innovate while providing startups with the targeted resources they need to scale. We also guide investors toward actionable opportunities. Our commitment is to foster growth that not only strengthens the individual businesses but also enhances the broader financial community, reinforcing Hong Kong\'s position as a global FinTech hub.',
      zh: '在香港蓬勃發展的金融科技領域，我們賦能成熟企業適應並創新，同時為初創公司提供拓展規模所需的精準資源。我們亦引導投資者把握切實可行的投資機會。我們致力於促進增長，不僅增強個體企業實力，更提升整個金融界的水平，鞏固香港作為全球金融科技中心的地位。'
    },
    'funding-badge-main': { en: 'HK FinTech', zh: '香港金融科技' },
    'funding-badge-sub': { en: 'Global Hub', zh: '國際樞紐' },
    'funding-opp-label': { en: 'Opportunities', zh: '融資機遇' },
    'funding-opp-title': { en: 'Funding Opportunities', zh: '萬利科技有限公司的融資機遇' },
    'funding-opp1-label': { en: 'Enterprise Innovation', zh: '企業創新' },
    'funding-opp1-desc': {
      en: 'Provide funding consulting service to facilitate the adoption of cutting-edge fintech solutions by local enterprises, organisations, and the public sector, with a view to promoting innovation and technology in Hong Kong\'s financial industry.',
      zh: '提供融資諮詢服務，促進本地企業、機構及公營部門採用尖端金融科技解決方案，推動香港金融業的創新科技發展。'
    },
    'funding-opp2-label': { en: 'Talent Development', zh: '人才培育' },
    'funding-opp2-desc': {
      en: 'Provide funding consulting service to technology talent for them to undertake research and development work in Hong Kong, and to local enterprises for their staff to receive fintech training.',
      zh: '提供融資諮詢服務，為科技人才提供在港從事研發工作的機會，並為本地企業提供員工接受金融科技培訓的機會。'
    },
    'funding-commit-label': { en: 'Our Commitment', zh: '我們的承諾' },
    'funding-commit-title': { en: 'Funding Scheme and Support', zh: '融資計劃及支持' },
    'funding-commit-desc': {
      en: 'At MC Fintech Solutions Limited, we are committed to fostering innovation and technological advancement in Hong Kong\'s fintech sector. Our funding initiatives aim to support local enterprises, startups, and talent in driving the future of financial technology.',
      zh: '在萬利科技有限公司，我們致力於促進香港金融科技領域的創新和技術進步。我們的融資計劃旨在支持本地企業、初創公司和人才，共同推動金融科技的未來。'
    },
    'funding-support-label': { en: 'Supporting Services', zh: '支援服務' },
    'funding-support-title': { en: 'How We Help You Succeed', zh: '我們如何助您邁向成功' },
    'funding-card1-title': { en: 'Fundraising Solution', zh: '融資解決方案' },
    'funding-card1-desc': {
      en: 'End-to-end fundraising support to connect your fintech venture with the right investors and capital sources.',
      zh: '端到端的融資支援，將您的金融科技項目與合適的投資者和資金來源對接。'
    },
    'funding-card2-title': { en: 'Pitch Deck Creation Service', zh: '融資演示製作服務' },
    'funding-card2-desc': {
      en: 'Compelling, investor-ready pitch decks that articulate your vision and demonstrate market opportunity.',
      zh: '引人注目、面向投資者的專業演示，清晰闡述您的願景並展示市場機遇。'
    },
    'funding-card3-title': { en: 'Financial Modeling Service', zh: '財務建模服務' },
    'funding-card3-desc': {
      en: 'Robust financial models and projections to support funding applications and strategic planning.',
      zh: '穩健的財務模型和預測，為融資申請和策略規劃提供支援。'
    },
    'funding-card4-title': { en: 'Investment Outreach Service', zh: '投資拓展服務' },
    'funding-card4-desc': {
      en: 'Strategic outreach to our network of investors, venture capital firms, and institutional backers.',
      zh: '策略性地對接我們的投資者、風險投資公司和機構支持者網絡。'
    },
    'funding-card5-title': { en: 'Market Research Support', zh: '市場研究支援' },
    'funding-card5-desc': {
      en: 'Data-driven market research to validate your concept, size opportunities, and inform strategy.',
      zh: '數據驅動的市場研究，驗證您的概念、評估機遇並指導策略方向。'
    },
    'funding-card6-title': { en: 'Fintech Legal Support Service', zh: '金融科技法律支援服務' },
    'funding-card6-desc': {
      en: 'Expert legal guidance on licensing, compliance, regulatory requirements, and funding agreements.',
      zh: '就牌照、合規、監管要求和融資協議提供專業法律指導。'
    },
    'funding-cta-label': { en: 'Get Started', zh: '立即開始' },
    'funding-cta-title': { en: 'Ready to secure your funding?', zh: '準備好獲取融資了嗎？' },
    'funding-cta-desc': {
      en: 'Contact our team today to learn how we can support your fintech journey.',
      zh: '立即聯絡我們的團隊，了解我們如何支持您的金融科技之旅。'
    },
    'funding-cta-btn': { en: 'Contact Us →', zh: '聯絡我們 →' },

    // ===== 推廣 promotion.html =====
    'promotion-hero-label': { en: 'Latest Innovations', zh: '最新產品' },
    'promotion-hero-title': { en: 'Store', zh: '商店' },
    'promotion-hero-desc': {
      en: 'Join MC Fintech Solutions Limited: Innovate the Future of Finance',
      zh: '加入萬利科技有限公司：創新金融的未來'
    },
    'promotion-intro-label': { en: 'What\'s New', zh: '最新動態' },
    'promotion-intro-title': { en: 'At the forefront of fintech innovation', zh: '走在金融科技創新前沿' },
    'promotion-intro-desc': {
      en: 'At MC Fintech Solutions Limited, we\'re passionate about revolutionizing the financial technology landscape. We\'re thrilled to introduce our latest innovations designed to keep you at the forefront of the fintech industry.',
      zh: '在萬利科技有限公司，我們熱衷於革新金融科技領域。我們很高興向您介紹我們最新的創新產品，旨在讓您始終走在金融科技行業的前沿。'
    },
    'promotion-products-label': { en: 'Our Products', zh: '我們的產品' },
    'promotion-date1': { en: 'Aug 23, 2026', zh: '2026年8月23日' },
    'promotion-product1-title': { en: 'F Plus Program', zh: 'F Plus 計劃' },
    'promotion-product1-desc': { en: 'Advanced AI-driven algorithm to detect and analyze currency trends.', zh: '先進的 AI 驅動演算法，用於檢測和分析貨幣趨勢。' },
    'promotion-date2': { en: 'Oct 14, 2026', zh: '2026年10月14日' },
    'promotion-product2-title': { en: 'Smartwatch', zh: '智能手錶' },
    'promotion-product2-desc': { en: 'Light-weight and customized watch for daily operations', zh: '輕巧而度身訂造的日常營運手錶' },
    'promotion-date3': { en: 'Aug 23, 2026', zh: '2026年8月23日' },
    'promotion-product3-title': { en: 'Laptop 1000', zh: '手提電腦 1000' },
    'promotion-product3-desc': { en: 'High quality and user-friendly laptop to assist your work', zh: '高品質、易於使用的手提電腦，助您高效工作' },
    'promotion-cta-label': { en: 'Don\'t Miss Out', zh: '切勿錯過' },
    'promotion-cta-title': { en: 'Transform your financial operations', zh: '革新您的金融營運' },
    'promotion-cta-desc': {
      en: 'Don\'t miss this opportunity to transform your financial operations with MC Fintech Solutions Limited. Contact us today to schedule a demo and experience the future of fintech!',
      zh: '不要錯過這個與萬利科技有限公司一起革新您金融營運的機會。立即聯絡我們，安排演示並體驗金融科技的未來！'
    },
    'promotion-cta-btn': { en: 'Contact Us →', zh: '立即體驗 →' },

    // ===== AI 影片 ai-videos.html =====
    'aivideos-hero-label': { en: 'AI-Powered', zh: '人工智能驅動' },
    'aivideos-hero-title': { en: 'AI Videos', zh: 'AI 影片' },
    'aivideos-hero-desc': {
      en: 'Discover Distinctive Advantages and Impactful Results',
      zh: '發掘獨特優勢，成就非凡效果'
    },
    'aivideos-intro-label': { en: 'Our AI Video Services', zh: '我們的 AI 影片服務' },
    'aivideos-intro-title': { en: 'Exclusive AI video experiences', zh: '獨家 AI 影片體驗' },
    'aivideos-intro-desc': {
      en: 'Explore three exclusive AI video services designed to preserve memories, enhance professional presence, and engage financial audiences.',
      zh: '探索三項旨在保存回憶、提升專業形象和吸引金融受眾的獨家 AI 影片服務。'
    },
    'aivideos-card1-title': { en: 'My Way: Cherished Memory Videos', zh: 'My Way：珍藏回憶影片' },
    'aivideos-card1-desc': {
      en: 'Craft heartfelt AI-generated videos capturing milestones like weddings and graduations, creating lasting personal keepsakes.',
      zh: '製作感人至深的 AI 生成影片，記錄婚禮和畢業典禮等重要里程碑，留下永恆的個人紀念。'
    },
    'aivideos-card1-btn': { en: 'Explore My Way →', zh: '探索 My Way →' },
    'aivideos-card2-title': { en: 'Aura: Professional Introduction Videos', zh: 'Aura：專業自我介紹影片' },
    'aivideos-card2-desc': {
      en: 'Deliver polished personal introductions tailored for professionals, boosting confidence and making memorable first impressions.',
      zh: '為專業人士度身訂造的精美個人介紹，增強信心，留下難忘的第一印象。'
    },
    'aivideos-card2-btn': { en: 'Explore Aura →', zh: '探索 Aura →' },
    'aivideos-card3-title': { en: '儀+約你: Engaging Financial Videos', zh: '儀+約你：精彩金融影片' },
    'aivideos-card3-desc': {
      en: 'Produce captivating financial-themed AI videos featuring Mrs Cheung, designed to inform and entertain audiences effectively.',
      zh: '以張女士為主角，製作引人入勝的金融主題 AI 影片，旨在有效地傳遞資訊和娛樂觀眾。'
    },
    'aivideos-card3-btn': { en: 'Learn More →', zh: '了解更多 →' },
    'aivideos-deep-label': { en: 'Deep Dive', zh: '深入探索' },
    'aivideos-deep-title': { en: 'Explore each service in detail', zh: '詳細了解各項服務' },
    'aivideos-deep1-title': { en: 'My Way', zh: 'My Way' },
    'aivideos-deep1-desc': {
      en: 'Transform personal photos and audio into heartfelt AI video stories. Perfect for commemorating life\'s most meaningful milestones — from graduations and weddings to personal testaments.',
      zh: '將個人照片和音頻轉化為感人至深的 AI 影片故事。非常適合紀念人生中最有意義的時刻——從畢業典禮和婚禮到個人紀念。'
    },
    'aivideos-deep2-title': { en: 'Aura', zh: 'Aura' },
    'aivideos-deep2-desc': {
      en: 'Stand out with a stunning one-minute professional intro video featuring your digital avatar, custom backgrounds, and AI-enhanced voiceovers in English, Mandarin, or Cantonese.',
      zh: '以精彩的個人數碼化身、自訂背景以及英語、普通話或粵語的 AI 增強配音，製作驚艷的一分鐘專業自我介紹影片，讓您脫穎而出。'
    },
    'aivideos-deep3-title': { en: '儀+約你', zh: '儀+約你' },
    'aivideos-deep3-desc': {
      en: 'Engaging AI financial videos presented by Mrs Cheung, designed to make complex financial concepts accessible and entertaining for a broad audience.',
      zh: '由張女士主持的精彩 AI 金融影片，旨在讓普羅大眾輕鬆理解複雜的金融概念，寓教於樂。'
    },
    'aivideos-deep1-btn': { en: 'View Details →', zh: '查看詳情 →' },
    'aivideos-deep2-btn': { en: 'View Details →', zh: '查看詳情 →' },
    'aivideos-deep3-btn': { en: 'Enquire Now →', zh: '立即查詢 →' },
    'aivideos-cta-label': { en: 'Get Started', zh: '立即開始' },
    'aivideos-cta-title': { en: 'Ready to create your AI video?', zh: '準備好製作您的 AI 影片了嗎？' },
    'aivideos-cta-desc': {
      en: 'Contact us today to learn more about our AI video services and how they can transform your story.',
      zh: '立即聯絡我們，了解更多關於 AI 影片服務的資訊，以及我們如何為您的故事帶來改變。'
    },
    'aivideos-cta-btn': { en: 'Contact Us →', zh: '聯絡我們 →' },

    // ===== My Way my-way.html =====
    'myway-hero-label': { en: 'AI Memory Videos', zh: 'AI 回憶影片' },
    'myway-hero-title': { en: 'My Way: Your Memorable Voice and Appearance Recorder', zh: 'My Way：記錄您的聲音與形象' },
    'myway-hero-desc': { en: 'Preserve your precious memories in My Way', zh: '用 My Way 保存您的珍貴回憶' },
    'myway-about-label': { en: 'About My Way', zh: '關於 My Way' },
    'myway-about-title': { en: 'Transform your photos and sounds into heartfelt video stories', zh: '將您的照片和聲音轉化為感人至深的影片故事' },
    'myway-about-desc': {
      en: 'Discover how My Way transforms your photos and sounds into heartfelt video stories that cherish your treasured moments.',
      zh: '發掘 My Way 如何將您的照片和聲音轉化為感人至深的影片故事，珍藏您的寶貴時刻。'
    },
    'myway-features-label': { en: 'Features', zh: '特色功能' },
    'myway-features-title': { en: 'What makes My Way special', zh: 'My Way 的獨特之處' },
    'myway-feature1-title': { en: 'True Narrative', zh: '真實敘事' },
    'myway-feature1-desc': {
      en: 'Create memorable videos using your own images and audio, crafted uniquely to tell your personal story with emotional depth.',
      zh: '使用您自己的圖像和音頻製作難忘的影片，以獨特方式講述您的個人故事，充滿情感深度。'
    },
    'myway-feature2-title': { en: 'Exclusive Customization', zh: '獨家訂製' },
    'myway-feature2-desc': {
      en: 'Highly customized your video theme, avatar image, dubbing language to match personal stories and identities.',
      zh: '高度訂製您的影片主題、虛擬形象和配音語言，完美匹配您的個人故事和身份。'
    },
    'myway-feature3-title': { en: 'Simple Operation', zh: '簡單操作' },
    'myway-feature3-desc': {
      en: 'Smart templates are provided, making it accessible and enjoyable for everyone to preserve memories.',
      zh: '提供智能模板，讓每個人都能輕鬆愉快地保存回憶。'
    },
    'myway-scenarios-label': { en: 'Use Cases', zh: '適用場景' },
    'myway-scenarios-title': { en: 'Capture every milestone', zh: '記錄每個重要里程碑' },
    'myway-scenario1': { en: 'Graduation', zh: '畢業典禮' },
    'myway-scenario2': { en: 'Career Success', zh: '事業有成' },
    'myway-scenario3': { en: 'Marriage', zh: '婚禮' },
    'myway-scenario4': { en: 'Childbirth', zh: '新生命誕生' },
    'myway-scenario5': { en: 'Testament', zh: '遺囑' },
    'myway-scenario6': { en: 'Others', zh: '其他' },
    'myway-testimonial': {
      en: '"My Way transformed our special moments into unforgettable stories with heartfelt creativity and flawless execution."',
      zh: '"My Way 用真摯的創意和完美的執行，將我們的特別時刻轉化為令人難忘的故事。"'
    },
    'myway-testimonial-author': { en: 'Emily Parker', zh: 'Emily Parker' },
    'myway-testimonial-role': { en: 'Event Coordinator', zh: '活動策劃' },
    'myway-cta-label': { en: 'Start Today', zh: '立即開始' },
    'myway-cta-title': { en: 'Ready to preserve your memories?', zh: '準備好保存您的回憶了嗎？' },
    'myway-cta-desc': {
      en: 'Contact us to learn more about My Way and start creating your video story.',
      zh: '聯絡我們以了解更多關於 My Way 的資訊，並開始創作您的影片故事。'
    },
    'myway-cta-btn': { en: 'Get Started →', zh: '立即開始 →' },

    // ===== Aura aura.html =====
    'aura-hero-label': { en: 'Professional AI Videos', zh: '專業 AI 影片' },
    'aura-hero-title': { en: 'Aura: Your AI-Powered Professional Intro Video', zh: 'Aura：您的 AI 驅動專業自我介紹影片' },
    'aura-hero-desc': { en: 'Customize Your Introduction Video in Aura', zh: '在 Aura 中訂製您的自我介紹影片' },
    'aura-about-label': { en: 'About Aura', zh: '關於 Aura' },
    'aura-about-title': { en: 'Own your spotlight', zh: '成為眾人焦點' },
    'aura-about-desc': {
      en: 'Stand out instantly with Aura. We craft stunning, one-minute intro videos featuring your realistic digital avatar, custom professional backgrounds, and crystal-clear, AI-enhanced voiceovers – in English, Mandarin, or Cantonese. Perfect your pitch, own your spotlight. Ready to shine?',
      zh: '使用 Aura 立即脫穎而出。我們為您製作精彩的一分鐘自我介紹影片，配備逼真的數碼化身、自訂專業背景以及英語、普通話或粵語的清晰 AI 增強配音。完善您的表達，成為眾人焦點。準備好發光發亮了嗎？'
    },
    'aura-advantages-label': { en: 'Advantages', zh: '獨特優勢' },
    'aura-advantages-title': { en: 'Why choose Aura?', zh: '為什麼選擇 Aura？' },
    'aura-adv1-title': { en: 'One-Minute Highlights', zh: '一分鐘精華' },
    'aura-adv1-desc': { en: 'Introduce your core value during the prime attention period', zh: '在最佳注意力時段介紹您的核心價值' },
    'aura-adv2-title': { en: 'Realistic and Vivid Portraits', zh: '逼真生動的形象' },
    'aura-adv2-desc': { en: 'Generate a one-to-one dynamic image based on your photos', zh: '基於您的照片生成一對一的動態形象' },
    'aura-adv3-title': { en: 'Professional Customized Background', zh: '專業訂製背景' },
    'aura-adv3-desc': { en: 'Customize pictures and text backgrounds, and choose from a variety of professional templates', zh: '自訂圖片和文字背景，並從多種專業模板中選擇' },
    'aura-adv4-title': { en: 'Optional Video Language', zh: '可選影片語言' },
    'aura-adv4-desc': { en: 'You can choose Mandarin, Cantonese or English dubbing to flexibly match application scenarios', zh: '可選擇普通話、粵語或英語配音，靈活匹配不同應用場景' },
    'aura-process-label': { en: 'Process', zh: '製作流程' },
    'aura-process-title': { en: 'How Aura Works', zh: 'Aura 如何運作' },
    'aura-step1-title': { en: 'Personalize Your Profile', zh: '個人化您的個人資料' },
    'aura-step1-desc': { en: 'Start by preparing your portrait and a sound recording.', zh: '首先準備您的肖像和錄音。' },
    'aura-step2-title': { en: 'Customize Your Video', zh: '訂製您的影片' },
    'aura-step2-desc': { en: 'Fill out the Google Form for your introduction video script and background.', zh: '填寫 Google 表單，提供您的自我介紹影片腳本和背景。' },
    'aura-step3-title': { en: 'Finalize and Share', zh: '定稿並分享' },
    'aura-step3-desc': { en: 'Review your video, make final tweaks, and download or share.', zh: '檢視您的影片，進行最後調整，然後下載或分享。' },
    'aura-cta-label': { en: 'Get Started', zh: '立即開始' },
    'aura-cta-title': { en: 'Ready to shine with Aura?', zh: '準備好用 Aura 發光發亮嗎？' },
    'aura-cta-desc': { en: 'Contact us today to create your professional AI introduction video.', zh: '立即聯絡我們，創作您的專業 AI 自我介紹影片。' },
    'aura-cta-btn': { en: 'Create Your Aura →', zh: '創作您的 Aura →' },

    // ===== 商店 shop.html =====
    'shop-hero-label': { en: 'Products', zh: '產品' },
    'shop-hero-title': { en: 'Shop', zh: '商店' },
    'shop-intro-label': { en: 'Available Now', zh: '現已發售' },
    'shop-intro-title': { en: 'Our Products', zh: '我們的產品' },
    'shop-product-title': { en: 'Computer', zh: '電腦' },
    'shop-product-desc': { en: 'High-performance computer for professional use.', zh: '高效能專業電腦，滿足日常工作所需。' },
    'shop-product-btn': { en: 'Add to Cart', zh: '加入購物車' },

    // ===== 加入我們 join-us.html =====
    'joinus-hero-label': { en: 'Careers', zh: '招賢納士' },
    'joinus-hero-title': { en: 'Join Our Team Today', zh: '今天就加入我們的團隊' },
    'joinus-intro-label': { en: 'Why Join Us', zh: '為何加入我們' },
    'joinus-intro-title': { en: 'Be part of the fintech revolution', zh: '成為金融科技革命的一份子' },
    'joinus-intro-desc': {
      en: 'At MC Fintech Solutions Limited, we\'re at the forefront of fintech innovation, developing cutting-edge software and providing expert IT consultancy. We\'re always looking for talented individuals to join our dynamic team. If you\'re passionate about technology and finance, we want to hear from you!',
      zh: '萬利科技公司站在金融科技創新的前沿，致力於開發尖端軟件並提供專業的 IT 諮詢服務。我們始終期待優秀人才加入我們充滿活力的團隊。如果您對科技和金融充滿熱情，我們期待您的加入！'
    },
    'joinus-positions-label': { en: 'Open Positions', zh: '職位空缺' },
    'joinus-positions-title': { en: 'Find your role', zh: '尋找適合您的職位' },
    'joinus-role1-badge': { en: 'Internship', zh: '實習' },
    'joinus-role1-title': { en: 'Internship', zh: '實習生' },
    'joinus-role1-desc': {
      en: 'Learn from experienced developers, assist in developing and testing financial software.',
      zh: '向經驗豐富的開發人員學習，並獲得金融科技方面的實踐經驗，協助開發和測試金融軟件應用程式。'
    },
    'joinus-role1-req': { en: 'Requirements', zh: '要求' },
    'joinus-role1-req-val': { en: 'CS degree (in progress or completed)', zh: '目前正在攻讀計算機科學或相關領域的學位' },
    'joinus-role1-dur': { en: 'Duration', zh: '為期' },
    'joinus-role1-dur-val': { en: '3–6 months', zh: '3 至 6 個月' },
    'joinus-role2-badge': { en: 'Full-Time', zh: '全職' },
    'joinus-role2-title': { en: 'Technician', zh: '技術人員' },
    'joinus-role2-desc': {
      en: 'Technical support for fintech products, ensuring smooth operation and excellent client service.',
      zh: '為我們的金融科技產品和服務提供技術支援，排查軟件問題並協助系統維護。'
    },
    'joinus-role2-req': { en: 'Requirements', zh: '要求' },
    'joinus-role2-req-val': {
      en: 'Bachelor\'s in IT/CS; 1–2 years experience',
      zh: 'IT、計算機科學或相關領域的學士學位，1 至 2 年 IT 支援或金融科技經驗'
    },
    'joinus-role3-badge': { en: 'Full-Time', zh: '全職' },
    'joinus-role3-title': { en: 'Assistant', zh: '助理' },
    'joinus-role3-desc': {
      en: 'Support senior consultants, conduct fintech trend research, and contribute to strategic projects.',
      zh: '在客戶項目和演示中為高級顧問提供支援，進行金融科技趨勢研究和市場分析。'
    },
    'joinus-role3-req': { en: 'Requirements', zh: '要求' },
    'joinus-role3-req-val': {
      en: 'Bachelor\'s in Business/Finance/CS; strong analytical skills',
      zh: '商業、金融或計算機科學學士學位，具備優秀的分析和溝通能力'
    },
    'joinus-cta-label': { en: 'Apply Now', zh: '立即申請' },
    'joinus-cta-title': { en: 'Join Us — Click Here →', zh: '加入我們 — 按此申請 →' },
    'joinus-cta-desc': {
      en: '"The only limit is the extent of your imagination." — Jayla H.',
      zh: '"唯一的限制是你想像力的邊界。" — Jayla H.'
    },
    'joinus-cta-btn': { en: 'Apply Now →', zh: '立即申請 →' },

    // ===== 聯絡我們 contact.html =====
    'contact-hero-label': { en: 'Reach Out', zh: '聯繫我們' },
    'contact-hero-title': { en: 'Contact', zh: '聯絡我們' },
    'contact-info-label': { en: 'Get In Touch', zh: '與我們聯繫' },
    'contact-info-title': { en: 'We\'d love to hear from you', zh: '我們樂意聆聽您的聲音' },
    'contact-address-label': { en: 'Address', zh: '地址' },
    'contact-address-val': {
      en: 'Unit 02, 12/F Boss Commercial Centre, 28 Ferry Street, Yau Ma Tei, Kowloon, Hong Kong',
      zh: '香港九龍佐敦渡船街28號寶時商業中心12樓1202室'
    },
    'contact-email-label': { en: 'Email', zh: '電郵' },
    'contact-phone-label': { en: 'Phone', zh: '電話' },
    'contact-getting-title': { en: 'Getting There', zh: '交通指南' },
    'contact-transport1-label': { en: 'By MTR', zh: '乘搭地鐵' },
    'contact-transport1-desc': {
      en: 'Yau Ma Tei Station (Tsuen Wan Line): Exit A1 or A2. Jordan Station (Kwun Tong Line): Exit C.',
      zh: '油麻地站（荃灣線）：A1 或 A2 出口。佐敦站（觀塘線）：C 出口。'
    },
    'contact-transport2-label': { en: 'By Bus', zh: '乘搭巴士' },
    'contact-transport2-desc': {
      en: '2E, 12, 914, 914X to Ferry Street Station.',
      zh: '搭乘 2E、12、914、914X 巴士到渡船街站。'
    },
    'contact-form-label': { en: 'Send a Message', zh: '發送訊息' },
    'contact-form-title': { en: 'How can we help?', zh: '我們可以如何幫助您？' },
    'contact-form-name-label': { en: 'Your Name', zh: '您的姓名' },
    'contact-form-name-placeholder': { en: 'John Smith', zh: '請輸入您的姓名' },
    'contact-form-email-label': { en: 'Email Address', zh: '電郵地址' },
    'contact-form-email-placeholder': { en: 'john@example.com', zh: '請輸入您的電郵' },
    'contact-form-msg-label': { en: 'Message', zh: '您的訊息' },
    'contact-form-msg-placeholder': { en: 'Tell us how we can help you...', zh: '請告訴我們如何為您提供協助…' },
    'contact-form-btn': { en: 'Send Message →', zh: '發送訊息 →' },

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
        { sel: '.bg-alt .section-header .section-label', key: 'index-services-label' },
        { sel: '.bg-alt .section-header h2', key: 'index-services-title' },
        { sel: '.bg-alt .section-header p', key: 'index-services-desc' },
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
        { sel: '.service-section:nth-child(1) .section-label', key: 'services-network-label' },
        { sel: '.service-section:nth-child(1) h3', key: 'services-network-title' },
        { sel: '.service-section:nth-child(1) .service-section-body p', key: 'services-network-desc' },
        { sel: '.service-section:nth-child(2) .section-label', key: 'services-cloud-label' },
        { sel: '.service-section:nth-child(2) h3', key: 'services-cloud-title' },
        { sel: '.service-section:nth-child(2) .service-section-body p', key: 'services-cloud-desc' },
        { sel: '.service-section:nth-child(3) .section-label', key: 'services-security-label' },
        { sel: '.service-section:nth-child(3) h3', key: 'services-security-title' },
        { sel: '.service-section:nth-child(3) .service-section-body p', key: 'services-security-desc' },
        { sel: '.service-section:nth-child(4) .section-label', key: 'services-ai-label' },
        { sel: '.service-section:nth-child(4) h3', key: 'services-ai-title' },
        { sel: '.service-section:nth-child(4) .service-section-body p', key: 'services-ai-desc' },
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
        { sel: '.bg-alt .section-header .section-label', key: 'funding-opp-label' },
        { sel: '.bg-alt .section-header h2', key: 'funding-opp-title' },
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
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(1) h4', key: 'aivideos-deep1-title' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(1) p', key: 'aivideos-deep1-desc' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(1) .read-more', key: 'aivideos-deep1-btn' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(2) h4', key: 'aivideos-deep2-title' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(2) p', key: 'aivideos-deep2-desc' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(2) .read-more', key: 'aivideos-deep2-btn' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(3) h4', key: 'aivideos-deep3-title' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(3) p', key: 'aivideos-deep3-desc' },
        { sel: 'section:nth-of-type(3) .funding-card:nth-child(3) .read-more', key: 'aivideos-deep3-btn' },
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
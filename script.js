/**
 * Mohamed Gomaa Portfolio - Main JavaScript
 * Optimized for: Performance, Low RAM Devices, and Mobile UX
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==============================
  // 1) Translations
  // ==============================
  const translations = {
    en: {
      logo: "Mohamed Gomaa",
      navAbout: "About", navServices: "Services", navSkills: "Skills",
      navWork: "Work", navEducation: "Education", navContact: "Contact",
      heroGreeting: "Hi, I’m Mohamed Gomaa", heroName: "Hi, I’m",
      heroRole: "Data Analyst",
      heroDesc: "I specialize in transforming raw data into actionable insights. Skilled in Python, SQL, Excel, and Power BI, I help businesses make confident, data-driven decisions.",
      btnContact: "Get in touch", btnPortfolio: "View portfolio",
      statusText: "Available for Consulting",
      eduTitle: "Education & Certifications", eduDesc: "My academic journey and professional certifications.",
      edu1Title: "Google Data Analytics Certificate", edu1Desc: "Intensive program covering SQL, R, dashboards, and data storytelling.",
      edu2Title: "NVIDIA Certificate", edu2Desc: "Specialized certification in data processing and technical expertise.",
      viewLinkedin: "View on LinkedIn", viewBtn: "View",
      skillsTitle: "Technical Toolkit",
      proj1Title: "Walmart Sales Analysis — Power BI", proj1Desc: "Analyzed sales data by exploring, cleaning, and modeling it in Power BI. Built DAX measures (MoM, YoY) and interactive dashboards.",
      proj2Title: "HR Attrition Analysis — Power BI", proj2Desc: "Created a dashboard showing how income, satisfaction, and job level impact attrition rates using Power Query and Data Modeling.",
      proj3Title: "Super Store Analysis — Power BI", proj3Desc: "Analyzed sales trends, top segments, and geographic growth to extract insights for retail business optimization.",
      tagPowerBI: "Power BI", tagHR: "HR Analytics", tagRetail: "Retail",
      levelExpert: "Expert", levelProfessional: "Professional", levelIntermediate: "Intermediate", levelBeginner: "Beginner",
      skillsSubtitle: "Practical tools I use to clean, model, visualize, and deploy insights.",
      servicesTitle: "Professional Services",
      servicesSubtitle: "Specialized data solutions to help you unlock the full potential of your business information.",
      serv1Title: "Data Analysis", serv1Desc: "Transforming raw data into meaningful insights using Python and SQL to drive business growth.",
      serv2Title: "Dashboards", serv2Desc: "Building dynamic reports in Power BI and Excel for real-time tracking and decision making.",
      serv3Title: "ML Models", serv3Desc: "Using Machine Learning algorithms to forecast future trends and complex business outcomes.",
      serv4Title: "Data Cleaning", serv4Desc: "Ensuring data accuracy and consistency by cleaning and structuring messy datasets.",
      projectsTitle: "Selected Projects", projectsSubtitle: "Explore my data analysis journey through these featured works",
      btnSlides: "Slides", btnCode: "Code", btnDemo: "Demo",
      contactTitle: "Get In Touch",
      contactSubtitle: "Feel free to reach out through email, LinkedIn, or WhatsApp. I’m always open to new opportunities.",
      methodEmail: "Email", methodLinkedin: "LinkedIn", methodWhatsapp: "WhatsApp",
      hintEmail: "Send a message", hintLinkedin: "Let's connect", hintWhatsapp: "Chat now",
      footerText: "© 2026 Mohamed Gomaa. All rights reserved."
    },
    ar: {
      logo: "محمد جمعه",
      navAbout: "من أنا", navServices: "الخدمات", navSkills: "المهارات",
      navEducation: "تعليمي", navWork: "أعمالي", navContact: "اتصل بي",
      heroGreeting: "مرحباً، أنا محمد جمعة", heroName: "مرحباً، أنا",
      heroRole: "محلل بيانات",
      heroDesc: "أنا متخصص في تحويل البيانات الخام إلى رؤى قابلة للتنفيذ. متمكن من Python و SQL و Excel و Power BI، أساعد الشركات على اتخاذ قرارات واثقة قائمة على البيانات.",
      btnContact: "تواصل معي", btnPortfolio: "عرض أعمالي",
      statusText: "متاح للاستشارات",
      eduTitle: "التعليم والشهادات", eduDesc: "رحلتي الأكاديمية والشهادات المهنية.",
      edu1Title: "شهادة جوجل لتحليل البيانات", edu1Desc: "برنامج مكثف يغطي SQL و R ولوحات البيانات وسرد القصص بالبيانات.",
      edu2Title: "شهادة NVIDIA", edu2Desc: "شهادة متخصصة في معالجة البيانات والخبرة التقنية المتقدمة.",
      viewLinkedin: "عرض LinkedIn", viewBtn: "عرض",
      levelExpert: "خبير", levelProfessional: "محترف", levelIntermediate: "متوسط", levelBeginner: "مبتدئ",
      proj1Title: "تحليل مبيعات وول مارت — Power BI", proj1Desc: "تحليل بيانات المبيعات من خلال الاستكشاف والتنظيف والنمذجة في Power BI. بناء مقاييس DAX ولوحات تحكم تفاعلية.",
      proj2Title: "تحليل ترك العمل (HR) — Power BI", proj2Desc: "إنشاء لوحة تحكم توضح كيفية تأثير الدخل والرضا والمستوى الوظيفي على معدلات ترك العمل باستخدام Power Query.",
      proj3Title: "تحليل المتجر العملاق (Super Store) — Power BI", proj3Desc: "تحليل اتجاهات المبيعات، وأفضل الفئات، والنمو الجغرافي لاستخراج رؤى لتحسين أعمال التجزئة.",
      tagPowerBI: "باور بي آي", tagHR: "تحليلات الموارد البشرية", tagRetail: "التجزئة",
      skillsTitle: "الأدوات التقنية",
      skillsSubtitle: "الأدوات العملية التي أستخدمها لتنظيف ونمذجة وتصور البيانات.",
      servicesTitle: "الخدمات المهنية",
      servicesSubtitle: "حلول بيانات متخصصة لمساعدتك في استخراج القيمة الكاملة لمعلومات عملك.",
      serv1Title: "تحليل البيانات", serv1Desc: "تحويل البيانات الخام إلى رؤى ذات مغزى باستخدام Python و SQL لدفع نمو الأعمال.",
      serv2Title: "لوحات البيانات", serv2Desc: "بناء تقارير تفاعلية في Power BI و Excel للتتبع اللحظي واتخاذ القرارات.",
      serv3Title: "نماذج تعلم الآلة", serv3Desc: "استخدام خوارزميات تعلم الآلة للتنبؤ بالتوجهات المستقبلية ونتائج الأعمال المعقدة.",
      serv4Title: "تنظيف البيانات", serv4Desc: "ضمان دقة واتساق البيانات من خلال تنظيف وهيكلة مجموعات البيانات المعقدة.",
      projectsTitle: "مشاريع مختارة", projectsSubtitle: "استكشف رحلتي في تحليل البيانات من خلال هذه الأعمال المميزة",
      btnSlides: "العرض", btnCode: "الكود", btnDemo: "تجربة",
      contactTitle: "تواصل معي",
      contactSubtitle: "لا تتردد في التواصل عبر البريد الإلكتروني أو LinkedIn أو WhatsApp. أنا متاح دائماً للفرص الجديدة.",
      methodEmail: "البريد الإلكتروني", methodLinkedin: "لينكد إن", methodWhatsapp: "واتساب",
      hintEmail: "أرسل رسالة", hintLinkedin: "لنكن على اتصال", hintWhatsapp: "تحدث الآن",
      footerText: "© 2026 جميع الحقوق محفوظة لمحمد جمعة."
    }
  };


  // ==============================
  // 2) Language Toggle
  // ==============================
  const langToggle = document.getElementById('lang-toggle');
  const langText = document.getElementById('lang-text');
  let currentLang = localStorage.getItem('lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (langText) langText.textContent = lang === 'ar' ? 'EN' : 'AR';

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = translations?.[lang]?.[key];
      if (!val) return;

      // If there is a span inside (like your hint spans), update span only
      const span = el.querySelector('span');
      if (span) span.textContent = val;
      else el.textContent = val;
    });

    // Update hero heading (preserve gradient span)
    const heroH1 = document.querySelector('.hero-text h1');
    if (heroH1) {
      heroH1.innerHTML = (lang === 'ar')
        ? `مرحباً، أنا <span class="text-gradient">محمد جمعة</span><br>محلل بيانات`
        : `Hi, I’m <span class="text-gradient">Mohamed Gomaa</span><br>Data Analyst`;
    }

    // Helper to update simple text nodes
    const updateText = (selector, key) => {
      const el = document.querySelector(selector);
      const val = translations?.[lang]?.[key];
      if (el && val) el.textContent = val;
    };

    updateText('.hero-description', 'heroDesc');
    updateText('.status-badge span', 'statusText');
    updateText('.skills-subtitle', 'skillsSubtitle');
    updateText('#services .section-header p', 'servicesSubtitle');
    updateText('#projects .section-header p', 'projectsSubtitle');
    updateText('#contact .section-header p', 'contactSubtitle');
    updateText('footer p', 'footerText');

    // Re-render icons after language changes (safe)
    if (window.lucide?.createIcons) window.lucide.createIcons();
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  setLanguage(currentLang);


  // ==============================
  // 3) Theme Toggle + Icons
  // ==============================
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  function updateThemeIcons(isDark) {
    if (sunIcon) sunIcon.style.display = isDark ? 'block' : 'none';
    if (moonIcon) moonIcon.style.display = isDark ? 'none' : 'block';
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    updateThemeIcons(false);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  }

  // Init lucide once after DOM ready
  if (window.lucide?.createIcons) window.lucide.createIcons();


  // ==============================
  // 4) Mobile Menu / Sidebar
  // ==============================
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.getElementById('nav-overlay');

  if (menuBtn && navLinks) {

    const setMenuState = (open) => {
      navLinks.classList.toggle('active', open);
      if (overlay) overlay.classList.toggle('active', open);

      // lock scroll when open
      document.body.style.overflow = open ? 'hidden' : 'auto';
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const toggleMenu = () => {
      const isOpen = navLinks.classList.contains('active');
      setMenuState(!isOpen);
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    if (overlay) {
      overlay.addEventListener('click', () => setMenuState(false));
    }

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuState(false));
    });

    // Close on outside click (only if open)
    document.addEventListener('click', (e) => {
      if (!navLinks.classList.contains('active')) return;
      const clickedInsideNav = navLinks.contains(e.target);
      const clickedMenuBtn = menuBtn.contains(e.target);
      if (!clickedInsideNav && !clickedMenuBtn) setMenuState(false);
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        setMenuState(false);
      }
    });
  }


  // ==============================
  // 5) Reveal Animation (Intersection Observer)
  // ==============================
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  // ==============================
  // 6) Navbar scroll effect (optimized)
  // ==============================
  const nav = document.querySelector('.navbar');
  let ticking = false;

  function onScroll() {
    if (!nav) return;

    const y = window.scrollY || 0;
    if (y > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onScroll);
  }, { passive: true });

  // initial
  onScroll();


  // ==============================
  // 7) Unified Modals (Certificates + Presentations)
  // ==============================
  const imgModal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const closeImgBtn = document.querySelector('.modal-close');

  const presModal = document.getElementById('presentationModal');
  const presIframe = document.getElementById('presIframe');
  const presTitle = document.getElementById('modalTitle');
  const closePresBtn = document.querySelector('.close-pres-modal');

  const closeImageModal = () => {
    if (!imgModal) return;
    imgModal.style.display = "none";
    if (modalImg) modalImg.src = "";
  };

  const closePresentationModal = () => {
    if (!presModal) return;
    presModal.classList.remove('active');
    if (presIframe) presIframe.src = "";
  };

  // Certificates modal triggers
  document.querySelectorAll('.trigger-modal').forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();

      const fullSrc = this.getAttribute('data-src');
      if (!fullSrc || !imgModal || !modalImg) return;

      modalImg.src = fullSrc;
      imgModal.style.display = "flex";
    });
  });

  // Presentation opener (make it global if you call it from HTML onclick)
  window.openPresentation = function openPresentation(filePath, title) {
    if (!presModal || !presIframe || !filePath) return;

    if (presTitle) presTitle.innerText = title || "";

    // Build absolute URL to file safely
    const baseDir = location.origin + location.pathname.replace(/[^/]*$/, '');
    const fileUrl = baseDir + filePath.replace(/^\/+/, '');

    presIframe.src = ""; // reset
    presIframe.src = `https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`;

    presModal.classList.add('active');
  };

  // Close buttons
  if (closeImgBtn) closeImgBtn.addEventListener('click', closeImageModal);
  if (closePresBtn) closePresBtn.addEventListener('click', closePresentationModal);

  // Close when clicking outside content (only if modals exist)
  window.addEventListener('click', (e) => {
    if (imgModal && e.target === imgModal) closeImageModal();
    if (presModal && e.target === presModal) closePresentationModal();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (imgModal && imgModal.style.display === 'flex') closeImageModal();
    if (presModal && presModal.classList.contains('active')) closePresentationModal();
  });

});
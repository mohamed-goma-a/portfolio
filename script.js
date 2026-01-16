/**
 * Mohamed Gomaa Portfolio - Main JavaScript
 * Optimized for: Performance, Low RAM Devices, and Mobile UX
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. مصفوفة الترجمة الشاملة
    const translations = {
        en: {
            logo : "Mohamed Gomaa",
            navAbout: "About", navServices: "Services", navSkills: "Skills",
            navWork: "Work", navEducation : "Education", navContact: "Contact",
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
            logo : "محمد جمعه",
            navAbout: "من أنا", navServices: "الخدمات", navSkills: "المهارات",
            navEducation : "تعليمي", navWork: "أعمالي", navContact: "اتصل بي",
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

    // 2. منطق تبديل اللغة
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        if(langText) langText.textContent = lang === 'ar' ? 'EN' : 'AR';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                const span = el.querySelector('span');
                if (span) span.textContent = translations[lang][key];
                else el.textContent = translations[lang][key];
            }
        });

        // تحديث الهيرو
        const heroH1 = document.querySelector('.hero-text h1');
        if (heroH1) {
            heroH1.innerHTML = lang === 'ar' 
                ? `مرحباً، أنا <span class="text-gradient">محمد جمعة</span><br>محلل بيانات`
                : `Hi, I’m <span class="text-gradient">Mohamed Gomaa</span><br>Data Analyst`;
        }

        const updateText = (selector, key) => {
            const el = document.querySelector(selector);
            if (el) el.textContent = translations[lang][key];
        };

        updateText('.hero-description', 'heroDesc');
        updateText('.status-badge span', 'statusText');
        updateText('.skills-subtitle', 'skillsSubtitle');
        updateText('#services .section-header p', 'servicesSubtitle');
        updateText('#projects .section-header p', 'projectsSubtitle');
        updateText('#contact .section-header p', 'contactSubtitle');
        updateText('footer p', 'footerText');
    }

    if(langToggle) {
        langToggle.onclick = () => setLanguage(currentLang === 'en' ? 'ar' : 'en');
    }
    setLanguage(currentLang);

    // 3. الثيم والأيقونات
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    function updateThemeIcons(isDark) {
        if(sunIcon) sunIcon.style.display = isDark ? 'block' : 'none';
        if(moonIcon) moonIcon.style.display = isDark ? 'none' : 'block';
    }

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    }

    if(themeToggle) {
        themeToggle.onclick = () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcons(isDark);
        };
    }

    lucide.createIcons();

    // 4. منطق المنيو الجانبي (Sidebar) - تحسين الأداء
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('nav-overlay');

    if (menuBtn && navLinks) {
        const toggleMenu = (state) => {
            navLinks.classList.toggle('active', state);
            if(overlay) overlay.classList.toggle('active', state);
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        };

        menuBtn.onclick = (e) => {
            e.stopPropagation();
            toggleMenu();
        };

        if(overlay) overlay.onclick = () => toggleMenu(false);

        navLinks.querySelectorAll('a').forEach(link => {
            link.onclick = () => toggleMenu(false);
        });
    }

    // 5. أنيميشن الظهور (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // تحسين الأداء: التوقف عن المراقبة بعد الظهور
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 6. تأثير السكرول للـ Navbar
    let lastScroll = 0;
    window.onscroll = () => {
        const nav = document.querySelector('.navbar');
        if(nav) {
            const currentScroll = window.scrollY;
            currentScroll > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
            lastScroll = currentScroll;
        }
    };
});
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 7. وظيفة فتح المودال الموحدة (عرض المشاريع والشهادات)
 * تم الدمج لتقليل استهلاك الذاكرة وتحسين الأداء
 */
function openContent(path, title, isImage = false) {
    const modal = document.getElementById('presentationModal');
    const iframe = document.getElementById('presIframe');
    const modalTitle = document.getElementById('modalTitle');

    if (!modal || !iframe) return;

    if (modalTitle) modalTitle.innerText = title;

    if (isImage) {
        // إذا كان المطلب عرض صورة (شهادة)
        iframe.src = path;
    } else {
        // إذا كان المطلب عرض ملف PDF (بريزنتيشن) باستخدام محرك جوجل
        const currentUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
        const fullURL = `${currentUrl}/${path}`;
        iframe.src = `https://docs.google.com/viewer?url=${encodeURIComponent(fullURL)}&embedded=true`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// تشغيل الوظيفة عند الضغط على أي عنصر يحمل كلاس trigger-modal (للشهادات)
document.querySelectorAll('.trigger-modal').forEach(element => {
    element.onclick = function(e) {
        e.preventDefault();
        const src = this.getAttribute('data-src');
        const title = this.closest('.certificate-card')?.querySelector('.cert-title')?.textContent || "Certificate";
        openContent(src, title, true); // true تعني أنها صورة
    };
});

// تشغيل الوظيفة للمشاريع (عن طريق الـ HTML onclick السابق)
// لتجنب أي تعارض، سنعيد تعريف الوظيفة القديمة لتستخدم الوظيفة الجديدة
function openPresentation(filePath, title) {
    openContent(filePath, title, false); // false تعني أنه ملف بريزنتيشن
}

// زر الإغلاق الموحد
const closePresBtn = document.querySelector('.close-pres-modal');
if (closePresBtn) {
    closePresBtn.onclick = function() {
        const modal = document.getElementById('presentationModal');
        const iframe = document.getElementById('presIframe');
        if (modal) modal.classList.remove('active');
        if (iframe) iframe.src = '';
        document.body.style.overflow = 'auto';
    };
}
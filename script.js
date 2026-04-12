/**
 * Wong Electric Inc. - Language Management System
 */

// Fallback translations in case transitions.txt fails to load (e.g. local file protocol)
let translations = {
    e: {
        nav_welcome: "Welcome",
        nav_about: "About Us",
        nav_careers: "Careers",
        nav_projects: "Projects",
        nav_contact: "Contact Us",
        hero_title: "Excellence in Electrical Solutions",
        hero_subtitle: "Licensed Electrical Contractor serving Montreal. RBQ: 5867-2353-01",
        about_title: "About Wong Electric Inc.",
        about_desc: "Wong Electric Inc. is a premier electrical contractor based in Montreal. specialized in commercial and industrial electrical work.",
        careers_title: "Join Our Team",
        careers_desc: "We are always looking for talented electricians. Check back soon!",
        projects_title: "Our Work Portfolio",
        projects_desc: "Showcasing our recent commercial and residential achievements.",
        proj1_title: "Commercial Complex",
        proj1_desc: "Full electrical installation for a new retail center.",
        proj2_title: "Residential Dwelling",
        proj2_desc: "High-quality electrical wiring and smart home integration for modern residences.",
        proj3_title: "Modern Office Space",
        proj3_desc: "Energy-efficient LED lighting and network cabling.",
        proj4_title: "Home Charging Station",
        proj4_desc: "Professional installation of Level 2 EV chargers for homes and multi-unit buildings.",
        proj5_title: "Exterior Lighting",
        proj5_desc: "Installation of electrical wiring for exterior lighting fixtures, showcasing the professional wiring process and final polished result.",
        contact_title: "Get in Touch",
        contact_phone: "Phone: (514) 638-3668",
        contact_email: "Email: info@wongelectric.ca",
        form_name: "Full Name",
        form_address: "Service Address",
        form_phone: "Phone Number",
        form_email: "Email Address",
        form_desc: "Description of work",
        form_submit: "Request Quotation"
    },
    f: {
        nav_welcome: "Bienvenue",
        nav_about: "À propos de nous",
        nav_careers: "Carrières",
        nav_projects: "Projets",
        nav_contact: "Contactez-nous",
        hero_title: "Excellence en Solutions Électriques",
        hero_subtitle: "Entrepreneur électricien licencié desservant Montréal. RBQ : 5867-2353-01",
        about_title: "À propos de Wong Électrique Inc.",
        about_desc: "Wong Électrique Inc. est un entrepreneur électricien de premier plan basé à Montréal, spécialisé dans les travaux électriques commerciaux et résidentiels.",
        careers_title: "Rejoignez notre équipe",
        careers_desc: "Nous sommes toujours à la recherche d'électriciens talentueux. Revenez bientôt !",
        projects_title: "Notre Portfolio",
        projects_desc: "Présentation de nos récentes réalisations.",
        proj1_title: "Complexe Commercial",
        proj1_desc: "Installation électrique complète pour un nouveau centre commercial.",
        proj2_title: "Habitation Résidentielle",
        proj2_desc: "Câblage électrique de haute qualité et intégration de maison intelligente pour résidences modernes.",
        proj3_title: "Espace de Bureau Moderne",
        proj3_desc: "Éclairage LED écoénergétique et câblage réseau.",
        proj4_title: "Station de recharge à domicile",
        proj4_desc: "Installation professionnelle de chargeurs de VE de niveau 2 pour les maisons et les immeubles multi-logements.",
        proj5_title: "Éclairage extérieur",
        proj5_desc: "Installation du câblage électrique pour les luminaires extérieurs, illustrant le processus de câblage professionnel et le résultat final impeccable.",
        contact_title: "Contactez-nous",
        contact_phone: "Tél : (514) 638-3668",
        contact_email: "Courriel : info@wongelectric.ca",
        form_name: "Nom complet",
        form_address: "Adresse de service",
        form_phone: "Numéro de téléphone",
        form_email: "Adresse courriel",
        form_desc: "Description des travaux",
        form_submit: "Demander un devis"
    },
    c: {
        nav_welcome: "歡迎",
        nav_about: "關於我們",
        nav_careers: "職位空缺",
        nav_projects: "工程項目",
        nav_contact: "聯絡我們",
        hero_title: "卓越的電氣解決方案",
        hero_subtitle: "服務於蒙特利爾的持牌電氣承包商。RBQ: 5867-2353-01",
        about_title: "關於宏電工程",
        about_desc: "宏電工程 (Wong Electric Inc.) 是蒙特利爾領先的電氣承包商，專注於商業和住宅電氣工程。",
        careers_title: "加入我們的團隊",
        careers_desc: "我們一直在尋找有才華的電工。請稍後查看！",
        projects_title: "工程案例",
        projects_desc: "展示我們最近的成就。",
        proj1_title: "商業綜合體",
        proj1_desc: "全新的零售中心電氣安裝工程。",
        proj2_title: "住宅房屋",
        proj2_desc: "為現代住宅提供高品質的電氣佈線和智能家居集成。",
        proj3_title: "現代辦公空間",
        proj3_desc: "節能 LED 照明和網絡佈線。",
        proj4_title: "家用充電站",
        proj4_desc: "為家庭和多單元建築提供專業的 2 級電動汽車充電器安裝。",
        proj5_title: "戶外照明",
        proj5_desc: "戶外照明燈具的電線安裝工程，展示了專業的佈線過程及最終齊整的完工效果。",
        contact_title: "聯絡我們",
        contact_phone: "電話：(514) 638-3668",
        contact_email: "電子郵件：info@wongelectric.ca",
        form_name: "姓名",
        form_address: "服務地址",
        form_phone: "電話號碼",
        form_email: "電子郵件",
        form_desc: "工作內容描述",
        form_submit: "索取報價"
    }
};

let currentLang = localStorage.getItem('lang') || 'e';

/**
 * Fetch and parse the translations.txt file
 */
async function loadTranslations() {
    console.log('Attempting to load translations.txt...');
    try {
        const response = await fetch('translations.txt');
        if (!response.ok) throw new Error('Could not fetch translations.txt');
        
        const text = await response.text();
        const lines = text.split('\n');

        lines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return;
            
            const firstColonIndex = trimmed.indexOf(':');
            if (firstColonIndex === -1) return;

            const fullKey = trimmed.substring(0, firstColonIndex).trim();
            const value = trimmed.substring(firstColonIndex + 1).trim();

            // Suffix detection: handles "key_e", "key#e", or just "1e" (last char)
            const langSuffix = fullKey.slice(-1);
            let key = fullKey;

            if (['e', 'f', 'c'].includes(langSuffix)) {
                // If it ends in _e or _f, remove two chars, else remove one
                if (fullKey.endsWith('_e') || fullKey.endsWith('_f') || fullKey.endsWith('_c')) {
                    key = fullKey.slice(0, -2);
                } else {
                    key = fullKey.slice(0, -1);
                }
                
                // Initialize if needed (though already initialized at top)
                if (!translations[langSuffix]) translations[langSuffix] = {};
                translations[langSuffix][key] = value;
            }
        });

        console.log('External translations merged successfully.');
        updateUI();
    } catch (error) {
        console.warn('Using fallback translations. Reason:', error.message);
        // Fallback is already pre-loaded, so we just ensure UI is updated
        updateUI();
    }
}

/**
 * Set the current language and update the UI
 */
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateUI();
}

/**
 * Update all elements with data-i18n attributes
 */
function updateUI() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        } else if (translations['e'][key]) {
            // Fallback to English for this specific key if missing in target
            el.textContent = translations['e'][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`lang-${currentLang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update HTML lang attribute
    const htmlLangMap = { 'e': 'en', 'f': 'fr', 'c': 'zh' };
    document.documentElement.lang = htmlLangMap[currentLang];
}

// Initial load
window.addEventListener('load', () => {
    loadTranslations();

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.classList.add('mobile-open');
            }
        });
    }
});

/**
 * Lightbox Slider Functionality
 */
const project5Images = [
    "portfolio/20250723/20250723-01.jpeg",
    "portfolio/20250723/20250723-02.jpeg",
    "portfolio/20250723/20250723-03.jpeg",
    "portfolio/20250723/20250723-04.jpeg",
    "portfolio/20250723/20250723-05.jpeg",
    "portfolio/20250723/20250723-06.jpeg"
];

let currentSlideIndex = 0;
let currentProjectImages = [];

function openLightbox(index) {
    currentProjectImages = project5Images;
    currentSlideIndex = index;
    const lightbox = document.getElementById('portfolio-lightbox');
    if (!lightbox) return;
    
    lightbox.style.display = 'flex';
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    
    showSlide(currentSlideIndex);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('portfolio-lightbox');
    if (!lightbox) return;
    
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
    document.body.style.overflow = 'auto';
}

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function showSlide(n) {
    if (n >= currentProjectImages.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = currentProjectImages.length - 1;
    
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const currentText = document.getElementById('current-slide');
    const totalText = document.getElementById('total-slides');
    
    if (img) img.src = currentProjectImages[currentSlideIndex];
    if (currentText) currentText.textContent = currentSlideIndex + 1;
    if (totalText) totalText.textContent = currentProjectImages.length;
    
    if (caption) {
        caption.textContent = translations[currentLang]['proj5_title'] || translations['e']['proj5_title'];
    }
}

// Global scope for onclick attributes in HTML
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeSlide = changeSlide;

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('portfolio-lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

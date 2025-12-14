// Translation data
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-contact': 'Contact',
        'about-title': 'About Us',
        'company-description': `CargoMate Cetem SL is built on a heritage of more than three decades in international road transportation. Our family has been active in the sector since 1991, developing a deep operational expertise and a reputation for reliability across European routes.

Founded as a second-generation initiative, CargoMate represents the evolution of that legacy. The company was created to combine established industry know-how with a younger, technology-driven perspective—integrating digital tools, modern workflows, and data-centric decision-making into every aspect of the operation.

Our mission is to deliver efficient, transparent, and dependable transport solutions while building on the values that shaped our first generation: commitment, integrity, and operational excellence. CargoMate aims not only to grow as an independent company but also to strengthen the long-term development of the broader family business ecosystem.

We operate with the mindset of a modern logistics partner—agile, adaptable, and focused on continuous improvement—while staying grounded in more than 30 years of experience moving goods safely and efficiently across borders.`,
        'contact-title': 'Contact',
        'email-label': 'Email'
    },
    es: {
        'nav-home': 'Inicio',
        'nav-contact': 'Contacto',
        'about-title': 'Sobre Nosotros',
        'company-description': `CargoMate Cetem SL se apoya en una trayectoria de más de tres décadas en el transporte internacional por carretera. Nuestra familia ha estado activa en el sector desde 1991, desarrollando una profunda experiencia operativa y una reputación de fiabilidad en rutas europeas.

Fundada como una iniciativa de segunda generación, CargoMate representa la evolución de ese legado. La empresa nace con el propósito de combinar el conocimiento consolidado del sector con una perspectiva joven y orientada al ámbito digital, integrando herramientas tecnológicas, flujos de trabajo modernos y una gestión basada en datos en cada etapa de la operación.

Nuestra misión es ofrecer soluciones de transporte eficientes, transparentes y consistentes, manteniendo los valores que definieron a la primera generación: compromiso, integridad y excelencia operativa. CargoMate aspira no solo a crecer como empresa independiente, sino también a impulsar el desarrollo a largo plazo del ecosistema empresarial familiar.

Operamos con la mentalidad de un socio logístico moderno —ágil, adaptable y enfocado en la mejora continua—, apoyándonos en más de 30 años de experiencia moviendo mercancías de forma segura y eficiente a través de fronteras.`,
        'contact-title': 'Contacto',
        'email-label': 'Correo Electrónico'
    },
    ro: {
        'nav-home': 'Acasă',
        'nav-contact': 'Contact',
        'about-title': 'Despre Noi',
        'company-description': `CargoMate Cetem SL se bazează pe o moștenire de peste trei decenii în transportul internațional rutier. Familia noastră este activă în domeniu încă din 1991, dezvoltând o expertiză operațională solidă și o reputație de fiabilitate pe rutele europene.

Fondată ca o inițiativă de a doua generație, CargoMate reprezintă evoluția acestui patrimoniu profesional. Compania a fost creată pentru a combina experiența consacrată din industrie cu o perspectivă tânără și puternic orientată către digitalizare, integrând instrumente tehnologice, fluxuri de lucru moderne și o abordare bazată pe date în fiecare etapă operațională.

Misiunea noastră este să furnizăm soluții de transport eficiente, transparente și constante, păstrând valorile care au definit prima generație: angajament, integritate și excelență operațională. CargoMate își propune nu doar să se dezvolte ca entitate independentă, ci și să contribuie la consolidarea și creșterea pe termen lung a ecosistemului de afaceri al familiei.

Operăm cu mentalitatea unui partener logistic modern — agil, adaptabil și orientat spre îmbunătățire continuă — sprijinindu-ne pe peste 30 de ani de experiență în transportul sigur și eficient al mărfurilor peste granițe.`,
        'contact-title': 'Contact',
        'email-label': 'Email'
    }
};

// Current language
let currentLanguage = 'en';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'company-description') {
                // Format description with line breaks
                element.innerHTML = translations[lang][key].replace(/\n\n/g, '<br><br>');
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    changeLanguage(savedLanguage);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
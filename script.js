// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking nav links
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// Translation data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-coverage': 'Coverage',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Reliable Road Transport & Logistics Across Europe',
        'hero-subtitle': 'CargoMate Cetem SL provides professional road freight and logistics solutions across Europe, built on over 30 years of operational expertise and a modern, data-driven approach to transport management.',

        'trust-1': 'EU-based company',
        'trust-2': 'Professional fleet partners',
        'trust-3': 'Multilingual operations (ES / EN / RO)',
        'cta-contact': 'Contact Us',
        
        // Services Section
        'services-title': 'Our Services',
        'service-intl-title': 'International Road Transport',
        'service-intl-desc': 'We provide international road transport services across Europe, ensuring safe, timely, and efficient delivery of goods. Our operations are structured to support cross-border logistics with full visibility, coordination, and consistent communication throughout the transport process.',
        'service-ftl-title': 'Full Truckload (FTL) & Dedicated Transport',
        'service-ftl-desc': 'CargoMate offers Full Truckload (FTL) and dedicated transport solutions tailored to specific route, timing, and capacity requirements. We support both regular and ad-hoc shipments, ensuring reliable execution, capacity availability, and operational control.',
        'service-ltl-title': 'Less Than Truckload (LTL) Transport',
        'service-ltl-desc': 'For shipments that do not require full truck capacity, we provide Less Than Truckload (LTL) solutions through optimized consolidation and trusted partner networks. Our LTL services focus on efficiency, dependable transit times, and clear coordination across European routes.',
        'service-taut-title': 'Tautliner Transport Services',
        'service-taut-desc': 'With a strong specialization in tautliner transport, we handle a wide range of cargo types requiring flexible loading and secure handling. Our experience enables us to support diverse freight requirements while maintaining high safety and operational standards.',
        'service-cross-title': 'Cross-Border EU Logistics',
        'service-cross-desc': 'We manage cross-border transport operations with a thorough understanding of European logistics standards and regulatory requirements. Our focus is on smooth coordination, compliance, and reliable execution across EU markets.',
        'service-fleet-title': 'Flexible Fleet & Partner-Based Network',
        'service-fleet-desc': 'CargoMate operates with a flexible, partner-based fleet model that allows us to adapt quickly to changing transport demands. By collaborating with trusted carriers, we ensure scalability, reliability, and consistent service quality.',
        'service-custom-title': 'Customized Transport Solutions',
        'service-custom-desc': 'Every client and shipment presents unique requirements. We work closely with our partners to design tailored transport solutions aligned with specific routing, timing, and operational needs—always with a focus on efficiency, reliability, and transparency.',
        
        // About Section
        'about-title': 'About Us',
        'about-experience-title': 'Built on Experience',
        'about-experience-desc': 'CargoMate Cetem SL is built on a heritage of more than three decades in international road transportation. Our family has been active in the sector since 1991, developing deep operational expertise and a reputation for reliability across European routes, with a strong specialization in tautliner transport services.',
        'about-evolution-title': 'Second-Generation Evolution',
        'about-evolution-desc': 'Founded as a second-generation initiative, CargoMate represents the evolution of that legacy. The company was created to combine established industry know-how with a younger, technology-driven perspective—integrating digital tools, modern workflows, and data-centric decision-making into every aspect of the operation.',
        'about-mission-title': 'Our Mission',
        'about-mission-desc': 'Our mission is to deliver efficient, transparent, and dependable transport solutions while upholding the values that shaped our first generation: commitment, integrity, and operational excellence.',
        'about-approach-title': 'Our Approach',
        'about-approach-desc': 'We operate with the mindset of a modern logistics partner—agile, adaptable, and focused on continuous improvement—while relying on more than 30 years of experience moving goods safely and efficiently across borders through tautliner-based road transport.',
        'about-future-title': 'Looking Forward',
        'about-future-desc': 'CargoMate aims not only to grow as an independent company but also to contribute to the long-term development of the broader family business ecosystem, maintaining the standards and values that have defined our operations for decades.',
        
        // Why CargoMate Section
        'why-cargomate-title': 'Why CargoMate',
        'why-1': 'Over 30 years of industry experience through a family-operated transport legacy',
        'why-2': 'Modern logistics mindset supported by digital tools and efficient workflows',
        'why-3': 'Clear communication and transparent operations',
        'why-4': 'Agile and adaptable approach to client requirements',
        
        // Coverage Section
        'coverage-title': 'Coverage',
        'coverage-desc': 'We operate across key European corridors, providing reliable transport solutions between Spain, Romania, Italy, Germany, the Netherlands, and other EU markets through a flexible network of trusted partners.',
        'route-3': 'EU-wide coverage via partners',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-desc': 'Request a quote or send us your CV.',
        'email-label': 'Email',
        'languages-label': 'Languages Supported',
        'languages-list': 'English, Spanish, Romanian',
        'form-title': 'Contact Form',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-company': 'Company',
        'form-message': 'Message',
        'form-submit': 'Send Message'
    },
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-about': 'Sobre Nosotros',
        'nav-coverage': 'Cobertura',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Transporte por Carretera y Logística Fiables en Toda Europa',
        'hero-subtitle': 'CargoMate Cetem SL ofrece soluciones profesionales de transporte de mercancías por carretera y logística en toda Europa, basadas en más de 30 años de experiencia operativa y en un enfoque moderno y orientado a los datos en la gestión del transporte.',

        'trust-1': 'Empresa con base en la UE',
        'trust-2': 'Socios de flota profesional',
        'trust-3': 'Operativa multilingüe: español, inglés y rumano',
        'cta-contact': 'Contáctanos',
        
        // Services Section
        'services-title': 'Servicios',
        'service-intl-title': 'Transporte Internacional por Carretera',
        'service-intl-desc': 'Prestamos servicios de transporte internacional por carretera en toda Europa, garantizando entregas seguras, puntuales y eficientes. Nuestras operaciones están diseñadas para ofrecer visibilidad total, coordinación y comunicación constante durante todo el proceso de transporte.',
        'service-ftl-title': 'Carga Completa (FTL) y Transporte Dedicado',
        'service-ftl-desc': 'CargoMate ofrece soluciones de carga completa (FTL) y transporte dedicado adaptadas a rutas, plazos y capacidades específicas. Atendemos tanto envíos regulares como puntuales, asegurando disponibilidad de capacidad y control operativo.',
        'service-ltl-title': 'Carga Parcial (LTL)',
        'service-ltl-desc': 'Para envíos que no requieren un camión completo, ofrecemos soluciones de carga parcial (LTL) mediante una consolidación optimizada y una red de colaboradores de confianza. Nuestro objetivo es garantizar eficiencia y tiempos de tránsito fiables en rutas europeas.',
        'service-taut-title': 'Transporte con Tautliner',
        'service-taut-desc': 'Con una sólida especialización en transporte con tautliner, gestionamos una amplia variedad de mercancías que requieren carga flexible y manipulación segura, manteniendo altos estándares de seguridad y calidad operativa.',
        'service-cross-title': 'Logística Transfronteriza en la UE',
        'service-cross-desc': 'Gestionamos operaciones de transporte transfronterizo con pleno conocimiento de la normativa y los estándares logísticos europeos, asegurando coordinación fluida, cumplimiento normativo y una ejecución fiable.',
        'service-fleet-title': 'Flota Flexible y Red de Colaboradores',
        'service-fleet-desc': 'Operamos con un modelo de flota flexible basado en colaboradores, lo que nos permite adaptarnos rápidamente a las necesidades del mercado, garantizando escalabilidad y un servicio constante.',
        'service-custom-title': 'Soluciones de Transporte a Medida',
        'service-custom-desc': 'Cada cliente y cada envío son únicos. Diseñamos soluciones de transporte personalizadas en función de requisitos específicos de ruta, plazos y operación, siempre con un enfoque en la eficiencia, la fiabilidad y la transparencia.',
        
        // About Section
        'about-title': 'Sobre Nosotros',
        'about-experience-title': 'Una Trayectoria Consolidada',
        'about-experience-desc': 'CargoMate Cetem SL se basa en una trayectoria de más de tres décadas en el transporte internacional por carretera. Nuestra familia está vinculada al sector desde 1991, acumulando una sólida experiencia operativa y una reputación de fiabilidad en las principales rutas europeas, con una especialización destacada en transporte mediante tautliner.',
        'about-evolution-title': 'Evolución de Segunda Generación',
        'about-evolution-desc': 'Fundada como una iniciativa de segunda generación, CargoMate representa la evolución natural de ese legado. La empresa nace con el objetivo de combinar el conocimiento tradicional del sector con una visión moderna y orientada a la tecnología, integrando herramientas digitales, procesos estructurados y decisiones basadas en datos en cada aspecto de la operación.',
        'about-mission-title': 'Nuestra Misión',
        'about-mission-desc': 'Nuestra misión es ofrecer soluciones de transporte eficientes, transparentes y fiables, manteniendo los valores que definieron a la primera generación: compromiso, integridad y excelencia operativa.',
        'about-approach-title': 'Nuestro Enfoque',
        'about-approach-desc': 'Operamos con la mentalidad de un socio logístico moderno: ágil, adaptable y orientado a la mejora continua, apoyándonos en más de 30 años de experiencia en el transporte seguro y eficiente de mercancías a través de fronteras europeas mediante transporte con tautliner.',
        'about-future-title': 'Mirando al Futuro',
        'about-future-desc': 'CargoMate aspira a crecer como empresa independiente y a contribuir al desarrollo a largo plazo del ecosistema empresarial familiar, manteniendo los estándares y valores que han definido nuestra actividad durante décadas.',
        
        // Why CargoMate Section
        'why-cargomate-title': 'Por Qué CargoMate',
        'why-1': 'Más de 30 años de experiencia en el sector a través de una trayectoria familiar',
        'why-2': 'Enfoque logístico moderno apoyado en herramientas digitales y procesos eficientes',
        'why-3': 'Comunicación clara y operaciones transparentes',
        'why-4': 'Capacidad de adaptación a las necesidades de cada cliente',
        
        // Coverage Section
        'coverage-title': 'Cobertura',
        'coverage-desc': 'Operamos en los principales corredores europeos, ofreciendo soluciones de transporte fiables entre España, Rumanía, Italia, Alemania, Países Bajos y otros mercados de la UE mediante una red flexible de socios de confianza.',
        'route-3': 'Cobertura en toda la UE a través de socios',
        
        // Contact Section
        'contact-title': 'Contacto',
        'contact-desc': 'Solicite un presupuesto o envíenos su CV.',
        'email-label': 'Correo electrónico',
        'languages-label': 'Idiomas Soportados',
        'languages-list': 'Español, Inglés, Rumano',
        'form-title': 'Formulario de contacto',
        'form-name': 'Nombre',
        'form-email': 'Correo electrónico',
        'form-company': 'Empresa',
        'form-message': 'Mensaje',
        'form-submit': 'Enviar Mensaje'
    },
    ro: {
        // Navigation
        'nav-home': 'Acasă',
        'nav-services': 'Servicii',
        'nav-about': 'Despre Noi',
        'nav-coverage': 'Acoperire',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Transport Rutier și Logistică Fiabile în Întreaga Europă',
        'hero-subtitle': 'CargoMate Cetem SL oferă soluții profesionale de transport rutier de marfă și logistică în întreaga Europă, bazate pe peste 30 de ani de experiență operațională și pe o abordare modernă, orientată spre date, în managementul transportului.',

        'trust-1': 'Companie cu sediul în UE',
        'trust-2': 'Parteneri de flotă profesioniști',
        'trust-3': 'Operare multilingvă: română, engleză și spaniolă',
        'cta-contact': 'Contactează-ne',
        
        // Services Section
        'services-title': 'Servicii',
        'service-intl-title': 'Transport Rutier Internațional',
        'service-intl-desc': 'Oferim servicii de transport rutier internațional în toată Europa, asigurând livrări sigure, eficiente și la timp, cu vizibilitate completă și coordonare pe tot parcursul transportului.',
        'service-ftl-title': 'FTL și Transport Dedicat',
        'service-ftl-desc': 'CargoMate oferă soluții de transport Full Truckload (FTL) și curse dedicate, adaptate cerințelor specifice de rută, capacitate și timp de livrare.',
        'service-ltl-title': 'Transport LTL',
        'service-ltl-desc': 'Pentru expedieri care nu necesită un camion complet, oferim soluții LTL prin consolidare optimizată și parteneriate de încredere, asigurând timpi de tranzit constanți.',
        'service-taut-title': 'Transport cu Tautliner',
        'service-taut-desc': 'Avem o specializare solidă în transportul cu prelate (tautliner), gestionând diverse tipuri de marfă care necesită încărcare flexibilă și manipulare sigură.',
        'service-cross-title': 'Logistică Transfrontalieră UE',
        'service-cross-desc': 'Gestionăm transporturi transfrontaliere cu respectarea standardelor și reglementărilor europene, asigurând coordonare eficientă și conformitate.',
        'service-fleet-title': 'Flotă Flexibilă și Rețea de Parteneri',
        'service-fleet-desc': 'Modelul nostru operațional bazat pe parteneri ne permite să ne adaptăm rapid cerințelor pieței și să oferim servicii scalabile și fiabile.',
        'service-custom-title': 'Soluții de Transport Personalizate',
        'service-custom-desc': 'Fiecare transport este diferit. Creăm soluții adaptate cerințelor specifice ale fiecărui client, cu accent pe eficiență, fiabilitate și transparență.',
        
        // About Section
        'about-title': 'Despre Noi',
        'about-experience-title': 'O Tradiție Solidă',
        'about-experience-desc': 'CargoMate Cetem SL este construită pe o tradiție de peste trei decenii în transportul rutier internațional. Familia noastră activează în acest domeniu încă din 1991, acumulând o experiență operațională solidă și construind o reputație bazată pe fiabilitate pe principalele rute europene, cu o specializare puternică în transportul cu prelate (tautliner).',
        'about-evolution-title': 'Evoluție de Generația a Doua',
        'about-evolution-desc': 'Fondată ca o inițiativă de generația a doua, CargoMate reprezintă evoluția naturală a acestui parcurs. Compania a fost creată pentru a combina know-how-ul tradițional din industrie cu o abordare modernă, orientată spre tehnologie, integrând instrumente digitale, procese structurate și decizii bazate pe date în fiecare aspect al operațiunilor.',
        'about-mission-title': 'Misiunea Noastră',
        'about-mission-desc': 'Misiunea noastră este de a livra soluții de transport eficiente, transparente și fiabile, respectând valorile care au stat la baza primei generații: angajament, integritate și excelență operațională.',
        'about-approach-title': 'Abordarea Noastră',
        'about-approach-desc': 'Operăm cu mentalitatea unui partener logistic modern—agil, adaptabil și orientat spre îmbunătățire continuă—bazându-ne în același timp pe peste 30 de ani de experiență în transportul sigur și eficient al mărfurilor peste granițe, prin transport rutier cu tautliner.',
        'about-future-title': 'Privind Spre Viitor',
        'about-future-desc': 'CargoMate își propune să se dezvolte ca operator independent și să contribuie la dezvoltarea pe termen lung a ecosistemului de afaceri al familiei, menținând standardele și valorile care ne-au definit activitatea timp de decenii.',
        
        // Why CargoMate Section
        'why-cargomate-title': 'De Ce CargoMate',
        'why-1': 'Peste 30 de ani de experiență în transport, printr-o tradiție de familie',
        'why-2': 'Abordare logistică modernă, susținută de soluții digitale',
        'why-3': 'Comunicare clară și operațiuni transparente',
        'why-4': 'Flexibilitate și adaptare la cerințele clienților',
        
        // Coverage Section
        'coverage-title': 'Acoperire',
        'coverage-desc': 'Operăm pe principalele coridoare europene, oferind soluții de transport fiabile între Spania, România, Italia, Germania, Olanda și alte piețe din Uniunea Europeană, printr-o rețea flexibilă de parteneri de încredere.',
        'route-3': 'Acoperire în toată UE prin parteneri',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-desc': 'Solicită o ofertă sau trimite-ne CV-ul tău.',
        'email-label': 'Email',
        'languages-label': 'Limbi Suportate',
        'languages-list': 'Română, Engleză, Spaniolă',
        'form-title': 'Formular de Contact',
        'form-name': 'Nume',
        'form-email': 'Email',
        'form-company': 'Companie',
        'form-message': 'Mesaj',
        'form-submit': 'Trimite Mesajul'
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
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize EmailJS
(function(){
    emailjs.init("txGn7nNhhxA5nXlYA");
})();

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
    
    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_l13k0ox', 'template_qwkjebd', this)
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.log('Error:', error);
            });
    });
});

// EmailJS form submission function
function sendEmail() {
    const form = document.querySelector('.contact-form form');
    
    emailjs.sendForm('service_l13k0ox', 'template_qwkjebd', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
}
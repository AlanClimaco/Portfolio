document.addEventListener('DOMContentLoaded', function() {
    
    // Dicionário de traduções (PT / EN)
    const translations = {
        "pt": {
            // Navegação
            "nav_about": "Sobre Mim",
            "nav_journey": "Trajetória",
            "nav_portfolio": "Portfólio",
            "nav_contact": "Contato",
            
            // Hero
            "hero_subtitle": "Desenvolvedor de Software | Web & Mobile",
            "hero_btn": "Ver Portfólio",
            
            // Sobre
            "about_title": "Sobre Mim",
            "about_p1": "Sou desenvolvedor de software com atuação em desenvolvimento web e mobile, focado em criar aplicações, sistemas e interfaces responsivas com código organizado e soluções práticas.",
            "about_p2": "Também atuo em projetos independentes e freelance, desenvolvendo soluções sob medida para necessidades reais. Minha trajetória combina experiência prática, formação acadêmica e base técnica, e estou disponível para projetos freelance e novas colaborações.",
            
            // Trajetória
            "journey_title": "Minha Trajetória",
            "journey_subtitle": "Experiência profissional e formação que construíram minha atuação em desenvolvimento de software.",
            "journey_smti_type": "Experiência Profissional",
            "journey_smti_company": "Prefeitura de Porto Velho / SMTI",
            "journey_smti_role": "Estagiário em Desenvolvimento de Software",
            "journey_smti_period": "Mai 2026 — Atual",
            "journey_smti_desc1": "Desenvolvimento e evolução de interfaces para sistemas de gestão.",
            "journey_smti_desc2": "Implementação de formulários e fluxos com regras de negócio.",
            "journey_smti_desc3": "Refatoração de layouts com foco em responsividade, organização e experiência do usuário.",
            "journey_uninter_type": "Graduação",
            "journey_uninter_title": "UNINTER",
            "journey_uninter_course": "Engenharia de Software",
            "journey_uninter_period": "2025 — Atual",
            "journey_uninter_desc": "Graduação voltada a fundamentos de engenharia, arquitetura de software e desenvolvimento de soluções escaláveis.",
            "journey_ifro_type": "Formação Técnica",
            "journey_ifro_title": "IFRO",
            "journey_ifro_course": "Técnico em Informática",
            "journey_ifro_period": "Concluído em 2025",
            "journey_ifro_desc": "Formação técnica com base em programação, banco de dados e redes de computadores.",
            
            // Destaques GitHub
            "github_title": "Destaques do GitHub",
            "github_intro": "Projetos recentes que demonstram minha capacidade de entregar soluções completas:",
            "btn_repo": "Ver Repositório",
            "btn_proj": "Ver Projeto",
            "btn_github_full": "Ver GitHub Completo",

            // Portfólio Geral
            "portfolio_title": "Meu Portfólio",
            "portfolio_subtitle": "Projetos práticos aplicando conceitos de Front-end, Mobile e Back-end.",
            
            // Projetos
            "proj_wlad_desc": "Plataforma web oficial para adoção e transparência do abrigo. Desenvolvida com <strong>React e TypeScript</strong>, focando em alta performance. Utiliza <em>Vite</em> para build e <em>CSS Modules</em>.",
            "proj_myexpenses_title": "Meus Gastos PWA",
            "proj_myexpenses_desc": "Aplicativo web progressivo para gestão financeira. Desenvolvido com arquitetura <strong>offline-first</strong>, permite controle de despesas, metas e importação 100% local de extratos bancários.",
            "proj_rotaro_title": "Rondônia Turismo e Pesca",
            "proj_rotaro_desc": "O guia definitivo para explorar Rondônia. Descubra cachoeiras e locais de pesca com mapas interativos.",
            "proj_org_title": "Organizador de Arquivos",
            "proj_org_desc": "Script Python que roda em background (Windows Service) organizando downloads automaticamente por extensão.",
            "proj_rec_desc": "Ferramenta gráfica de análise forense para recuperação de dados em baixo nível (Raw Drive Analysis).",
            "proj_game_desc": "Catálogo de jogos gratuitos consumindo API em tempo real com filtros.",
            "proj_eletron_desc": "Simulação de e-commerce com carrinho de compras e design moderno.",
            "proj_mii_title": "MiiSideKick",
            "proj_mii_desc": "Um assistente de desktop interativo e não-intrusivo. Desenvolvido para ser leve e com design moderno, ele auxilia em rotinas do sistema sem interromper seu fluxo de trabalho.",
            
            // Botões Projetos
            "btn_view_site": "Ver Site",
            "btn_view_code": "Ver Código",
            "btn_view_repo": "Ver Repositório",
            "btn_download": "Baixar Projeto",
            "btn_code": "Código",
            "btn_view_project": "Ver Projeto",

            // CTA Final
            "cta_github_title": "Gostou do que viu?",
            "cta_github_text": "Este portfólio é apenas uma amostra. No meu GitHub você encontra diversos outros estudos, códigos fontes completos e minhas contribuições open source.",

            // Contato
            "contact_title": "Contato",
            "contact_subtitle": "Vamos conversar sobre tecnologia ou oportunidades.",
            "channels_title": "Canais Diretos",
            "channels_desc": "Entre em contato via WhatsApp, Email ou LinkedIn.",
            "channel_whatsapp": "Meu WhatsApp",
            "channel_email": "Meu E-mail",
            "channel_linkedin": "Meu LinkedIn",
            
            // Formulário
            "form_title": "Deixe um Recado",
            "form_name": "Nome",
            "form_email": "E-mail",
            "form_msg": "Mensagem",
            "form_btn": "Enviar Mensagem",
            "footer_copy": "&copy; 2026 Alan Clímaco."
        },
        "en": {
            // Navigation
            "nav_about": "About Me",
            "nav_journey": "Journey",
            "nav_portfolio": "Portfolio",
            "nav_contact": "Contact",
            
            // Hero
            "hero_subtitle": "Software Developer | Web & Mobile",
            "hero_btn": "View Portfolio",
            
            // About
            "about_title": "About Me",
            "about_p1": "I am a software developer working with web and mobile development, focused on creating applications, systems, and responsive interfaces with organized code and practical solutions.",
            "about_p2": "I also work on independent and freelance projects, building custom solutions for real needs. My journey combines hands-on experience, academic education, and technical foundations, and I am available for freelance projects and new collaborations.",
            
            // Journey
            "journey_title": "My Journey",
            "journey_subtitle": "Professional experience and education that shaped my work in software development.",
            "journey_smti_type": "Professional Experience",
            "journey_smti_company": "Porto Velho City Hall / SMTI",
            "journey_smti_role": "Software Development Intern",
            "journey_smti_period": "May 2026 — Present",
            "journey_smti_desc1": "Development and evolution of interfaces for management systems.",
            "journey_smti_desc2": "Implementation of forms and flows with business rules.",
            "journey_smti_desc3": "Layout refactoring focused on responsiveness, organization, and user experience.",
            "journey_uninter_type": "Bachelor's Degree",
            "journey_uninter_title": "UNINTER",
            "journey_uninter_course": "Software Engineering",
            "journey_uninter_period": "2025 — Present",
            "journey_uninter_desc": "Degree focused on engineering fundamentals, software architecture, and scalable solution development.",
            "journey_ifro_type": "Technical Education",
            "journey_ifro_title": "IFRO",
            "journey_ifro_course": "Technical Diploma in Informatics",
            "journey_ifro_period": "Completed in 2025",
            "journey_ifro_desc": "Technical education with a foundation in programming, databases, and computer networks.",
            
            // GitHub Highlights
            "github_title": "GitHub Highlights",
            "github_intro": "Recent projects demonstrating my ability to deliver complete solutions:",
            "btn_repo": "View Repository",
            "btn_proj": "View Project",
            "btn_github_full": "View Full GitHub",

            // Portfolio General
            "portfolio_title": "My Portfolio",
            "portfolio_subtitle": "Practical projects applying Front-end, Mobile, and Back-end concepts.",
            
            // Projects
            "proj_wlad_desc": "Official web platform for adoption and shelter transparency. Developed with <strong>React and TypeScript</strong>, focusing on high performance. Uses <em>Vite</em> for build and <em>CSS Modules</em>.",
            "proj_myexpenses_title": "My Expenses PWA",
            "proj_myexpenses_desc": "A progressive web app for personal finance management. Developed with an <strong>offline-first</strong> architecture, it features expense tracking, financial goals, and 100% local processing of bank statements.",
            "proj_rotaro_title": "Rondônia Tourism & Fishing",
            "proj_rotaro_desc": "The definitive guide to explore Rondônia. Discover waterfalls and fishing spots with interactive maps.",
            "proj_org_title": "File Organizer",
            "proj_org_desc": "Python script running in the background (Windows Service) that automatically organizes downloads by extension.",
            "proj_rec_desc": "Forensic analysis graphical tool for low-level data recovery (Raw Drive Analysis).",
            "proj_game_desc": "Free games catalog powered by a real-time API with filtering features.",
            "proj_eletron_desc": "E-commerce simulation with shopping cart and modern design.",
            "proj_mii_title": "MiiSideKick",
            "proj_mii_desc": "An interactive and non-intrusive desktop assistant. Designed to be lightweight and modern, it helps with system routines without interrupting your workflow.",
            
            // Buttons Projects
            "btn_view_site": "View Site",
            "btn_view_code": "View Code",
            "btn_view_repo": "View Repository",
            "btn_download": "Download Project",
            "btn_code": "Code",
            "btn_view_project": "View Project",

            // CTA Final
            "cta_github_title": "Liked what you saw?",
            "cta_github_text": "This portfolio is just a sample. On my GitHub, you can find various other studies, complete source codes, and my open source contributions.",

            // Contact
            "contact_title": "Contact",
            "contact_subtitle": "Let's talk about technology or opportunities.",
            "channels_title": "Direct Channels",
            "channels_desc": "Get in touch via WhatsApp, Email, or LinkedIn.",
            "channel_whatsapp": "My WhatsApp",
            "channel_email": "My E-mail",
            "channel_linkedin": "My LinkedIn",
            
            // Form
            "form_title": "Send a Message",
            "form_name": "Name",
            "form_email": "E-mail",
            "form_msg": "Message",
            "form_btn": "Send Message",
            "footer_copy": "&copy; 2026 Alan Clímaco."
        }
    };

    const flags = {
        "us": "https://paises.ibge.gov.br/img/bandeiras/US.gif",
        "br": "https://paises.ibge.gov.br/img/bandeiras/BR.gif"
    };

    const langToggleBtn = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('site_lang') || 'pt';

    function updateLanguage(lang) {
        // Atualiza o botão
        if(langToggleBtn) {
            if (lang === 'pt') {
                langToggleBtn.innerHTML = `<img src="${flags.us}" alt="EUA"> EN`;
            } else {
                langToggleBtn.innerHTML = `<img src="${flags.br}" alt="Brasil"> PT`;
            }
        }
        
        // Atualiza os textos
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Salva a preferência
        localStorage.setItem('site_lang', lang);
        currentLang = lang;
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(newLang);
        });
        
        updateLanguage(currentLang);
    }
});

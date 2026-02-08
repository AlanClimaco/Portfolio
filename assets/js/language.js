document.addEventListener('DOMContentLoaded', function() {
    
    // Dicionário de traduções (PT / EN)
    const translations = {
        "pt": {
            // Navegação
            "nav_home": "Sobre Mim",
            "nav_education": "Formação",
            "nav_portfolio": "Portfólio",
            "nav_contact": "Contato",
            
            // Hero
            "hero_subtitle": "Desenvolvedor de Software Web & Mobile",
            "hero_btn": "Ver Portfólio",
            
            // Sobre
            "about_title": "Sobre Mim",
            "about_p1": "Sou estudante de <strong>Engenharia de Software na UNINTER</strong> e técnico em <strong>Informática pelo IFRO (Instituto Federal de Rondônia)</strong>. Minha atuação é focada no desenvolvimento de soluções <strong>Mobile (Android)</strong> e <strong>Web</strong>, com sólido conhecimento em redes de computadores e infraestrutura.",
            "about_personal": "Tenho 18 anos e moro em Rondônia. Nos momentos livres, gosto de jogar, ler e assistir séries. Também gosto muito de ouvir música, especialmente Paramore.",
            "about_p2": "Estou sempre buscando aprender e colaborar em projetos inovadores. Atualmente, estou disponível para novos desafios e oportunidades profissionais no desenvolvimento de software.",
            
            // Destaques GitHub
            "github_title": "Destaques do GitHub",
            "github_intro": "Projetos recentes que demonstram minha capacidade de entregar soluções completas:",
            "btn_repo": "Ver Repositório",
            "btn_github_full": "Ver GitHub Completo",
            
            // Formação
            "edu_title": "Minha Formação",
            "edu_subtitle": "Uma trajetória focada em aprendizado contínuo e aprimoramento técnico.",
            
            "edu_uninter_title": "UNINTER - Centro Universitário Internacional",
            "edu_uninter_course": "Engenharia de Software (Graduação)",
            "edu_uninter_desc": "Atualmente cursando, aprofundando conhecimentos em arquitetura de software, padrões de projeto e metodologias ágeis para criar soluções robustas e escaláveis.",
            
            "edu_ifro_title": "IFRO - Instituto Federal de Rondônia",
            "edu_ifro_course": "Técnico em Informática (Concluído)",
            "edu_ifro_desc": "Formação técnica que me deu a base sólida em lógica de programação, banco de dados, redes e manutenção, iniciando minha jornada no mundo da tecnologia.",
            
            "edu_interest_title": "Interesse em Desenvolvimento",
            "edu_interest_sub": "Aprendizado Contínuo",
            "edu_interest_desc": "Foco constante em desenvolvimento <strong>web</strong> com React.js e Node.js, e em desenvolvimento <strong>mobile</strong> com <strong>Flutter (Dart)</strong>, buscando sempre as tecnologias mais atuais do mercado.",
            
            "edu_lang_title": "Idiomas",
            "edu_lang_sub": "Leitura Técnica",
            "edu_lang_desc": "Português nativo. Inglês e Espanhol em nível básico, focados na leitura de documentações técnicas.",

            "btn_resume": "Ver Currículo em PDF",

            // Skills
            "skills_title": "Competências Técnicas",

            // Portfólio Geral
            "portfolio_title": "Meu Portfólio",
            "portfolio_subtitle": "Projetos práticos aplicando conceitos de Front-end, Mobile e Back-end.",
            
            // Projetos
            "proj_wlad_desc": "Plataforma web oficial para adoção e transparência do abrigo. Desenvolvida com <strong>React e TypeScript</strong>, focando em alta performance. Utiliza <em>Vite</em> para build e <em>CSS Modules</em>.",
            "proj_notepad_title": "Bloco de Notas App",
            "proj_notepad_desc": "Aplicativo mobile minimalista para Android e iOS construído com <strong>Flutter</strong>. Possui persistência de dados local e geração dinâmica de imagens para compartilhamento.",
            "proj_rotaro_title": "Rondônia Turismo e Pesca",
            "proj_rotaro_desc": "O guia definitivo para explorar Rondônia. Descubra cachoeiras e locais de pesca com mapas interativos.",
            "proj_org_title": "Organizador de Arquivos",
            "proj_org_desc": "Script Python que roda em background (Windows Service) organizando downloads automaticamente por extensão.",
            "proj_rec_desc": "Ferramenta gráfica de análise forense para recuperação de dados em baixo nível (Raw Drive Analysis).",
            "proj_game_desc": "Catálogo de jogos gratuitos consumindo API em tempo real com filtros.",
            "proj_eletron_desc": "Simulação de e-commerce com carrinho de compras e design moderno.",
            
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
            "nav_home": "About Me",
            "nav_education": "Education",
            "nav_portfolio": "Portfolio",
            "nav_contact": "Contact",
            
            // Hero
            "hero_subtitle": "Web & Mobile Software Developer",
            "hero_btn": "View Portfolio",
            
            // About
            "about_title": "About Me",
            "about_p1": "I am a <strong>Software Engineering student at UNINTER</strong> and hold a <strong>Technical Diploma in Informatics from IFRO (Federal Institute of Rondônia)</strong>. My focus is on developing <strong>Mobile (Android)</strong> and <strong>Web</strong> solutions, with solid knowledge in computer networks and infrastructure.",
            "about_personal": "I am 18 years old and live in Rondônia. In my free time, I enjoy gaming, reading, and watching series. I also love listening to music, especially Paramore.",
            "about_p2": "I am always seeking to learn and collaborate on innovative projects. Currently available for new challenges and professional opportunities in software development.",
            
            // GitHub Highlights
            "github_title": "GitHub Highlights",
            "github_intro": "Recent projects demonstrating my ability to deliver complete solutions:",
            "btn_repo": "View Repository",
            "btn_github_full": "View Full GitHub",
            
            // Education
            "edu_title": "Education",
            "edu_subtitle": "A journey focused on continuous learning and technical improvement.",
            
            "edu_uninter_title": "UNINTER - International University Center",
            "edu_uninter_course": "Software Engineering (Bachelor's)",
            "edu_uninter_desc": "Currently enrolled, focusing on software architecture, design patterns, and agile methodologies to create robust and scalable solutions.",
            
            "edu_ifro_title": "IFRO - Federal Institute of Rondônia",
            "edu_ifro_course": "Technical Diploma in Informatics",
            "edu_ifro_desc": "Technical training that provided a solid foundation in programming logic, databases, networks, and maintenance, starting my journey in the tech world.",
            
            "edu_interest_title": "Development Interests",
            "edu_interest_sub": "Continuous Learning",
            "edu_interest_desc": "Constant focus on <strong>web</strong> development with React.js and Node.js, and <strong>mobile</strong> development with <strong>Flutter (Dart)</strong>, always seeking the most current technologies in the market.",
            
            "edu_lang_title": "Languages",
            "edu_lang_sub": "Technical Reading",
            "edu_lang_desc": "Native Portuguese. Basic English and Spanish, focused on technical documentation reading.",

            "btn_resume": "View Resume in PDF",

            // Skills
            "skills_title": "Technical Skills",

            // Portfolio General
            "portfolio_title": "My Portfolio",
            "portfolio_subtitle": "Practical projects applying Front-end, Mobile, and Back-end concepts.",
            
            // Projects
            "proj_wlad_desc": "Official web platform for adoption and shelter transparency. Developed with <strong>React and TypeScript</strong>, focusing on high performance. Uses <em>Vite</em> for build and <em>CSS Modules</em>.",
            "proj_notepad_title": "Notepad App",
            "proj_notepad_desc": "Minimalist mobile app for Android and iOS built with <strong>Flutter</strong>. Features local data persistence and dynamic image generation for sharing.",
            "proj_rotaro_title": "Rondônia Tourism & Fishing",
            "proj_rotaro_desc": "The definitive guide to explore Rondônia. Discover waterfalls and fishing spots with interactive maps.",
            "proj_org_title": "File Organizer",
            "proj_org_desc": "Python script running in the background (Windows Service) that automatically organizes downloads by extension.",
            "proj_rec_desc": "Forensic analysis graphical tool for low-level data recovery (Raw Drive Analysis).",
            "proj_game_desc": "Free games catalog powered by a real-time API with filtering features.",
            "proj_eletron_desc": "E-commerce simulation with shopping cart and modern design.",
            
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

    // Lógica de troca de idiomas
    const resumeLinks = {
        "pt": "https://drive.google.com/file/d/1D1JQzyym5yoPo2Fd3h7xeN3M6iLmIUZD/view?usp=sharing",
        "en": "https://drive.google.com/file/d/17nc4G_OkLYaaq_cJCFZlpGyO6v107nP1/view?usp=sharing"
    };

    const flags = {
        "us": "https://paises.ibge.gov.br/img/bandeiras/US.gif",
        "br": "https://paises.ibge.gov.br/img/bandeiras/BR.gif"
    };

    const langToggleBtn = document.getElementById('language-toggle');
    const resumeBtn = document.getElementById('btn-curriculo');
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

        // Atualiza o link do currículo
        if (resumeBtn) {
            resumeBtn.href = resumeLinks[lang];
        }

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
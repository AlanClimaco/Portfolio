document.addEventListener('DOMContentLoaded', function() {

    // Configuração do Menu Mobile
    const menuToggleButton = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    const menuLinks = document.querySelectorAll('.menu-principal a');

    if (menuToggleButton && menuPrincipal) {
        // Abrir/Fechar menu
        menuToggleButton.addEventListener('click', function() {
            menuPrincipal.classList.toggle('menu-open');
            menuToggleButton.classList.toggle('active');
        });

        // Fechar menu ao clicar no link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuPrincipal.classList.remove('menu-open');
                menuToggleButton.classList.remove('active');
            });
        });
    }

    // Scroll Spy (Navegação Inteligente)
    const sections = document.querySelectorAll('section[id]'); 
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        // Lógica especial para a Home
        const formacaoSection = document.getElementById('formacao');
        const homeLink = document.querySelector('.menu-principal a[href="#home"]');
        
        // Define onde termina a Home (início da formação menos o header)
        const formacaoTop = formacaoSection ? formacaoSection.offsetTop - 150 : 999999;

        // Se o scroll estiver antes da seção Formação, ativa o link Home
        if (scrollY < formacaoTop) {
            document.querySelectorAll('.menu-principal a').forEach(a => a.classList.remove('active'));
            if(homeLink) homeLink.classList.add('active');
            return;
        }

        // Lógica padrão para as outras seções
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');
            
            if(sectionId === 'home') return;

            const menuLink = document.querySelector('.menu-principal a[href*=' + sectionId + ']');

            if (menuLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.menu-principal a').forEach(a => a.classList.remove('active'));
                    menuLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    // Formulário de Contato
    const contactForm = document.getElementById('form-contato');
    
    if (contactForm) {
        const submitButton = contactForm.querySelector('.submit-button');
        
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalStatus = document.getElementById('modal-status');
        const modalMessage = document.getElementById('modal-message');
        const modalCloseButton = document.getElementById('modal-close');
        let autoCloseTimer;

        function showModal(message, type = 'success') {
            clearTimeout(autoCloseTimer);
            modalMessage.textContent = message;
            
            modalStatus.classList.remove('success', 'error');
            modalStatus.classList.add(type);

            modalBackdrop.classList.add('show');
            modalStatus.classList.add('show');

            autoCloseTimer = setTimeout(hideModal, 3000);
        }

        function hideModal() {
            clearTimeout(autoCloseTimer);
            modalBackdrop.classList.remove('show');
            modalStatus.classList.remove('show');
        }

        if(modalCloseButton) modalCloseButton.addEventListener('click', hideModal); 
        if(modalBackdrop) modalBackdrop.addEventListener('click', hideModal); 

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('message').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                showModal('Por favor, preencha todos os campos!', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showModal('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            const formData = new FormData(contactForm);

            fetch('https://formspree.io/f/mrbljora', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showModal(`Obrigado, ${nome}! Mensagem enviada com sucesso!`, 'success');
                    contactForm.reset();
                } else {
                    showModal('Houve um erro ao enviar. Tente novamente mais tarde.', 'error');
                }
            })
            .catch(error => {
                showModal('Erro de conexão. Verifique sua internet.', 'error');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    }
});
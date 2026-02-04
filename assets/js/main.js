document.addEventListener('DOMContentLoaded', function() {

    /* --- Menu Mobile --- */
    const menuToggleButton = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');

    if (menuToggleButton && menuPrincipal) {
        menuToggleButton.addEventListener('click', function() {
            menuPrincipal.classList.toggle('menu-open');
            menuToggleButton.classList.toggle('active');
        });
    }

    /* --- Formulário de Contato e Modal --- */
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
            
            /* Simulação de envio com delay */
            setTimeout(function() {
                showModal('Mensagem enviada com sucesso!', 'success');
                contactForm.reset();
                
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }, 2000);
        });
    }
});
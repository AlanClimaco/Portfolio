# Portfólio - Alan Clímaco

Este repositório contém o código-fonte do meu site pessoal e portfólio profissional.

O projeto foi desenvolvido com o foco em demonstrar competências sólidas em desenvolvimento front-end, adotando o formato **Single Page Application (SPA)**. A prioridade foi a construção de uma arquitetura limpa, semântica e performática, sem a dependência de frameworks externos para a estrutura base.

## Tecnologias Utilizadas

O projeto foi construído utilizando apenas tecnologias nativas (Vanilla), sem o uso de frameworks CSS ou JS, para garantir o domínio dos fundamentos:

- **HTML5** (Semântico, Acessível e estruturado em Seções)
- **CSS3** (Modularizado, com animações, variáveis e Flexbox/Grid)
- **JavaScript** (ES6+ para lógica de navegação SPA, Scroll Spy e manipulação do DOM)

## Estrutura do Projeto

A arquitetura de pastas foi organizada para separar responsabilidades. Clique nos arquivos para ver o código:

- **Raiz**
  - [index.html](./index.html) - Arquivo único (SPA) contendo todas as seções (Home, Sobre, Formação, Portfólio, Contato)
  - [favicon.ico](./favicon.ico) - Ícone do navegador
  - [assets/](./assets/)
    - [css/](./assets/css/)
      - [style.css](./assets/css/style.css) - Hub de imports
      - [base.css](./assets/css/base.css) - Variáveis, Reset e Scrollbar Personalizada
      - [layout.css](./assets/css/layout.css) - Header (com animações) e Footer
      - [components.css](./assets/css/components.css) - Botões e Cards
      - [pages.css](./assets/css/pages.css) - Estilos específicos das seções
    - [img/](./assets/img/)
      - [projetos/](./assets/img/projetos/) - Screenshots dos projetos
    - [js/](./assets/js/)
      - [main.js](./assets/js/main.js) - Lógica de Scroll Spy, Menu Mobile, Validação e Envio de Formulário
      - [language.js](./assets/js/language.js) - Sistema de tradução e dicionário (PT/EN)

## Funcionalidades Implementadas

### 1. Navegação SPA (Single Page Application)
- **Scroll Spy:** O menu identifica automaticamente qual seção está visível na tela e destaca o link correspondente.
- **Smooth Scroll:** Rolagem suave ao clicar nos links de navegação.
- **Barra de Progresso:** Animação CSS na borda inferior dos links do menu, indicando a seção ativa.

### 2. Responsividade e Mobile
- Menu "hambúrguer" animado para dispositivos móveis.
- Fechamento automático do menu ao clicar em um link (melhoria de UX).
- Layout fluido utilizando CSS Grid e Flexbox.

### 3. Portfólio Dinâmico
- Grid responsivo de cards exibindo os projetos.
- Cada card contém imagem de capa, descrição técnica, tags de tecnologias e links para repositório/deploy.

### 4. Formulário de Contato com Validação
- Envio Real (AJAX): Integração com Formspree via Fetch API para envio real de mensagens direto para o e-mail, sem recarregar ou redirecionar a página.
- Validação Client-side: Verificação de campos vazios e formato válido de e-mail via JavaScript antes do envio.
- Feedback Visual: Modal (Pop-up) customizado que informa o status da requisição (sucesso ou erro) de forma amigável ao usuário.

### 5. Internacionalização (i18n)
- Suporte completo a dois idiomas: **Português (PT)** e **Inglês (EN)**.
- Troca de idioma dinâmica sem recarregar a página (DOM Manipulation).
- Persistência da preferência do usuário via `localStorage`.

## Projetos Destacados

A seção de portfólio apresenta uma seleção de trabalhos significativos, incluindo projetos pessoais e colaborações profissionais:

1. **Abrigo do Wlad (Web):** Plataforma institucional com foco em performance e SEO (React + Vite).
2. **Rondônia Turismo (Web):** Aplicação interativa de turismo local com mapas (Front-end).
3. **Recovery Tool (Desktop):** Ferramenta gráfica de análise forense para recuperação de dados em baixo nível (Python + CustomTkinter).
4. **Organizador de Arquivos (Automação):** Script Python para automação de tarefas em background (Windows Service).
5. **Game Browser (Web):** Consumo de API REST para catálogo de jogos em tempo real.
6. **Eletron Store (Web):** Interface de e-commerce focada em UI/UX moderno.

## Autor

**Alan Clímaco** - Desenvolvedor de Software
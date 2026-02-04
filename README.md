## Portfólio - Alan Clímaco

Este repositório contém o código-fonte do meu site pessoal e portfólio profissional.

O projeto foi desenvolvido com o foco em demonstrar competências sólidas em desenvolvimento front-end, priorizando a construção de uma arquitetura limpa, semântica e performática, sem a dependência de frameworks externos para a estrutura base.

## Tecnologias Utilizadas

O projeto foi construído utilizando apenas tecnologias nativas (Vanilla), sem o uso de frameworks CSS ou JS, para garantir o domínio dos fundamentos:

- HTML5 (Semântico e Acessível)
- CSS3 (Modularizado com arquitetura baseada em imports)
- JavaScript (ES6+ para interatividade e manipulação do DOM)

## Estrutura do Projeto

A arquitetura de pastas foi organizada para separar responsabilidades. Clique nos arquivos para ver o código:

- **Raiz**
  - [index.html](./index.html) - Página Inicial (Sobre Mim)
  - [formacao.html](./formacao.html) - Linha do tempo profissional
  - [portfolio.html](./portfolio.html) - Galeria de projetos
  - [contato.html](./contato.html) - Formulário e canais de contato
  - [favicon.ico](./favicon.ico) - Ícone do navegador
  - [assets/](./assets/)
    - [css/](./assets/css/)
      - [style.css](./assets/css/style.css) - Hub de imports
      - [base.css](./assets/css/base.css) - Variáveis e Reset
      - [layout.css](./assets/css/layout.css) - Header e Footer
      - [components.css](./assets/css/components.css) - Botões e Cards
      - [pages.css](./assets/css/pages.css) - Estilos das seções
    - [img/](./assets/img/)
      - [projetos/](./assets/img/projetos/) - Screenshots
    - [js/](./assets/js/)
      - [main.js](./assets/js/main.js) - Lógica do Menu e Validação

## Funcionalidades Implementadas

### 1. Navegação Responsiva
- Menu de navegação fixo no topo.
- Versão mobile com botão "hambúrguer" e animação de deslizamento lateral.
- Destaque visual (classe ativa) para a página atual.

### 2. Portfólio Dinâmico
- Grid responsivo de cards exibindo os projetos.
- Cada card contém imagem de capa, descrição técnica, tags de tecnologias e links para repositório/deploy.

### 3. Formulário de Contato com Validação
- Validação via JavaScript no lado do cliente (Client-side validation).
- Verificação de campos vazios e formato de e-mail.
- Feedback visual através de um Modal (Pop-up) customizado para sucesso ou erro, sem o uso de `alert()` nativo.

### 4. Arquitetura CSS
- Uso de variáveis CSS (`:root`) para cores e tipografia, facilitando a manutenção do tema.
- Separação de arquivos por contexto (`base`, `layout`, `components`, `pages`) importados via `@import` no `style.css`.

## Projetos Destacados

A seção de portfólio apresenta uma seleção de trabalhos significativos, incluindo projetos pessoais e colaborações profissionais:

1. Abrigo do Wlad (Web): Plataforma institucional com foco em performance e SEO.
2. Rondônia Turismo (Web): Aplicação interativa de turismo local (Atuação no Front-end).
3. Organizador de Arquivos (Automação): Script Python para automação de tarefas em background.
4. Game Browser (Web): Consumo de API REST para catálogo de jogos.
5. Eletron Store (Web): Interface de e-commerce focada em UI/UX.

## Autor

Alan Clímaco - Desenvolvedor de Software

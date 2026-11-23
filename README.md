# 👟 Drip Store — Digital Store

Projeto front-end de uma loja virtual de moda e acessórios esportivos, desenvolvido durante o curso da **Geração Tech 4.0**. A aplicação é totalmente responsiva (abordagem *mobile first*) e foi construída com React, Vite e TailwindCSS.

🔗 **Demo:** _[Deploy Vercel](https://frontend-dripstore-gt4.vercel.app/)_

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Rotas](#-rotas)
- [Paleta de cores](#-paleta-de-cores)
- [Como executar](#-como-executar)
- [Padrão de commits](#-padrão-de-commits)
- [Autora](#-autora)

---

## 💡 Sobre o projeto

A **Drip Store** é uma vitrine de e-commerce com página inicial, listagem de produtos com filtros e ordenação, e layout compartilhado (cabeçalho e rodapé). O projeto foi pensado para praticar:

- Componentização e reaproveitamento de componentes em React
- Roteamento com layout compartilhado (`Outlet`)
- Estilização utilitária com TailwindCSS e design tokens customizados
- Responsividade (mobile → tablet → desktop)
- Organização de dados em arquivos utilitários

## ✨ Funcionalidades

- **Página inicial**
  - Galeria de imagens (carrossel) com navegação por setas
  - Seção de destaque com chamada para ofertas
  - Coleções em destaque
  - Categorias com ícones
  - Produtos em alta (8 itens)
  - Seção de oferta especial
- **Listagem de produtos**
  - Ordenação (mais relevantes, menor preço, maior preço)
  - Painel de filtros por marca, categoria, gênero (checkbox) e estado (radio)
  - Contador de produtos exibidos
- **Layout compartilhado**
  - Cabeçalho com logo, campo de busca, links de login/cadastro e carrinho
  - Menu lateral no mobile e navegação principal no desktop
  - Rodapé com informações, categorias, contato e redes sociais
- **Componentes reutilizáveis:** `Section`, `ProductCard`, `ProductListing`, `Gallery`, `FilterGroup`, `Logo`, entre outros

## 🛠 Tecnologias

- [React](https://react.dev/) (JavaScript)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- HTML5 e CSS3

## 📁 Estrutura de pastas

```
src/
├── assets/            # SVGs (logo, redes sociais, categorias)
├── components/        # Componentes reutilizáveis
│   ├── BuyBox.jsx
│   ├── FilterBy.jsx
│   ├── FilterGroup.jsx
│   ├── Footer.jsx
│   ├── FooterInfo.jsx
│   ├── Gallery.jsx
│   ├── Header.jsx
│   ├── Highlight.jsx
│   ├── Icons.jsx
│   ├── Logo.jsx
│   ├── NavItem.jsx
│   ├── ProductCard.jsx
│   ├── ProductListing.jsx
│   ├── ProductOptions.jsx
│   ├── ScrollToTop.jsx
│   ├── SearchField.jsx
│   ├── Section.jsx
│   ├── SideMenu.jsx
│   ├── SocialMedia.jsx
│   ├── SortBy.jsx
│   └── SpecialOffer.jsx
├── pages/             # Páginas da aplicação
│   ├── HomePage.jsx
│   ├── Layout.jsx
│   ├── Layout.jsx
│   ├── PlaceholderPage.jsx
│   ├── ProductListingPage.jsx
│   └── ProductViewPage.jsx
├── routes/
│   └── StoreRoute.jsx # Definição das rotas
├── styles/
│   ├── index.css
│   ├── layer.css
│   └── theme.css      # Design tokens (cores)
├── utils/             # Dados estáticos (produtos, filtros, categorias...)
└── main.jsx
public/                # Imagens do slide, coleções e produtos
```

## 🧭 Rotas

| Rota            | Página                | Descrição                          |
| --------------- | --------------------- | ---------------------------------- |
| `/`             | `HomePage`            | Página inicial                     |
| `/produtos`     | `ProductListingPage`  | Listagem com filtros e ordenação   |
| `/product/:id`  | `ProductViewPage`     | Visualização de produto            |

Todas as rotas utilizam o componente `Layout`, que renderiza `Header` e `Footer` ao redor do conteúdo.

## 🎨 Paleta de cores

| Token           | Cor       |
| --------------- | --------- |
| `primary`       | `#C92071` |
| `secondary`     | `#B5B6F2` |
| `tertiary`      | `#991956` |
| `error`         | `#EE4266` |
| `success`       | `#52CA76` |
| `warning`       | `#F6AA1C` |
| `dark-gray`     | `#1F1F1F` |
| `dark-gray-2`   | `#474747` |
| `dark-gray-3`   | `#666666` |
| `light-gray`    | `#8F8F8F` |
| `light-gray-2`  | `#CCCCCC` |
| `light-gray-3`  | `#F5F5F5` |
| `white`         | `#FFFFFF` |

## 🚀 Como executar

**Pré-requisitos:** [Node.js](https://nodejs.org/) 18+ e npm instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/aline-mmiranda/frontend-dripstore.git

# 2. Acesse a pasta do projeto
cd frontend-dripstore

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## 📝 Padrão de commits

O projeto segue o padrão **Conventional Commits**:

```
feat: adiciona componente Gallery
fix: corrige alinhamento do título na Section
style: ajusta espaçamentos do rodapé
refactor: extrai dados de produtos para utils
docs: atualiza o README
```

## 👩‍💻 Autora

**Aline M Miranda** (Nena) — Front-end developer · design & dev

[![GitHub](https://img.shields.io/badge/GitHub-aline--mmiranda-181717?logo=github)](https://github.com/aline-mmiranda)

---

> Projeto desenvolvido para fins educacionais no curso da **Geração Tech 4.0**.

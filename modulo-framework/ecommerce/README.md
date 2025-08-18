# 🛒 E-commerce React App

Uma aplicação de e-commerce moderna desenvolvida com React, Vite e Bootstrap, oferecendo uma experiência completa de compras online.

## 📋 Funcionalidades

- ✅ **Catálogo de Produtos**: Visualização de produtos com imagens, preços e descrições
- ✅ **Carrinho de Compras**: Adicionar/remover produtos com persistência no localStorage
- ✅ **Sistema de Login**: Autenticação de usuários com validação
- ✅ **Interface Responsiva**: Design adaptável para desktop e mobile
- ✅ **Navegação Intuitiva**: Navbar fixa com navegação fluida
- ✅ **Notificações**: Feedback visual com toast notifications
- ✅ **Banner Carousel**: Slider de imagens promocionais

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server ultra-rápido
- **React Bootstrap** - Componentes UI responsivos
- **React Router DOM** - Navegação entre páginas
- **React Toastify** - Notificações elegantes
- **Axios** - Cliente HTTP para APIs
- **Context API** - Gerenciamento de estado global

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BannerCarousel.jsx
│   ├── CustomNavBar.jsx
│   └── ProductCard.jsx
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── Login.jsx
│   └── ProductList.jsx
├── hooks/              # Context providers
│   └── ContextCart.jsx
├── service/            # Serviços de API
│   ├── api.js
│   └── productService.js
├── routes/             # Configuração de rotas
│   └── index.jsx
└── assets/             # Recursos estáticos
```

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd ecommerce
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 🌐 API Externa

O projeto utiliza a **MockAPI** para simular dados de produtos e usuários:
- **Produtos**: `https://6895301e039a1a2b288e9d77.mockapi.io/api/ecommerce/products`
- **Login**: `https://6895301e039a1a2b288e9d77.mockapi.io/api/ecommerce/login`

## 📱 Funcionalidades Detalhadas

### Sistema de Carrinho
- Adicionar produtos ao carrinho
- Verificação de produtos duplicados
- Persistência no localStorage
- Autenticação obrigatória para adicionar produtos

### Sistema de Login
- Validação de campos obrigatórios
- Autenticação via API
- Armazenamento de token no localStorage
- Redirecionamento automático após login

### Interface Responsiva
- Layout adaptável para diferentes tamanhos de tela
- Grid responsivo de produtos (1-4 colunas)
- Navbar colapsável em dispositivos móveis

## 🎨 Componentes Principais

### ProductCard
Exibe informações do produto com:
- Imagem com altura fixa (200px)
- Nome e preço
- Descrição truncada
- Botão para adicionar ao carrinho

### CustomNavBar
Navegação principal com:
- Logo da marca
- Links de navegação
- Botão de login destacado
- Design escuro e fixo no topo

### BannerCarousel
Slider de imagens promocionais com:
- Transições automáticas
- Altura responsiva
- Imagens otimizadas

## 🔒 Autenticação

O sistema de login verifica credenciais contra a API e:
- Armazena token no localStorage
- Protege ações do carrinho
- Redireciona usuários não autenticados

## 📦 Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.0",
  "react-bootstrap": "^2.10.5",
  "bootstrap": "^5.3.3",
  "react-toastify": "^10.0.6",
  "axios": "^1.7.9"
}
```

Desenvolvido com ❤️ usando React + Vite
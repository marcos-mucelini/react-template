# 🚀 Template React + Vite

Este repositório é um **modelo pronto** para você começar seus projetos em **React** usando o **Vite**.  
A ideia é: você não precisa configurar tudo do zero, já está tudo pronto para começar a programar! 🎉

---

## 📦 O que estamos usando aqui?

- **React** → Biblioteca que usamos para criar as telas do site/aplicação.
- **Vite** → Ferramenta que deixa o projeto rápido de rodar e fácil de configurar.
- **ESLint + Prettier** → São "ajudantes" que deixam o código mais organizado e bonito (não se preocupe, já estão configurados).

---

## 🛠️ Como rodar o projeto no seu computador

1. Abra o projeto no **VSCode**.

2. No **terminal** do VSCode, digite o comando para instalar as dependências (os “pacotes” que o projeto precisa):

   ```bash
   npm install
   ```

3. Depois, para rodar o projeto, use o comando:
   ```bash
   npm run dev
   ```

---

## Estrutura de pastas

```
.
├── public/          # Arquivos que ficam "públicos" (ex: imagens)
├── src/             # Aqui fica o código que você vai mexer
│   ├── assets/      # Imagens, ícones, fontes...
│   ├── components/  # Pequenos blocos de código (ex: botões, menus)
│   ├── pages/       # Páginas da aplicação
│   ├── App.jsx      # Onde a parte visual começa
│   ├── index.css    # Estilos (cores, fontes, etc)
│   ├── main.jsx     # Ponto de entrada do projeto
├── index.html       # Arquivo principal HTML
├── package.json     # Arquivo que guarda as infos do projeto
└── vite.config.js   # Configuração do Vite

```

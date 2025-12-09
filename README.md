💻 Meu Projeto React (Vite) – Deploy no GitHub Pages

Bem-vindo(a)! 🖐️
Este é um projeto desenvolvido com React + Vite, publicado no ar usando GitHub Pages.
O objetivo é demonstrar como criar, organizar e disponibilizar um app React de forma rápida e eficiente ✨🚀

📁 Tecnologias usadas

⚛️ React

⚡ Vite

🎨 CSS / Styled Components (se você usar)

🌐 GitHub Pages para deploy

🛠️ Como rodar o projeto localmente

Clone o repositório:

git clone https://github.com/SEU-USUARIO/SEU-REPO.git


Entre na pasta:

cd SEU-REPO


Instale as dependências:

npm install


Execute o servidor de desenvolvimento:

npm run dev


O projeto ficará disponível em:

👉 http://localhost:5173

🚀 Como gerar a build
npm run build


Isso cria a pasta dist, onde fica a versão final do projeto.

🌐 Como fazer o deploy no GitHub Pages

Este projeto usa a biblioteca gh-pages para publicar automaticamente o conteúdo da pasta dist.

Para enviar ao ar:

npm run deploy


Após alguns segundos, seu site ficará disponível em:

👉 https://SEU-USUARIO.github.io/SEU-REPO/

⚙️ Configuração usada (importante!)
vite.config.js

O Vite precisa saber o nome do repositório para funcionar no GitHub Pages:

export default defineConfig({
  base: "/SEU-REPO/",
});

package.json

Scripts utilizados:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}

📸 Preview do projeto

(Coloque prints aqui se quiser 🖼️✨)

🤝 Contribuição

Pull requests são sempre bem-vindos!
Se quiser melhorar algo, fique à vontade 💡🤝

📜 Licença

Este projeto está sob a licença MIT 📝

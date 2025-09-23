// Importa o hook useState do React (permite criar "estados" que mudam com a interação)
import { useState } from "react";
// Importa a imagem do logo do React que está em src/assets
import reactLogo from "./assets/react.svg";
// Importa a imagem do logo do Vite (arquivo na raiz pública)
import viteLogo from "/vite.svg";

function App() {
  // Cria um estado 'count' com valor inicial 0; setCount atualiza esse valor
  const [count, setCount] = useState(0);
  // Cria um estado 'nome' (string vazia) para guardar o texto digitado pelo usuário
  const [nome, setNome] = useState("");

  // O componente retorna JSX: é a "interface" que será mostrada no navegador
  return (
    <>
      {/* Bloco com os logos do Vite e do React (cada logo é um link) */}
      <div>
        {/* Link que abre a documentação do Vite em outra aba */}
        <a href="https://vite.dev" target="_blank">
          {/* Imagem do logo do Vite; className="logo" aplica o estilo/animção */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* Link que abre a documentação do React em outra aba */}
        <a href="https://react.dev" target="_blank">
          {/* Imagem do logo do React; className="logo react" adiciona variação */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Título principal da página */}
      <h1>Vite + React</h1>

      {/* Card que contém o botão contador */}
      <div className="card">
        {/* Botão com evento onClick: quando clicado, incrementa 'count' em 1 */}
        <button onClick={() => setCount((c) => c + 1)}>
          {/* Mostra o valor atual do contador vindo do estado 'count' */}
          Você clicou {count} vezes
        </button>
      </div>

      {/* Card que contém o campo de texto para digitar o nome */}
      <div className="card">
        {/* Input controlado: o valor vem do estado 'nome' */}
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{
            padding: "0.8rem", // aumenta o tamanho interno do input
            fontSize: "1.2rem", // aumenta o tamanho da fonte
            borderRadius: "8px", // cantos arredondados
            width: "250px", // largura do input
            border: "1px solid #ccc", // borda padrão
          }}
        />

        {/* Se 'nome' tiver algum texto, exibe uma saudação personalizada */}
        {nome && <h2>Olá, {nome}! 👋</h2>}
      </div>

      {/* Parágrafo com instrução para o aluno editar o arquivo */}
      <p className="read-the-docs">
        Edite <code>src/App.jsx</code> e salve para ver mudanças.
      </p>
    </>
  );
}

// Exporta o componente App para ser usado em outros arquivos (ex: main.jsx)
export default App;

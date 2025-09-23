// Importa o StrictMode do React.
// O StrictMode ajuda a identificar problemas no código
// durante o desenvolvimento, mas não afeta o funcionamento no navegador.
import { StrictMode } from "react";

// Importa a função createRoot da nova API do ReactDOM (a partir do React 18).
// Ela serve para "ligar" o React ao HTML.
import { createRoot } from "react-dom/client";

// Importa o arquivo de estilos CSS que será aplicado ao projeto inteiro.
import "./index.css";

// Importa o componente principal da aplicação (App),
// que é onde todo o código da interface começa.
import App from "./App.jsx";

// Aqui, o React procura no HTML por um elemento com id="root"
// (esse elemento está no arquivo index.html).
// Dentro dele, o React vai renderizar toda a aplicação.
createRoot(document.getElementById("root")).render(
  // StrictMode envolve o App para ajudar a detectar erros e boas práticas.
  <StrictMode>
    {/* Renderiza o componente App dentro da div root */}
    <App />
  </StrictMode>
);

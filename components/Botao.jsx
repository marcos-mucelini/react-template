
// Este é um exemplo de componente chamado Botao
// Nele temos os parâmetros:
// texto: Recebe o texto que será exibido dentro do botão
// funcaoClick: Recebe a função que será executada quando o botão for clicado
export default function Botao({ texto, funcaoClick }) {
    
    // Retorna um botão HTML
    // A função passada pela prop 'funcaoClick' será chamada quando o botão for clicado
    // O texto exibido dentro do botão será o valor da prop 'texto'
    return (
        <button onClick={funcaoClick}>
            {/* Exibe o texto recebido como parâmetro */}
            {texto}
        </button>
    );
}
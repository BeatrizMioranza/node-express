import prompt from "prompt-sync"

const propComando = prompt();
const ordem = () => {
    let palavra = propComando("Digite uma propriedade CSS:");
    let array = [];
    while (palavra.toLowerCase() != "sair") {
        array.push(palavra);
        palavra = propComando("Digite uma propriedade CSS:")
    }
    return array.sort().join(" ");
}

console.log(ordem());
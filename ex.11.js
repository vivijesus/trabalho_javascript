import prompt from "prompt-sync";
let ler = prompt();

console.log("-- PROGRAMA DA CORES --\n");

console.log("Informe a primeira cor:")
let cor1 = ler();

console.log("\nInforme a segunda cor:")
let cor2 = ler();


let resultado = '';

if (cor1 === 'vermelho' && cor2 === 'azul' ||
    cor1 === 'azul' && cor2 === 'vermelho') {
    resultado = "Roxo";
}
else if (cor1 === 'azul' && cor2 === 'amarelo' ||
         cor1 === 'amarelo' && cor2 === 'azul') {
    resultado = "Verde";
}
else if (cor1 === 'amarelo' && cor2 === 'vermelho' ||
         cor1 === 'vermelho' && cor2 === 'amarelo') {
    resultado = "Laranja";
}
else if (cor1 === cor2) {
    resultado = cor1;
}
else {
    resultado = "Apenas são aceitas cores primárias.";
}

console.log("A combinação das cores é: " + resultado);
import prompt from "prompt-sync";
let combustivel = prompt();

console.log("PROGRAMA DO COMBUSTIVEL");
console.log("descubra se precisa abastecer o carro");
console.log("Informe a capacidade em litros");
let tamanhodotanque = Number(combustivel()) ;

console.log("Qual é a quantidade atual de litros do combustivel?");
let quantidadelitros = Number(combustivel());


let resultado = quantidadelitros <= (tamanhodotanque / 4)

if(resultado) {
    console.log('Precisa abastecer');

} else {
    console.log('Não precisa abastecer');
}

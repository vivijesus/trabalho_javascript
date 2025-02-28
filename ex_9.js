import prompt from 'prompt-sync';
let acai = prompt();

console.log("\n PROGRAMA AÇAI");
console.log("\n Preço açai \n\n", "13.50");
console.log("Quantos açais voce quer?");

let quantidade = Number(acai())


let resultado = quantidade * 13.50;


console.log('Vc vai pagar ' + resultado)
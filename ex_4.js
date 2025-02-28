import prompt from 'prompt-sync'
let ler = prompt();


console.log('-- PROGRAMA VALOR FINAL DA COMPRA--');


console.log('Informe o valor da compra:');
let valor = Number(ler());

console.log('Informe o valor do desconto:');
let cupom = Number(ler());




const desconto = (cupom / 100) * valor;
const valorFinal = valor - desconto;




console.log('Compra finalizada. O valor final é ' + valorFinal + '%');
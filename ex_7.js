import prompt from 'prompt-sync'
let ler = prompt();

console.log('Programa Parcela');
console.log('Esse programa, informa o valor de cada parcela, a partir da compra');

console.log('digite o valor da compra');
let valordaCompra = Number(ler());

console.log('Digite quanta vezes você quer parcela');
let pacelas = Number(ler());

let resultado = valordaCompra / pacelas

console.log('O valor da sua parcela é: ' + resultado);

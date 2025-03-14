import prompt from 'prompt-sync'
let ler = prompt();


console.log('-- PROGRAMA DO INGRESSO --\n');


console.log('Informe o tipo de ingresso (meia ou inteira):');
let tipo = ler();

console.log('\nInforme a quantidade de ingressos:');
let qtd = Number(ler());


let total = 0;

if (tipo == 'inteira') {
  total = 28.50 * qtd;
}
else {
  total = (28.50 * qtd) / 2;
}


console.log('O total a pagar é R$ ' + total);
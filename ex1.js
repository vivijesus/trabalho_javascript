import prompt from 'prompt-sync'
let ler = prompt();


console.log('--PROGRAMA DO INGRESSO--');


console.log('Informe o tipo do ingresso (meia, inteira):');
let tipo = ler();

console.log('Informe a quantidade:');
let qtd = Number(ler());


let total = 0;

if (tipo == 'meia') {
  total = (qtd * 28.50) / 2;
}
else {
  total = qtd * 28.50;
}


console.log('O total a pagar é R$ ' + total);
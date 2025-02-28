import prompt from 'prompt-sync'
let ler = prompt();


console.log('-- PROGRAMA CONVERTE REAIS EM DOLARES-');


console.log('Informe o valor dos reais');
let reais = Number(ler());


let valorFinal = reais /  5.16;


console.log('dolar . O valor final de reais é ' + valorFinal );


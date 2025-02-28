import prompt from 'prompt-sync'
let ler = prompt();


console.log('-- PROGRAMA KILOS--');


console.log('Informe o valor de kilos');
let kilos = Number(ler());

console.log('Converta o kilo em gramas');
let gramas = Number(ler());



let valorFinal = kilos  / gramas;


console.log('Gramas. O valor final é ' + valorFinal );
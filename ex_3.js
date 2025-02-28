import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- PROGRAMA VERIFICADOR DA FEBRE --');

// 01. Coleta de dados
console.log('Informe a temperatura:');
let temp = Number(ler());


// 02. Resolução do(s) Problema(s)
// Problema: temFebre
let temFebre = temp >= 37.3;


// 03. Apresentar a(s) Resposta(s)
console.log('Você está com febre? ' + temFebre);
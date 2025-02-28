import prompt from 'prompt-sync'
let ler = prompt();


console.log('-- PROGRAMA DA COMPRA --');


// 01. Coleta de dados
console.log('Informe o valor da compra:');
let valor = Number(ler());

console.log('Informe o valor do desconto:');
let cupom = Number(ler());


// 02. Resolução dos Problemas
// ->> Valor Final
let valorFinal = valor - cupom;


// 03. Apresentação da Resposta
console.log('Compra finalizada. O valor final é R$ ' + valorFinal);
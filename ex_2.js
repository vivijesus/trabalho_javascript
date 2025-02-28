import prompt from 'prompt-sync'
let ler = prompt();


console.log('-- PROGRAMA DO ABASTECIMENTO --');

// 01. Coleta de dados
console.log('Informe a capacidade do tanque:');
let tanque = Number(ler());

console.log('Informe o consumo:');
let consumo = Number(ler());

console.log('Informe a distância da viagem:');
let viagem = Number(ler());


// 02. Resolução dos Problemas
let distTanque = tanque * consumo;
let qtdAbastec = (viagem / distTanque) + 1;

qtdAbastec = parseInt(qtdAbastec);


// 03. Apresentação da Resposta
console.log('Total de abastecimentos: ' + qtdAbastec);
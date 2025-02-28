import prompt from 'prompt-sync'
let ler = prompt();


console.log('PROGRAMA DO SALARIO');

console.log('calcular o salário líquido de um funcionário');


console.log("Digite o salário do funcionario")
let salarioBase = Number(ler());

console.log("Digite o bonus mensal em porcentagem")
let bonusPercentual = Number(ler());

console.log("Digite o valor do desconto")
let desconto = Number(ler());


const bonus = (bonusPercentual / 100) * salarioBase;
const salarioLiquido = salarioBase + bonus - desconto;

console.log(" Salario mensal base será de" + salarioLiquido);






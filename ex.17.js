import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA ORÇAMENTO FAMILIAR');


console.log("Digite o total de ganhos:");
let ganhos = Number(ler());

console.log("Digite o total de gastos:");
let gastos = Number(ler());


if (gastos > ganhos) {
console.log("Orçamento comprometido! Hora de rever seus gastos!");
}

 else {
    let percentualGastos = (gastos / ganhos) * 100;

if (percentualGastos > 100) {
console.log("Orçamento comprometido! Hora de rever seus gastos!");
} else if (percentualGastos > 80) {
console.log("Cuidado, seu orçamento pode ficar comprometido!");
} else if (percentualGastos > 50) {
console.log("Atenção, melhor conter os gastos!");
 } else if (percentualGastos > 20) {
console.log("Muito bem, seus gastos não ultrapassam metade dos ganhos!");
} else {
console.log("Parabéns, está gerenciando bem seu orçamento!");
}
}








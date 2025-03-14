import prompt from "prompt-sync";
let orcamento = prompt();
console.log("PROGRAMA ORÇAMENTO FAMILIAR");
console.log("Informe a situação de um orçamento familiar baseado no total de ganhos e de gastos");

console.log('Qual e o seu total de ganhos?');
let ganho = Number(orcamento());

console.log('Qual e o total de gastos?');
let gasto = Number(orcamento());

if(ganho >= gasto ){
console.log('Voce esta dentro do orçamento');

}
else{
    console.log('voce esta fora do orçamento nao gaste mais');
}

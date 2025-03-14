import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA CALCULADORA');

console.log('Digite 1, para fazer a Soma\n\n', 'Digite 2, para fazer a subtraçao\n\n','Digite 3, para fazer a multiplicacao\n\n', 'Digite 4, para fazer divisao\n\n', 'Digite 5 para fazer o resto da divisao\n\n','Digite 6 para a potencia\n\n' );
let opcao = Number (ler());



if(opcao === 1) {
    console.log('Informe um número:');
let num1 = Number(ler());

console.log('Informe outro número:');
let num2 = Number(ler());

let soma = num1 + num2;

console.log('A soma é ' + soma);

} else if(opcao === 2) {

console.log('Informe um número:');
let num1 = Number(ler());

console.log('Informe outro número:');
let num2 = Number(ler());

let subtraçao = num1 - num2;

console.log('A subtraçao é ' + subtraçao);

}else if (opcao === 3) {
console.log('Informe um número:');
let num1 = Number(ler());

console.log('Informe outro número:');
let num2 = Number(ler());

let multiplicao = num1 * num2;

console.log('A multiplicacão é ' + multiplicao);

} else if (opcao === 4) {
console.log('Informe um número:');
let num1 = Number(ler());

console.log('Informe outro número:');
let num2 = Number(ler());

let divisao = num1 /  num2;

console.log('A divisao é ' + divisao);
    }


else if (opcao === 5){
    console.log('Informe um número:');
    let num1 = Number(ler());
    
    console.log('Informe outro número:');
    let num2 = Number(ler());
    
    let restodadivisao = num1 % num2;
    
    console.log('resto da divisao ' + restodadivisao);
    }

    else if(opcao === 6){
    console.log('Informe um número:');
    let num1 = Number(ler());
    
    console.log('Informe outro número:');
    let num2 = Number(ler());
    
    let potencia = Math.pow(num1, num2);
    
    console.log('potencia ' + potencia);
    }
    else {
        console.log("Operação não suportada");
    }




























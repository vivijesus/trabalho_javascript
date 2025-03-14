import prompt from "prompt-sync";
let semana = prompt();
console.log("PROGRAMA DA SEMANA");

console.log("Digite o numero para saber o dia da semana por extenso");
let semana1 = Number(semana());


if(semana1 == 0){
    console.log('Domingo');
}

if(semana1 == 1){
    console.log('Segunda-feira');
}

if(semana1 == 2){
    console.log('Terça-feira');
}

if(semana1 == 3){
    console.log('Quarta-feira');
}

if(semana1 == 4){
    console.log('Quinta-feira');
}
                                                                                                          
if(semana1 == 5){
    console.log('Sexta-feira');
}

if(semana1 == 6){
    console.log('Sabado');
}

if(semana1 >= 7){
    console.log('Dia da semana invalido')
}
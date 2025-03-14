import prompt from "prompt-sync";
let mes = prompt();
console.log("PROGRAMA DO MES");

console.log("Digite o numero para saber o mes do ano por extenso");
let mes1 = Number(mes());


if(mes1 == 1){
    console.log('Janeiro');
}

if(mes1 == 2){
    console.log('Fevereiro');
}

if(mes1 == 3){
    console.log('Março');
}

if(mes1 == 4){
    console.log('Abril');
}

if(mes1 == 5){
    console.log('Maio');
}

if(mes1 == 6){
    console.log('Junho');
}

if(mes1 == 7){
    console.log('Julho');
}

if(mes1 == 8){
    console.log('Agosto');
}

if(mes1 == 9){
    console.log('Setembro');
}

if(mes1 == 10){
    console.log('Outubro');
}

if(mes1 == 11){
    console.log('Novembro')
}
if(mes1 == 12){
    console.log('Dezembro')
}

if(mes1 >= 13){
    console.log('Mes do ano invalido')
}
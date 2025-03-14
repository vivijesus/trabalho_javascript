import prompt from "prompt-sync";
let temperatura = prompt();
console.log("PROGRAMA DA TEMPERATURA");

console.log("Digite o numero da temperatura para saber se esta com febre");
let temperatura1 = Number(temperatura());


if(temperatura1 == 41){
    console.log('Hipertemia');
}

if(temperatura1 >= 39.6 || temperatura1 < 41 ){
    console.log('Febre Alta')
}
if(temperatura1 >= 37.6 || temperatura1 < 39.6){
    console.log('Febre')
}
if(temperatura1 >= 36 || temperatura1 < 37.6){
    console.log('normal')
}
if(temperatura1 == 36){
    console.log('hipotemia')
}
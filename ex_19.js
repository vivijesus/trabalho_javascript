import prompt from 'prompt-sync'
let ler = prompt();

console.log("Programa do Retangulo");
console.log("Verificar se dois retângulos possuem a mesma área.");
console.log("Qual é a area do primeiro retangulo?");
let areaprimeiro = Number(ler());

console.log("Qual é area do segundo retangulo?");
let areasegundo = Number(ler());

if(areaprimeiro == areasegundo){
console.log("Possue a mesma area")
}

else{
    console.log("Não possue a mesma area")
}


import prompt from 'prompt-sync';
let nota =  prompt();
console.log("Programa Nota")
console.log ("Avalie se o aluno passou ou não");

console.log("Qual foi a sua primeira nota?");
let nota1 = Number(nota());

console.log("Qual foi a sua segunda nota?");
let nota2 = Number(nota());

console.log("Qual foi a sua terceira nota?");
let nota3 = Number(nota());


let media = (nota1+nota2+nota3)/3;

if (media == 8 || media == 9 || media == 10) {
    console.log('Aprovado com sucesso')
}

if (media == 6 || media === 8){
    console.log('aprovado')
}

if (media == 3 || media === 6){
    console.log('Recuperaçao')
}

if (media === 3){
    console.log('Reprovado')
}
if (media === 0){
    console.log('Desistente')
}

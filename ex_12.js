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

if(media >= 6) {
    console.log("Aluno Aprovado")
}
else{
    console.log("Aluno Reprovado")
}




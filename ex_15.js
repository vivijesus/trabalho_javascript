import prompt from "prompt-sync";
let filme = prompt();

console.log("O programa realiza uma pergunta sobre a série");
console.log("Programa da serie, club 57");

console.log("Qual o nome da Eva na vida Real?");

console.log("digite 1 para Anglela Rincón, digite 2 para Isabella Castillo, digite 3 para Evaluna Montaner");
let escolha = Number(filme());


if(escolha==3) {
    console.log("Está correto")
}
 else {
    console.log("Está incorreto")
 }



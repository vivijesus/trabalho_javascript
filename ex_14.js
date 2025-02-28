import prompt from "prompt-sync";
let cor = prompt();
console.log("Programa Semáforo");
console.log("Esse programa informa se o pedestre pode atravesar ou nao");

console.log("O farol está vermelho, pedestre voce não pode atravessar");

setTimeout(() => {
  console.log("O farol está amarelo, pedestre voce nao pode atravessar");
}, 3000);

setTimeout(() => {
    console.log("O farol está verde, pedestre voce pode atravessar");
}, 6000);

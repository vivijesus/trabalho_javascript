import prompt from "prompt-sync";
let cor = prompt();
console.log("Farol inoperante");
console.log("Esse programa informa um pedestre deve realizar ao ver a cor de seu semáforo");

console.log("O farol está vermelho, espere");

setTimeout(() => {
  console.log("O farol está roxo, farol inoperante");
}, 3000);

setTimeout(() => {
    console.log("O farol está verde, Atravesse");
}, 6000);













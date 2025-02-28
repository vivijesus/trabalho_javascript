import prompt from 'prompt-sync';
let acai = prompt();

console.log("PROGRAMA DE VENDA DE AÇAI")
console.log("O que gostaria de pedir?")
console.log("\nPreços açai \n\n","Pequeno, R$ 13,50\n","Médio, R$ 15\n", "Grande, R$ 17,50\n");


console.log("digite 1 para escolher o açai pequeno\n\n", "digite 2 para escolher o açai médio\n\n", "digite 3 para escolher o açai grande\n\n");

let escolha = Number(acai());

 if (escolha == 1){
  
  console.log("Quantos açais pequenos você quer?")
  let quantidade = Number(acai());
  let resultado = quantidade * 13.50
  console.log("Voce irá pagar "+ resultado)
 

}
 if (escolha == 2){
  console.log("Quantos açais médios você quer?")
  let quantidade = Number (acai());
  let resultado = quantidade * 15
  console.log("Voce irá pagar "+ resultado)
 }

 if (escolha == 3){
  console.log("Quantos açais grandes você quer?")
  let quantidade = Number (acai());
  let resultado = quantidade * 17.50
  console.log("Voce irá pagar " + resultado)
 }

 

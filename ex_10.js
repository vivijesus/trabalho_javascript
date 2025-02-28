import prompt from 'prompt-sync';
let acai = prompt();

console.log ("PROGRAMA ACAI");
console.log ("Calcular o total de venda do açai");
console.log("\nPreços açai \n\n","Pequeno, R$ 13,50\n","Médio, R$ 15\n", "Grande, R$ 17,50\n");

console.log("digite 1 para escolher o açai pequeno\n\n", "digite 2 para escolher o açai médio\n", "digite 3 para escolher o açai grande\n\n");

let escolha = Number(acai());

if(escolha==1) {
  console.log("Quantos açais pequenos voce quer?");
  let quantidade = Number(acai());
  console.log("Voce tem cupom de desconto, digite o valor do desconto em porcentagem");
  let valordodescontoeporcentagem = Number(acai());

  let valorCompra = quantidade * 13.50;


  let totalComDesconto = valorCompra - (valorCompra * (valordodescontoeporcentagem / 100));
  console.log(totalComDesconto, 'pago')
}

if(escolha==2) {
console.log("Quantos açais médios voce quer?");
let quantidade = Number(acai());
console.log("voce tem cupom de desconto, digite o valor do desconto em porcentagem");
let valordodescontoeporcentagem =Number(acai());

let valorCompra = quantidade * 15;
let totalComDesconto = valorCompra - (valorCompra * (valordodescontoeporcentagem / 100));
  console.log(totalComDesconto, 'pago')

 
}

if(escolha==3) {
  console.log("Quantos açais grandes voce quer?");
  let quantidade = Number(acai());
  console.log("Voce tem cupom de desconto, digite o valor do desconto em porcentagem");
  let valordodescontoeporcentagem =Number(acai());

  let valorCompra = quantidade * 17.50
  let totalComDesconto = valorCompra - (valorCompra * (valordodescontoeporcentagem / 100));
  console.log(totalComDesconto, 'pago')


}






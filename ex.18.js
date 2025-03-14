import prompt from "prompt-sync";
let ler = prompt();

console.log("PROGRAMA VALOR DA MENSALIDADE");

console.log(
  "Digite SI, para fazer Sistemas de Informação\n\n",
  "Digite ADS, para fazer Análise e Desenv. Sistemas\n\n",
  "Digite CS, para fazer a Ciência da Computação\n\n",
  "Digite EC, para fazer Engenharia da Computação\n\n",
  "Digite ES para fazer Engenharia de Software\n\n"
);
let opcao = String(ler());

if (opcao === "si") {
    console.log("A mensalidade curso Sistemas de Informação é R$ 550,00");
}
if (opcao === "ads") {
    
    let operacao = (750  * (50 / 100));
    let valorFinal = operacao - 50;
    console.log('Com valor de 50% de desconto, curso: Ciência da Computação a mensalidade custará R$ '+ valorFinal)
}
if (opcao === "cs") {
    console.log("O curso Ciência da Computação te, mensalidade isenta");
}
if (opcao === "es") {
    console.log("A mensalidade Engenharia de Software é R$ 950,00");
}


if (opcao === "ec") {
    console.log("A mensalidade Engenharia da Computação é R$ 1.300,00");
}

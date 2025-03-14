import prompt from "prompt-sync";
let imcorporal = prompt();

// Função para calcular IMC
function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}

// Função para avaliar a situação do IMC
function avaliarSituacao(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    return "obesidade grau I";
  } else if (imc >= 35 && imc < 39.9) {
    return "obesidade grau II";
  }  else {
    return "obesidade grau III";
  }
}

// Função principal
function main() {
  // Obter altura e peso do usuário
  const altura = parseFloat(imcorporal("Digite sua altura em metros: "));
  const peso = parseFloat(imcorporal("Digite seu peso em quilogramas: "));

  // Calcular o IMC
  const imc = calcularIMC(altura, peso);

  // Avaliar a situação
  const situacao = avaliarSituacao(imc);

  // Apresentar o IMC e a situação
  console.log('Seu IMC é: '+ imc.toFixed(2) +'\nSituação: ' + situacao);
}

// Chamar a função principal
main();

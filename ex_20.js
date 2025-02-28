import prompt from 'prompt-sync'
let imcDados = prompt();

function calcularIMC(peso, altura) {
    // Cálculo do IMC
    let imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Você está com o peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        return "Você está acima do peso (sobrepeso).";
    } else {
        return "Você está acima do peso.";
    }
}

// Função principal
function main() {
    const peso = parseFloat(imcDados("Digite seu peso (em kg):"));
    const altura = parseFloat(imcDados("Digite sua altura (em metros):"));

    const imc = calcularIMC(peso, altura);
    
    console.log(`Seu IMC é: ${imc.toFixed(2)}\n${classificarIMC(imc)}`);
}

// Chamada da função principal
main();
import prompt from "prompt-sync";
let cilindro = prompt();

function calcularVolume(diametro, altura) {
    const pi = Math.PI;
    const raio = diametro / 2;
    return pi * Math.pow(raio, 2) * altura;
}

function verificarTransferencia(diametro1, altura1, diametro2, altura2) {
    const volumeCilindro1 = calcularVolume(diametro1, altura1);
    const volumeCilindro2 = calcularVolume(diametro2, altura2);

    if (volumeCilindro1 <= volumeCilindro2) {
        console.log("O volume do cilindro 1 pode ser transferido para o cilindro 2.");
    } else {
        console.log("O volume do cilindro 1 não pode ser transferido para o cilindro 2.");
    }
}

// Exemplo de uso
console.log("Digite o diâmetro do cilindro 1:");
const diametro1 = Number(cilindro());

console.log("Digite a altura do cilindro 1:");
const altura1 = Number(cilindro());

console.log("Digite o diâmetro do cilindro 2:")

const diametro2 = Number(cilindro());

console.log("Digite a altura do cilindro 2:");
const altura2 = Number(cilindro());

verificarTransferencia(Number(diametro1), Number(altura1), Number(diametro2), Number(altura2));

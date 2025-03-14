import prompt from 'prompt-sync'
let ler = prompt();

function tipoTriangulo(lado1, lado2, lado3) {
    // Verifica se os lados formam um triângulo
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        // Identifica o tipo do triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            return "Esse é um triângulo Equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "Esse é um triângulo Isósceles";
        } else {
            return "Esse é um triângulo Escaleno";
        }
    } else {
        return "Os valores informados não formam um triângulo.";
    }
}

// Exemplo de uso
const lado1 = Number(ler("Digite o comprimento do lado 1:"));
const lado2 = Number(ler("Digite o comprimento do lado 2:"));
const lado3 = Number(ler("Digite o comprimento do lado 3:"));

const resultado = tipoTriangulo(Number(lado1), Number(lado2), Number(lado3));
console.log(resultado)

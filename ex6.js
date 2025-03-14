import prompt from "prompt-sync";
let sorveteria = prompt();
console.log("PROGRAMA DA SORVETERIA");
console.log("Digite quantas gramas foi consumida para saber valor a se pagar");

let gramasConsumidas = Number(sorveteria());

function calcularTotal(gramas) {
    const precoPor100g = 3.50;
    const descontoPara1kg = 0.50; // Desconto de 50 centavos

    // Verifica se o peso é válido
  
    if (gramas <= 0) {
        return console.log("Peso Inválido");
    }

    let precoFinal = precoPor100g;

    // Aplica desconto se a quantidade for igual ou superior a 1kg
    if (gramas >= 1000) {
        precoFinal -= descontoPara1kg;
    }

    // Calcula o total a pagar
    const totalAPagar = (gramas / 100) * precoFinal;
    
    // Retorna o total formatado
    return console.log(`O total a pagar é R$ ${totalAPagar.toFixed(2)}`);
}

calcularTotal(gramasConsumidas)
// Exemplo de uso
/*
console.log(calcularTotal(900));   // “O total a pagar é R$ 31.50”
console.log(calcularTotal(1000));  // “O total a pagar é R$ 30.00”
console.log(calcularTotal(50));    // “O total a pagar é R$ 1.75”
console.log(calcularTotal(0));     // “Peso Inválido”

*/



















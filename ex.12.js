import prompt from 'prompt-sync';
let ler = prompt();

console.log('-- CALCULADORA DE NOTAS --\n');

console.log('Informe a primeira nota:');
let nota1 = Number(ler());

console.log('Informe a segunda nota:');
let nota2 = Number(ler());

console.log('Informe a terceira nota:');
let nota3 = Number(ler());

let media = (nota1 + nota2 + nota3) / 3;
let situacao = '';

if (media == 0) {
    situacao = 'Desistente';
}
else if (media <= 3) {
    situacao = 'Reprovado';
}
else if (media < 6) {
    situacao = 'Recuperação';
}
else if (media < 8) {
    situacao = 'Aprovado';
}
else {
    situacao = 'Aprovado com sucesso';
}

console.log(`A média do aluno é ${media.toFixed(2)}`);
console.log(`Situação: ${situacao}`);
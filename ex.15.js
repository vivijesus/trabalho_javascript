import prompt from 'prompt-sync';
let candidato = prompt();

console.log('-Candidato de vestibular--\n');

console.log('Digite a sua nota?');
let nota1 = Number (candidato());

console.log('Digite a sua Nota de corte');
let nota2 = Number (candidato());

console.log('Digite a nota mínima para aprovação')
let nota3 = Number (candidato());

let media = (nota1 + nota2 + nota3) / 3;
let situacao = '';

if (media == 0) {
    situacao = 'Desistente';
}
else if (media <= 3) {
    situacao = 'Candidato não passou';
}
else if (media <= 6) {
    situacao = 'Candidato está na lista de espera';
}
else if (media <= 8) {
    situacao = 'Candidato Aprovado';
}

console.log(`A média do aluno é ${media.toFixed(2)}`);
console.log(`Situação: ${situacao}`);









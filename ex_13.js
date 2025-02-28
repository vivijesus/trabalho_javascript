import prompt from 'prompt-sync'
let ler = prompt();

console.log("Programa do livro");
console.log("calcula o tempo que um livro será lido");


console.log("Qual é o nome do livro?");
let livro = String(ler());


console.log("Quantas paginas tem?");
let totalPaginas = Number(ler());

console.log("Qual é o tempo de segundos por paginas.")
let tempoPorPagina = Number(ler());
 

const tempoTotalSegundos = totalPaginas * tempoPorPagina;
console.log("Voce levará " + tempoTotalSegundos + " segundos");





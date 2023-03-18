// Estrutura sequencial - Previsível.
// console.log("Eu primeiro...");
// console.log("Agora eu...");
// console.log("Sempre vou ser a última! :(");

// Processamento síncrono e bloqueante.
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000;
//     while (new Date().getTime() <= atualMais2Segundos); // Função "no-op", como se fosse um delay.
//     const d = 8 + 4;
//     return d;
// }
// const a = 2 + 7;
// const b = 5;
// console.log(a + b);
// const d = demorada();
// console.log(d);
// const e = 2 + a + b
// console.log(e);

// Processamento assíncrono - Reutiliza a função "demorada".
// setTimeout(() => {
//     const d = demorada();
//     console.log(d);
// }, 500); // Agenda a execução de um função para daqui meio segundo, a função é passada como parâmetro.
// console.log(e);

// Manipulação de arquivos, função radouken e muitos callbacks.
// const fs = require ("fs");
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro, conteudo) => {
//         if (erro)
//             console.log("Erro: " + erro);
//         else{
//             console.log("Conteudo: " + conteudo.toString());
//             const resultado = +conteudo.toString() * 2; // O "+" a esquerda converte string para número.
//             const finalizar = (erro) => {
//                 // condicao ? v1 : v2
//                 console.log(erro ? "Erro: " + erro : "Escrita ok!");
//             }
//             fs.writeFile("dobro.txt", resultado.toString(), finalizar);
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// }
// abrirArquivo("arquivo.txt");

// Promises
// Promise.resolve é uma forma de escrever a Promise sem usar o new Promise.
// function calculoRapidim(n){
//     return Promise.resolve((n * (n + 1)) / 2);
// }
// const pConcluida = calculoRapidim(10);
// pConcluida.then(res => console.log(res));

// function calculoDemorado(n){
//     const p = new Promise(function(resolve, reject){
//         let res = 0;
//         for (let i = 1; i <= n; i++) res += i;
//         resolve(res)
//     });
//     return p;
// }
// const minhaPromise = calculoDemorado(10);
// minhaPromise.then((resultado) => {console.log(resultado)});

// Exercicío - Escrever "calculoRapidim" usando uma new Promise.
function calculoRapidim2(n){
    const p = new Promise(function(resolve, reject){
        let res = ((n * (n + 1)) / 2);
        resolve(res)
    });
    return p;
}
const pConcluida = calculoRapidim2(10);
pConcluida.then(res => console.log(res));
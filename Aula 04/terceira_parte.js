// Estrutura sequencial - Previsível.
// console.log("Eu primeiro...");
// console.log("Agora eu...");
// console.log("Sempre vou ser a última! :(");

// Processamento síncrono e bloqueante.
function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000;
    while (new Date().getTime() <= atualMais2Segundos); // Função "no-op", como se fosse um delay.
    const d = 8 + 4;
    return d;
}
const a = 2 + 7;
const b = 5;
// console.log(a + b);
// const d = demorada();
// console.log(d);
const e = 2 + a + b
// console.log(e);

// Processamento assíncrono - Reutiliza a função "demorada".
setTimeout(() => {
    const d = demorada();
    console.log(d);
}, 500); // Agenda a execução de um função para daqui meio segundo, a função é passada como parâmetro.
console.log(e);

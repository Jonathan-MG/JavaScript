// async/await
// function hello(nome){
//     return `Ola, ${nome}`
// }
// async function hello(nome){ //Retorn uma promise chamada hello.
//     return `Ola, ${nome}`
// }
// console.log(hello('Joao'));
// hello('Joao').then(res => {console.log(res);})
function factorial(n){
    if (n<0) return Promise.reject("N não pode ser negativo!")
    let res = 1
    for (let i = 2; i <= n; i++) res = res * i; // Ou res *= i
    return Promise.resolve(res)
}

function ChamadacomTheneCatch(){
    factorial(5)
    .then(res => {console.log("Resultado: " + res)})
    .catch(erro => {console.log("Erro: " + erro)})

    factorial(-1)
    .then(res => {console.log("Resultado: " + res)})
    .catch(erro => {console.log("Erro: " + erro)})
}
ChamadacomTheneCatch()

async function ChamadacomAsyncAwait(){ //Usando Async e Await não precisa usar o then para ter o resultado das promises,
    try{                               //mas em casos de catch(erros) é necessário usar o try e catch para exibir os erros. 
        const f1 = await factorial(5);
        console.log(f1);
        const f2 = await factorial(-1);
        console.log(f2);
    }
    catch(e){
        console.log("No Catch: " + e);
    }
}
ChamadacomAsyncAwait()
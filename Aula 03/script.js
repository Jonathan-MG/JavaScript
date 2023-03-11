// Cloasures
// let umaFuncao = function (){
//     console.log('Fui armazenada em uma variável.')
// }
// umaFuncao()

// Função de alta ordem
// function f (funcao){
//     funcao()
// }
// f(function(){
//     console.log('Estou sendo passada para f.');
// })
//f(2)

// function g1 (){
//     function outraFuncao(){
//         console.log('Fui criada por g.');
//     }
//     return outraFuncao //Usar sem o (), pois 'outraFuncao' não tem return, assim a função g retornaria undefined.
// }

// function g2 (){
//     function outraFuncao(){
//         console.log('Fui criada por g.');
//         return function(){
//             console.log('Até Logo!');
//         }
//     }
//     return outraFuncao //Usar sem o (), pois 'outraFuncao' não tem return, assim a função g retornaria undefined.
// }

//const gResult = g1()
// gResult()
//Outro modo de chamar a função g1:
// g1()()

// f(g1())
// f(g2()())

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome);
//     }
//     g()
// }
// f()

// function saudacoesFactory(saudacao, nome){
//     return function (){
//         console.log(saudacao + ', ' + nome);
//     }

// }

// let olajonathan = saudacoesFactory('Olá', 'Jonathan')
// let tchaujonathan = saudacoesFactory('Tchau', 'Jonathan')

// olajonathan()
// tchaujonathan()

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont);
//     }
//     cont ++
//     function f2(){
//         console.log(cont);
//     }
//     return {f1,f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
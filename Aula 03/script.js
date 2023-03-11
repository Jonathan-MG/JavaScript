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

// -------------------------FIM DO CAPÍTULO 1-------------------------------
// -------------------------------------------------------------------------
// Uma pessoa que se chama João e tem 17 anos.
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// Uma pessoa que se chama Maria, tem 21 anos, e mora na rua B, número 121.
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         rua: 'Rua B',
//         número: 121
//     }
// }

// Uma concessionária tem CNPJ e endereço (Logradouro e Número). Ela possui três veículos no seu estoque. Cada veículo tem modelo,
// marca e ano de fabricação.

// let concessionaria = {
//     nome: 'MotorSport',
//     cnpj: '61.531.661/0001-02',
//     endereco: {
//         logradouro: 'Rua das carroças',
//         numero: 121
//     },
//     veiculos: [{
//             modelo: 'Vectra',
//             marca: 'GM',
//             ano: 2006
//         },{
//             modelo: 'Polo',
//             marca: 'Volkswagen',
//             ano: 2010
//         },{
//             modelo: 'Fiesta',
//             marca: 'Ford',
//             ano: 2015
//         }]
// }

//. e [''] - As duas formas de acesso.
// console.log(pessoa.nome);
// console.log(pessoa['idade']);

// console.log(pessoa.endereco);
// console.log(pessoa['endereco'].rua);
// console.log(pessoa.endereco['número']);
// console.log(pessoa.endereco.rua);

// console.log(concessionaria);
// for (let veiculo of concessionaria.veiculos){
//     console.log('Modelo: ' + veiculo.modelo + ', Marca: ' + veiculo.marca + ', Ano: ' + veiculo.ano);
// }

// Calculadora que soma dois valores e subtrai um valor de outro.
// let calc = {
//     soma: (a,b) => a + b,
//     subtracao: (a,b) => a - b,
// }
// console.log(calc.soma(2,3));
// console.log(calc['subtracao'](5,3));
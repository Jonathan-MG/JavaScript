// console.log('oi')
// let n: string
// n = 2
// n = 'abc'
// console.log(n)

// let Pessoa = function(idade: number):void{
//     this.idade = idade
//     this.fazerAniversario = function(){
//         this.idade++
//         console.log(this.idade)
//     }
//     this.fazerAniversarioComArrowFunction = () => {
//         this.idade++
//         console.log(this.idade)
//     }
// }
// let p = new Pessoa(1)
// setTimeout(p.fazerAniversario, 100)
// setTimeout(p.fazerAniversarioComArrowFunction, 100)

// function obterMedia(a: number, b: number, c?: number){
//     return a + b + (c ? c : 0) / (c ? 3 : 2)
// }
// console.log(obterMedia(2,3))
// console.log(obterMedia(2,3,4))
// console.log(obterMedia(2))
// console.log(obterMedia(2,3,4,5))

// function obterMedia(...a: number[]): number{ // O '...' Aceita 1 ou mais paramêtros sendo passados.
//     let total = 0;
//     for (let i = 0; i < a.length; i++){
//         total += a[i]
//     }
//     return total/(a.length > 0 ? a.length : 1)
// }
// console.log(obterMedia())
// console.log(obterMedia(1))
// console.log(obterMedia(1,2,3,4,5))

// interface IEstudante{
//     id: number;
//     nome: string;
//     // formando?: boolean;
// }
// function exibirEstudante (e: IEstudante){
//     console.log(e)
// }
// const e1 = {id: 1, nome: 'Ana', formando: true}
// const e2 = {id: 2, nome: 'João'}
// const e3: IEstudante = {id: 2, nome: 'João', formando: true}
// exibirEstudante(e1)
// exibirEstudante(e2)
// exibirEstudante(e3)

// class Estudante{
//     private nome: string
//     constructor(nome: string){
//         this.nome = nome
//     }
//     exibir(): void{
//         console.log(this.nome)
//     }
// }
// class EstudanteEspecial extends Estudante{
//     constructor(nome: string){
//         super(nome)
//     }
// }
// new Estudante("Ana").exibir()
// new EstudanteEspecial("João").exibir()

// class Pessoa{
//     private cpf: string;
//     readonly idade: number;
//     constructor(cpf:string, idade:number) {
//         this.cpf = cpf;
//         this.idade = idade
//     }

//     public getCpf(): string{
//         return this.cpf
//     }

//     public setCpf(cpf: string): void{
//         this.cpf = cpf
//     }
// }
// let p : Pessoa = new Pessoa('1234', 18)
// console.log(p)

class Empregado{
    private static numeroTotal: number = 0;
    constructor(
        private primeiroNome: string, 
        private sobrenome: string){
            Empregado.numeroTotal++;
        }
    public static obterNumerototal(): number{
        return Empregado.numeroTotal
    }
}
let e1: Empregado = new Empregado('Ana', 'Maria')
let e2: Empregado = new Empregado('João', 'Silva')
console.log(e1,e2,Empregado.obterNumerototal());
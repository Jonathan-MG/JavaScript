const input = require("input");
import { exit } from "process";
// import Singleton from "./Singleton";
// for (let i=0; i< 10; i++){
//     let singleton: Singleton = Singleton.getInstance();
//     singleton.executar();
// }

import CacheService from "./CacheService";
const cache = CacheService.getInstance();
// cache.set("João", []);
// console.log(cache.get("João"));
async function listaTelefonica(cache: CacheService) {
    console.log("****************************************************************************");
    console.log("*********************** Bem Vindo a Lista Telefônica ***********************");
    console.log("Escolha uma das seguintes opções:");
    console.log("1. Adicionar novo usuário");
    console.log("2. Adicionar número de telefone");
    console.log("3. Ver números de um usuário");
    console.log("4. Sair");
    let continuar: boolean = true;
    while (continuar) {
        let opcao = await input.text("Digite sua escolha:", { default: 4 });
        let userName: string;
        let userNumber: string;
        let lista: any;
        switch (opcao) {
            case "1":
                userName = await input.text("Digite o nome do usuário:");
                cache.userAdd(userName);
                break;
            case "2":
                userName = await input.text("Digite o nome do usuário:");
                userNumber = await input.text("Digite o número do usuário:");
                cache.numberAdd(userName, userNumber);
                break;
            case "3":
                userName = await input.text("Digite o nome do usuário:");
                lista = cache.get(userName);
                console.log("Usuário: \t" + userName);
                for (let i = 0; i < lista.length; i++) {
                    let indice = i + 1
                    console.log("Número " + indice + ": \t" + lista[i]);
                }
                break;
            case "4":
                console.log("Saindo.....");
                continuar = false;
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}
listaTelefonica(cache);
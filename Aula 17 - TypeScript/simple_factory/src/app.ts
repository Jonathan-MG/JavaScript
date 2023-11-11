class Pato{
    
}

class PatoReal extends Pato{
    
}

class PatodeCaca extends Pato{
    
}

class PatoBorracha extends Pato{
    
}

let ocasioes: string[] = [
    'piquinique', 'caça', 'banhheira'
]

function qualPato(ocasiao: string): Pato | null{
    let pato: Pato | null = null;
    if(ocasiao === 'piquinique')
        pato = new PatoReal();
    else if(ocasiao === 'caça')
        pato = new PatodeCaca();
    else if(ocasiao === 'banhheira')
        pato = new PatoBorracha();
    return pato;
}

console.log(qualPato(
    ocasioes[Math.floor(Math.random() * 3)]
));
// function teste(): void{
//     // indesejado
//     let pato: Pato = new Pato();
// }










// let hello: string = 'Hello, TypeScript!';
// console.log(hello);

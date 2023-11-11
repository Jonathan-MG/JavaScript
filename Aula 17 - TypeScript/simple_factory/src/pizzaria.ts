const input = require('input');
class Pizza{
    preparar(): void{
        console.log('Preparando pizza...');
    }
    assar(): void{
        console.log('Assando pizza...');
    }
    cortar(): void{
        console.log('Cortando pizza...');
    }
    empacotar(): void{
        console.log('Empacotando pizza...');
    }
}
class PizzaDeQueijo extends Pizza{
    preparar(): void{
        console.log('Preparando pizza de queijo...');
    }
    assar(): void{
        console.log('Assando pizza de queijo...');
    }
    cortar(): void{
        console.log('Cortando pizza de queijo...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de queijo...');
    }
}
class PizzaDeQueijoDeNY extends PizzaDeQueijo{
    preparar(): void{
        console.log('Preparando pizza de queijo estilo Nova York...');
    }
    assar(): void{
        console.log('Assando pizza de queijo estilo Nova York...');
    }
    cortar(): void{
        console.log('Cortando pizza de queijo estilo Nova York...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de queijo estilo Nova York...');
    }
}
class PizzaDeQueijoDeCH extends PizzaDeQueijo{
    preparar(): void{
        console.log('Preparando pizza de queijo estilo Chicago...');
    }
    assar(): void{
        console.log('Assando pizza de queijo estilo Chicago...');
    }
    cortar(): void{
        console.log('Cortando pizza de queijo estilo Chicago...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de queijo estilo Chicago...');
    }
}
class PizzaDeGrega extends Pizza{
    preparar(): void{
        console.log('Preparando pizza de grega...');
    }
    assar(): void{
        console.log('Assando pizza de grega...');
    }
    cortar(): void{
        console.log('Cortando pizza de grega...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de grega...');
    }
}
class PizzaPeperoni extends Pizza{
    preparar(): void{
        console.log('Preparando pizza de peperoni...');
    }
    assar(): void{
        console.log('Assando pizza de peperoni...');
    }
    cortar(): void{
        console.log('Cortando pizza de peperoni...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de peperoni...');
    }
}
class PizzaPeperoniDeNY extends PizzaPeperoni{
    preparar(): void{
        console.log('Preparando pizza de peperoni estilo Nova York...');
    }
    assar(): void{
        console.log('Assando pizza de peperoni estilo Nova York...');
    }
    cortar(): void{
        console.log('Cortando pizza de peperoni estilo Nova York...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de peperoni estilo Nova York...');
    }
}
class PizzaPeperoniDeCH extends PizzaPeperoni{
    preparar(): void{
        console.log('Preparando pizza de peperoni estilo Chicago...');
    }
    assar(): void{
        console.log('Assando pizza de peperoni estilo Chicago...');
    }
    cortar(): void{
        console.log('Cortando pizza de peperoni estilo Chicago...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de peperoni estilo Chicago...');
    }
}
class PizzaDeMolusco extends Pizza{
    preparar(): void{
        console.log('Preparando pizza de molusco...');
    }
    assar(): void{
        console.log('Assando pizza de molusco...');
    }
    cortar(): void{
        console.log('Cortando pizza de molusco...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de molusco...');
    }
}
class PizzaVegetariana extends Pizza{
    preparar(): void{
        console.log('Preparando pizza vegetariana...');
    }
    assar(): void{
        console.log('Assando pizza vegetariana...');
    }
    cortar(): void{
        console.log('Cortando pizza vegetariana...');
    }
    empacotar(): void{
        console.log('Empacotando pizza vegetariana...');
    }
}
class SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
        let pizza: Pizza | null = null;
        tipo = tipo.toLowerCase();
        if(tipo === 'queijo'){
            pizza = new PizzaDeQueijo();
        }// }else if(tipo === 'grega'){
        //     pizza = new PizzaDeGrega();
        // }
        else if(tipo === 'peperoni'){
            pizza = new PizzaPeperoni();
        }
        else if(tipo === 'molusco'){
            pizza = new PizzaDeMolusco();
        }
        else if(tipo === 'vegetariana'){
            pizza = new PizzaVegetariana();
        }
        return pizza;
    }
}
class SimplePizzaFactoryDeNY extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
        tipo = tipo.toLowerCase();
        switch(tipo){
            case 'queijo':
                return new PizzaDeQueijoDeNY();
            case 'peperoni':
                return new PizzaPeperoniDeNY();
            default:
                return null;
        }
    }
}
class simplePizzaFactoryDeCH extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
        tipo = tipo.toLowerCase();
        switch(tipo){
            case 'queijo':
                return new PizzaDeQueijoDeCH();
            case 'peperoni':
                return new PizzaPeperoniDeCH();
            default:
                return null;
        }
    }
}
class PizzaStore{
    //private simplePizzaFactory: SimplePizzaFactory;
    constructor(private simplePizzaFactory: SimplePizzaFactory){
        //this.simplePizzaFactory = simplePizzaFactory;
    }
    PedirPizza = (tipo: string): Pizza | null => {
        let pizza: Pizza | null = null;
        pizza = this.simplePizzaFactory.criarPizza(tipo);
        pizza?.preparar();
        pizza?.assar();
        pizza?.cortar();
        pizza?.empacotar();
        return pizza;
        // este código não varia
    }
}
let franquias: PizzaStore[] = [
    new PizzaStore(new SimplePizzaFactory()),
    new PizzaStore(new SimplePizzaFactoryDeNY()),
    new PizzaStore(new simplePizzaFactoryDeCH())
]
//console.log(PedirPizza());
//let pizza: Pizza |  null = PedirPizza('molusco')
// let PizzaStore1 = new PizzaStore(new SimplePizzaFactory());
// console.log(franquias[2].PedirPizza('queijo'));
async function ifood(loja: any[]) {
  const sabor = await input.select(`Escolha o sabor de sua pizza:`, ['Queijo', 'Peperoni', 'Molusco', 'Vegetariana']);
  const local = await input.select(`Escolha qual filial produzirá sua pizza:`, ['Matriz', 'Nova York', 'Chicago']);
  if(local === 'Matriz'){
    console.log(loja[0].PedirPizza(sabor));
  }
  else if(local === 'Nova York'){
    console.log(loja[1].PedirPizza(sabor));
  }
  else if(local === 'Chicago'){
    console.log(loja[2].PedirPizza(sabor));
  }
}
ifood(franquias);
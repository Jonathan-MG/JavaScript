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
//console.log(PedirPizza());
//let pizza: Pizza |  null = PedirPizza('molusco')
let PizzaStore1 = new PizzaStore(new SimplePizzaFactory());
console.log(PizzaStore1.PedirPizza('molusco'));
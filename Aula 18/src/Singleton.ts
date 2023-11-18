class Singleton{
    private static instance: Singleton;

    private constructor(){
        console.log("Construiu uma instância!");
    }

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    public executar(): void{
        console.log("Executando algo...");
    }
}
export default Singleton;
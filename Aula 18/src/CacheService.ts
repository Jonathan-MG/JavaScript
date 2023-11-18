class CacheService{
    private static instance: CacheService;
    private cache: Map<string, any>;

    private constructor(){
        this.cache = new Map();
    }

    public static getInstance(): CacheService{
        return !CacheService.instance ? CacheService.instance = new CacheService() : CacheService.instance;
    }

    public set(key: string, value: any): void{
        this.cache.set(key, value);
    }
    
    public get(key: string): any{
        return this.cache.get(key);
    }

    public userAdd(key: string): void{
        this.cache.set(key, []);
    }

    public numberAdd(key:string ,value: any): void{
        let numeros = this.cache.get(key);
        numeros.push(value);
        this.cache.set(key, numeros)
    }
}
export default CacheService;
export class Personaje{
    protected nombre:string;
    protected nivel:number= 1;
    protected vida:number=100;

    constructor(nombre:string){
        this.nombre= nombre;
    }

    //Metodos Get
    public getNombre():string{
        return this.nombre;
    }

    public getNivel():number{
        return this.nivel;
    }

    public getVida():number{
        return this.vida;
    }

    //Metodos Set
    public setNombre(nombrePersonaje:string):void{
        this.nombre= nombrePersonaje;
    }

    public setNivel(nivelPersonaje:number):void{
        this.nivel= nivelPersonaje;
    }

    public setVida(vidaPersonaje:number):void{
        this.vida= vidaPersonaje;
    }

    //Metodos generales
    public ataque(){
        console.log("El personaje esta atacando");
    }

    public defensa(){
        console.log("El personaje esta defendiendo");
    }
}

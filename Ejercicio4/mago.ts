import { Personaje } from "./personaje";
export class Mago extends Personaje{
    protected libroHechizos:string;
    protected varitaMagica:boolean= false;

    constructor(nombre:string,libroHechizos:string){
        super(nombre)
        this.libroHechizos= libroHechizos;
    }

    public getLibroHechizos():string{
        return this.libroHechizos;
    }

    public setLibroHechizos(nombreLibro:string):void{
        this.libroHechizos= nombreLibro;
    }

    public equiparVarita(varita:boolean):void{
        if(varita == false){
            this.varitaMagica= true;
        }
    }

    public guardarVarita(varita:boolean){
        if(varita == true){
            this.varitaMagica= false;

        }
    }

    public ataque(){
        console.log("El mago esta utilizando hechizos de ataque");
    }

    public defensa(){
        console.log("El mago esta utilizando hechizos para defenderse");
    }
}

import { Personaje } from "./personaje";
export class Luchador extends Personaje{
     protected espadaEquipada: boolean= false;
     protected escudoEquipado: boolean= false;

    constructor(nombre:string){
        super(nombre);
    }

    public equiparEspada():void{
        if(this.espadaEquipada == false){
            this.espadaEquipada= true;
        }
    }

    public guardarEspada():void{
        if(this.espadaEquipada == true){
            this.espadaEquipada= false;
        }
    }

    public equiparEscudo():void{
        if(this.escudoEquipado == false){
            this.escudoEquipado= true;
        }
    }

    public guardarEscudo():void{
        if(this.escudoEquipado == true){
            this.escudoEquipado= false;
        }
    }

    public ataque(){
        console.log("El luchador esta atacando con su espada");
    }

    public defensa(){
        console.log("El luchador se esta defendiendo con su escudo");
    }
}

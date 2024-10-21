import { Personaje } from "./personaje";
export class Arquero extends Personaje{
    protected arcoEquipado: boolean= false;
    constructor(nombre:string){
        super(nombre);
    }

    public equiparArco():void{
        if(this.arcoEquipado == false){
            this.arcoEquipado= true;
        }
    }

    public guardarArco():void{
        if(this.arcoEquipado == true){
            this.arcoEquipado= false;

        }
    }

    public ataque(){
        console.log("El arquero esta atacando con el arco");
    }

    public defensa(){
        console.log("El arquero se defiende con supersalto");
    }
}

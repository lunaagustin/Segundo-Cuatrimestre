import { Arquero } from "./arquero";
export class ArqueroEvolucionado extends Arquero{
    constructor(nombre:string){
        super(nombre)
        this.vida= 200;
        this.nivel= 20;
    }

    public setNivel(nivelEvolucionado:number):void{
        this.nivel= nivelEvolucionado;
    }

    public setVida(vidaEvolucionada:number):void{
        this.vida= vidaEvolucionada;
    }

    public ataque(){
        console.log("El arquero esta atacando con el arco y sus flechas explosivas");
    }

    public defensa(){
        console.log("El arquero se defiende con supersalto y supervelocidad");
    }
}

import { Autos } from "./autos";
import { Camiones } from "./camiones";
import { Motos } from "./motos";

export class RegistroAutomotor{
    private nombre: string;
    private autos: Autos[];
    private camiones: Camiones[];
    private motos: Motos[];

    constructor(nombreRegAu:string){
        this.nombre= nombreRegAu;
        this.autos= [];
        this.camiones= [];
        this.motos= [];
    }

    //Metodo set
    public getNombreRegAu():string{
        return this.nombre;
    }

    public getListaAutos():Autos[]{
        return this.autos;
    }

    public getListaCamiones():Camiones[]{
        return this.camiones;
    }

    public getListaMotos():Motos[]{
        return this.motos;
    }

    //Metodos Set/Agregar/Modificar/Eiminar o dar de baja
    public setNombreRegAu(nombreRegAu:string):void{
        this.nombre= nombreRegAu;
    }

    public agregarVehiculo(listaAutos?:Autos, listaCamiones?:Camiones, listaMotos?:Motos):void{
        this.autos.push(listaAutos);
        this.camiones.push(listaCamiones);
        this.motos.push(listaMotos);
    }
    
    public eliminarVehiculo(modeloAuto?:string, modeloCamion?:string, modeloMoto?:string):void{
        this.autos= this.autos.filter(auto => auto.getModeloAuto() !== modeloAuto)
        this.camiones= this.camiones.filter(camion => camion.getModeloCamion() !== modeloCamion)
        this.motos= this.motos.filter(moto => moto.getModeloMoto() !== modeloMoto)
    }
}

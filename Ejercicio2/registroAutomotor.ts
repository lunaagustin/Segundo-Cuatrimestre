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

    //Metodo get
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
        if (listaAutos != undefined) {
            this.autos.push(listaAutos);    
        } else {
            this.autos= [];    
        }
        if (listaCamiones != undefined) {
            this.camiones.push(listaCamiones);    
        } else {
            this.camiones= [];
        }
        if (listaMotos != undefined) {
            this.motos.push(listaMotos);
        } else {
            this.motos= [];
        }
    }
    
    // public modificarVehiculo(auto?:Autos,camion?:Camiones,moto?:Motos,marca?:string,modelo?:string,anio?:number,patente?:number):void{
    //     auto.setMarcaAuto(marca);
    //     auto.setModeloAuto(modelo);
    //     auto.setAnioAuto(anio);
    //     auto.setPatenteAuto(patente);

    //     camion.setMarcaCamion(marca);
    //     camion.setModeloCamion(modelo);
    //     camion.setAnioCamion(anio);
    //     camion.setPatenteCamion(patente);

    //     moto.setMarcaMoto(marca);
    //     moto.setModeloMoto(modelo);
    //     moto.setAnioMoto(anio);
    //     moto.setPatenteMoto(patente);
    // }

    public eliminarVehiculo(modeloAuto?:string, modeloCamion?:string, modeloMoto?:string):void{
        this.autos= this.autos.filter(auto => auto.getModeloAuto() !== modeloAuto)
        this.camiones= this.camiones.filter(camion => camion.getModeloCamion() !== modeloCamion)
        this.motos= this.motos.filter(moto => moto.getModeloMoto() !== modeloMoto)
    }

}

import { Auto } from "./autos";
import { Camion } from "./camiones";
import { Moto } from "./motos";
import { Vehiculo } from "./vehiculos";

export class RegistroAutomotor{
    private nombre:string;
    private listaAutos: Auto[];
    private listaCamiones: Camion[];
    private listaMotos: Moto[];

    constructor(nombre:string){
        this.nombre= nombre;
        this.listaAutos= [];
        this.listaCamiones= [];
        this.listaMotos= [];
    }

    //Metodo get
    public getNombreRegAu():string{
        return this.nombre;
    }

    public getListaAutos():Auto[]{
        return this.listaAutos;
    }

    public getListaCamiones():Camion[]{
        return this.listaCamiones;
    }

    public getListaMotos():Moto[]{
        return this.listaMotos;
    }

    //Metodos set
    public setNombreRegAu(nombreRegAu:string):void{
        this.nombre= nombreRegAu;
    }

    public agregarVehiculo(auto?:Auto,camion?:Camion,moto?:Moto):void{
        if(auto != undefined){
            this.listaAutos.push(auto);
        }else{
            this.listaAutos= [];
        }
        if (camion != undefined) {
            this.listaCamiones.push(camion);
        } else {
            this.listaCamiones= [];
        }
        if (moto != undefined) {
            this.listaMotos.push(moto);
        } else {
            this.listaMotos= [];
        }
    }

    public modificarVehiculo(vehiculo:Vehiculo,marca?:string,modelo?:string,anio?:number,patente?:number):void{
        if(marca != undefined){
            vehiculo.setMarcaVehiculo(marca);
        }
        if(modelo != undefined)
            {vehiculo.setModeloVehiculo(modelo);
        }
        if(anio != undefined){
            vehiculo.setAnioVehiculo(anio);
        }
        if(patente != undefined){
            vehiculo.setPatenteVehiculo(patente);    
        }
    }

    public eliminarVehiculo(modeloAuto?:string,modeloCamion?:string,modeloMoto?:string):void{
        this.listaAutos= this.listaAutos.filter(auto => auto.getModeloVehiculo() !== modeloAuto);
        this.listaCamiones= this.listaCamiones.filter(camion => camion.getModeloVehiculo() !== modeloCamion);
        this.listaMotos= this.listaMotos.filter(moto => moto.getModeloVehiculo() !== modeloMoto);
    }
}

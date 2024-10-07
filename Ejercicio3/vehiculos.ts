import { Auto } from "./autos";
import { Moto } from "./motos";
import { Camion } from "./camiones";

export class Vehiculo{
    protected marca:string;
    protected modelo:string;
    protected anio:number;
    protected patente:number;

    constructor(marca:string, modelo:string, anio:number, patente:number){
        this.marca= marca;
        this.modelo= modelo;
        this.anio= anio;
        this.patente= patente;
    }

    //Metodos get
    public getMarcaVehiculo():string{
        return this.marca;
    }

    public getModeloVehiculo():string{
        return this.modelo;
    }

    public getAnioVehiculo():number{
        return this.anio;
    }

    public getPatenteVehiculo():number{
        return this.patente;
    }

     //Metodos Set
     public setMarcaVehiculo(marcaVehiculo:string):void{
        this.marca= marcaVehiculo;
    }

    public setModeloVehiculo(modeloVehiculo:string):void{
        this.modelo= modeloVehiculo;
    }

    public setAnioVehiculo(anioVehiculo:number):void{
        this.anio= anioVehiculo;
    }

    public setPatenteVehiculo(patenteVehiculo:number):void{
        this.patente= patenteVehiculo;
    }
}

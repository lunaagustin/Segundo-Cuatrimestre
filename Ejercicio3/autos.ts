import { Vehiculo } from "./vehiculos";

export class Auto extends Vehiculo{
    constructor(marca:string,modelo:string,anio:number,patente:number){
        super(marca,modelo,anio,patente);
    }
}
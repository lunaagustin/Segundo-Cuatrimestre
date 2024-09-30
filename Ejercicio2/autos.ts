export class Autos{
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: number;

    constructor(marca:string, modelo:string, anio:number, patente:number){
        this.marca= marca;
        this.modelo= modelo;
        this.anio= anio;
        this.patente= patente;
    }

    //Metodos Get
    public getMarcaAuto():string{
        return this.marca;
    }

    public getModeloAuto():string{
        return this.modelo;
    }

    public getAnioAuto():number{
        return this.anio;
    }

    public getPatenteAuto():number{
        return this.patente;
    }

    //Metodos Set
    public setMarcaAuto(marcaAuto:string):void{
        this.marca= marcaAuto;
    }

    public setModeloAuto(modeloAuto:string):void{
        this.modelo= modeloAuto;
    }

    public setAnioAuto(anioAuto:number):void{
        this.anio= anioAuto;
    }

    public setPatenteAuto(patenteAuto:number):void{
        this.patente= patenteAuto;
    }
}

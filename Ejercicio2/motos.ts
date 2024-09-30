export class Motos{
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
    public getMarcaMoto():string{
        return this.marca;
    }

    public getModeloMoto():string{
        return this.modelo;
    }

    public getAnioMoto():number{
        return this.anio;
    }

    public getPatenteMoto():number{
        return this.patente;
    }

    //Metodos Set
    public setMarcaMoto(marcaMoto:string):void{
        this.marca= marcaMoto;
    }

    public setModeloMoto(modeloMoto:string):void{
        this.modelo= modeloMoto;
    }

    public setAnioMoto(anioMoto:number):void{
        this.anio= anioMoto;
    }

    public setPatenteMoto(patenteMoto:number):void{
        this.patente= patenteMoto;
    }
}

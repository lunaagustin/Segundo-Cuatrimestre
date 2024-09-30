export class Camiones{
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
    public getMarcaCamion():string{
        return this.marca;
    }

    public getModeloCamion():string{
        return this.modelo;
    }

    public getAnioCamion():number{
        return this.anio;
    }

    public getPatenteCamion():number{
        return this.patente;
    }

    //Metodos Set
    public setMarcaCamion(marcaCamion:string):void{
        this.marca= marcaCamion;
    }

    public setModeloCamion(modeloCamion:string):void{
        this.modelo= modeloCamion;
    }

    public setAnioCamion(anioCamion:number):void{
        this.anio= anioCamion;
    }

    public setPatenteCamion(patenteCamion:number):void{
        this.patente= patenteCamion;
    }
}

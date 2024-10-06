"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombreRegAu) {
        this.nombre = nombreRegAu;
        this.autos = [];
        this.camiones = [];
        this.motos = [];
    }
    //Metodo get
    RegistroAutomotor.prototype.getNombreRegAu = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getListaAutos = function () {
        return this.autos;
    };
    RegistroAutomotor.prototype.getListaCamiones = function () {
        return this.camiones;
    };
    RegistroAutomotor.prototype.getListaMotos = function () {
        return this.motos;
    };
    //Metodos Set/Agregar/Modificar/Eiminar o dar de baja
    RegistroAutomotor.prototype.setNombreRegAu = function (nombreRegAu) {
        this.nombre = nombreRegAu;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (listaAutos, listaCamiones, listaMotos) {
        if (listaAutos != undefined) {
            this.autos.push(listaAutos);
        }
        else {
            this.autos = [];
        }
        if (listaCamiones != undefined) {
            this.camiones.push(listaCamiones);
        }
        else {
            this.camiones = [];
        }
        if (listaMotos != undefined) {
            this.motos.push(listaMotos);
        }
        else {
            this.motos = [];
        }
    };
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
    RegistroAutomotor.prototype.eliminarVehiculo = function (modeloAuto, modeloCamion, modeloMoto) {
        this.autos = this.autos.filter(function (auto) { return auto.getModeloAuto() !== modeloAuto; });
        this.camiones = this.camiones.filter(function (camion) { return camion.getModeloCamion() !== modeloCamion; });
        this.motos = this.motos.filter(function (moto) { return moto.getModeloMoto() !== modeloMoto; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;

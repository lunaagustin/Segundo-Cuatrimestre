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
    //Metodo set
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
        this.autos.push(listaAutos);
        this.camiones.push(listaCamiones);
        this.motos.push(listaMotos);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (modeloAuto, modeloCamion, modeloMoto) {
        this.autos = this.autos.filter(function (auto) { return auto.getModeloAuto() !== modeloAuto; });
        this.camiones = this.camiones.filter(function (camion) { return camion.getModeloCamion() !== modeloCamion; });
        this.motos = this.motos.filter(function (moto) { return moto.getModeloMoto() !== modeloMoto; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiones = void 0;
var Camiones = /** @class */ (function () {
    function Camiones(marca, modelo, anio, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
    }
    //Metodos Get
    Camiones.prototype.getMarcaCamion = function () {
        return this.marca;
    };
    Camiones.prototype.getModeloCamion = function () {
        return this.modelo;
    };
    Camiones.prototype.getAnioCamion = function () {
        return this.anio;
    };
    Camiones.prototype.getPatenteCamion = function () {
        return this.patente;
    };
    //Metodos Set
    Camiones.prototype.setMarcaCamion = function (marcaCamion) {
        this.marca = marcaCamion;
    };
    Camiones.prototype.setModeloCamion = function (modeloCamion) {
        this.modelo = modeloCamion;
    };
    Camiones.prototype.setAnioCamion = function (anioCamion) {
        this.anio = anioCamion;
    };
    Camiones.prototype.setPatenteCamion = function (patenteCamion) {
        this.patente = patenteCamion;
    };
    return Camiones;
}());
exports.Camiones = Camiones;

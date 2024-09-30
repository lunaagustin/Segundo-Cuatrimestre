"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motos = void 0;
var Motos = /** @class */ (function () {
    function Motos(marca, modelo, anio, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
    }
    //Metodos Get
    Motos.prototype.getMarcaMoto = function () {
        return this.marca;
    };
    Motos.prototype.getModeloMoto = function () {
        return this.modelo;
    };
    Motos.prototype.getAnioMoto = function () {
        return this.anio;
    };
    Motos.prototype.getPatenteMoto = function () {
        return this.patente;
    };
    //Metodos Set
    Motos.prototype.setMarcaMoto = function (marcaMoto) {
        this.marca = marcaMoto;
    };
    Motos.prototype.setModeloMoto = function (modeloMoto) {
        this.modelo = modeloMoto;
    };
    Motos.prototype.setAnioMoto = function (anioMoto) {
        this.anio = anioMoto;
    };
    Motos.prototype.setPatenteMoto = function (patenteMoto) {
        this.patente = patenteMoto;
    };
    return Motos;
}());
exports.Motos = Motos;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autos = void 0;
var Autos = /** @class */ (function () {
    function Autos(marca, modelo, anio, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
    }
    //Metodos Get
    Autos.prototype.getMarcaAuto = function () {
        return this.marca;
    };
    Autos.prototype.getModeloAuto = function () {
        return this.modelo;
    };
    Autos.prototype.getAnioAuto = function () {
        return this.anio;
    };
    Autos.prototype.getPatenteAuto = function () {
        return this.patente;
    };
    //Metodos Set
    Autos.prototype.setMarcaAuto = function (marcaAuto) {
        this.marca = marcaAuto;
    };
    Autos.prototype.setModeloAuto = function (modeloAuto) {
        this.modelo = modeloAuto;
    };
    Autos.prototype.setAnioAuto = function (anioAuto) {
        this.anio = anioAuto;
    };
    Autos.prototype.setPatenteAuto = function (patenteAuto) {
        this.patente = patenteAuto;
    };
    return Autos;
}());
exports.Autos = Autos;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var autos_1 = require("./autos");
var camiones_1 = require("./camiones");
var motos_1 = require("./motos");
var registroAutomotor_1 = require("./registroAutomotor");
//crear vehiculos
var auto1 = new autos_1.Autos("a", "b", 1, 2);
var camion1 = new camiones_1.Camiones("c", "d", 3, 4);
var moto1 = new motos_1.Motos("e", "f", 5, 6);
//crear RA
var regAu1 = new registroAutomotor_1.RegistroAutomotor("Olavarria");
regAu1.agregarVehiculo(auto1, camion1, moto1);
//Metodos GET
// console.log(regAu1.getNombreRegAu());
// console.log(auto1.getAnioAuto());
// console.log(camion1.getMarcaCamion());
// console.log(moto1.getPatenteMoto());
//Metodos SET
// auto1.setMarcaAuto("Ferrari");
// camion1.setModeloCamion("Iveco");
// moto1.setAnioMoto(2011);
// console.log(auto1.getMarcaAuto());
// console.log(camion1.getModeloCamion());
// console.log(moto1.getAnioMoto());
//Agregar/Eliminar vehiculos
var auto2 = new autos_1.Autos("Mercedes", "W13", 2009, 7);
regAu1.agregarVehiculo(auto2);
// console.log(regAu1.getListaAutos());
regAu1.eliminarVehiculo("W13");
console.log(regAu1.getListaAutos());

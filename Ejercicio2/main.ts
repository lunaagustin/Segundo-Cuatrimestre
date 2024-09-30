import { Autos } from "./autos";
import { Camiones } from "./camiones";
import { Motos } from "./motos";
import { RegistroAutomotor } from "./registroAutomotor";

//crear vehiculos
const auto1= new Autos("a","b",1,2);
const camion1= new Camiones("c","d",3,4);
const moto1= new Motos("e","f",5,6);

//crear RA
const regAu1= new RegistroAutomotor("Olavarria");
regAu1.agregarVehiculo(auto1,camion1,moto1);

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
const auto2: Autos = new Autos("Mercedes","W13",2009,7);
regAu1.agregarVehiculo(auto2);
// console.log(regAu1.getListaAutos());
regAu1.eliminarVehiculo("W13");
console.log(regAu1.getListaAutos());

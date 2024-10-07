import { Auto } from "./autos";
import { Camion } from "./camiones";
import { Moto } from "./motos";
import { RegistroAutomotor } from "./registroAutomotor";

//crear autos
let auto1:Auto= new Auto("Ferrari","Leclerc",2024,16);
let auto2:Auto= new Auto("Williams","Colapinto",2024,43);

//crear camiones
let camion1: Camion= new Camion("Iveco","Baul",2023,1);
let camion2: Camion= new Camion("Ford","Beno",2023,2);

//crear motos
let moto1: Moto= new Moto("A","Agustin",2022,3);
let moto2: Moto= new Moto("B","Agustina",2022,4);

let regAu1:RegistroAutomotor= new RegistroAutomotor("Olavarria");
regAu1.agregarVehiculo(auto1,camion1,moto1);
// console.log(regAu1);

//metodos get
console.log(camion2.getMarcaVehiculo());
console.log(moto2.getAnioVehiculo());

//metodos set
regAu1.agregarVehiculo(auto2);
// console.log(regAu1.getListaAutos());

regAu1.eliminarVehiculo("Colapinto");
// console.log(regAu1.getListaAutos());

regAu1.modificarVehiculo(auto1,"Sauber");
// console.log(regAu1.getListaAutos());
import { Personaje } from "./personaje";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";
import { Mago } from "./mago";
import { ArqueroEvolucionado } from "./arqueroEvolucionado";

let arquero1: Arquero= new Arquero("Robin");
// console.log(arquero1);
let luchador1:Luchador= new Luchador("Vicente");
// console.log(luchador1);
let mago1:Mago= new Mago("Harry","Magia") //Magia es el nombre del libro de hechizos
// console.log(mago1);

// console.log(arquero1);
arquero1.equiparArco();
// console.log(arquero1);
arquero1.guardarArco();
// console.log(arquero1);

luchador1.setNivel(2);
// console.log(luchador1);

mago1.setLibroHechizos("Padre rico, padre pobre");
// console.log(mago1);

arquero1= new ArqueroEvolucionado("Harry Evolucionado");
// console.log(arquero1);
arquero1.equiparArco();
// console.log(arquero1);
arquero1.ataque();
arquero1.defensa();

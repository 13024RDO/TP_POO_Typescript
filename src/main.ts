import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";


const libro1 = new Libro(1, "El Quijote", "Cervantes", 863, "Novela");
const libro2 = new Libro(2, "Clean Code", "Robert C. Martin", 464);
const revista1 = new Revista(3, "National Geographic", "Varios", 202);


const usuario1 = new Usuario(1, "Leonardo");

usuario1.prestar(libro1);
usuario1.prestar(revista1);


usuario1.mostrarPrestados();


usuario1.mostrarUltimaPrestacion();


const materiales = [libro1, libro2, revista1];
console.log("\n--- Polimorfismo en acción ---");
materiales.forEach(m => m.mostrarInfo());

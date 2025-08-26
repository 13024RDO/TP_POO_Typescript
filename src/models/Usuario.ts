import { IUsuario } from "../interfaces/IUsuario.js";
import { Material } from "./Material.js";

export class Usuario implements IUsuario {
  id: number;
  nombre: string;
  private materialesPrestados: Material[] = [];
  ultimaPrestacion!: Material;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (material.disponibilidad) {
      material.disponibilidad = false;
      this.materialesPrestados.push(material);
      this.ultimaPrestacion = material;
      console.log(`${this.nombre} ha prestado: ${material.titulo}`);
    } else {
      console.log(`El material "${material.titulo}" no está disponible.`);
    }
  }

  mostrarPrestados(): void {
    console.log(`Materiales prestados por ${this.nombre}:`);
    this.materialesPrestados.forEach(m => m.mostrarInfo());
  }

  mostrarUltimaPrestacion(): void {
    console.log(`Último material prestado por ${this.nombre}:`);
    this.ultimaPrestacion.mostrarInfo();
  }
}

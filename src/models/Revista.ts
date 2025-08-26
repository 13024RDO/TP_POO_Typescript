import { Material } from "./Material.js";

export class Revista extends Material {
  edicion: number;

  constructor(id: number, titulo: string, autor: string, edicion: number) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  mostrarInfo(): void {
    console.log(`Revista - ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor},
    Edición: ${this.edicion}, Disponible: ${this.disponibilidad ? "Sí" : "No"}`);
  }
}

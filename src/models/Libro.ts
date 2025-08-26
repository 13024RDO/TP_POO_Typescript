import { Material } from "./Material.js";

export class Libro extends Material {
  paginas: number;
  genero?: string;

  constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): void {
    console.log(`Libro - ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor},
    Páginas: ${this.paginas}, Género: ${this.genero ?? "No especificado"},
    Disponible: ${this.disponibilidad ? "Sí" : "No"}`);
  }
}

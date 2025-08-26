import { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;


  protected disponible: boolean;

  constructor(id: number, titulo: string, autor: string) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  get disponibilidad(): boolean {
    return this.disponible;
  }

  set disponibilidad(valor: boolean) {
    this.disponible = valor;
  }


  abstract mostrarInfo(): void;
}

export interface bibiliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;
  mostrarInfo(): void;
}
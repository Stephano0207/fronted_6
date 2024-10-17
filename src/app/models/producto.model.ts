import { CategoriaModel } from "./categoria.model";

export interface ProductoModel {
  idproducto?: number;
  idcategoria: number;
  descripcion: string;
  precio:number;
  cantidad:number;
  categoria: CategoriaModel;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url="http://localhost:8000/api/producto";
  constructor(private http:HttpClient) { }

  ObtenerTodos(){
    return this.http.get<[ProductoModel]>(this.url);
    }
    Agregar(producto:ProductoModel){
    return this.http.post(this.url,producto);
    }

    Eliminar(id:number){
      return this.http.delete(this.url+'/'+id);
    }

    Actualizar(id:number,producto:ProductoModel){
      return this.http.put<ProductoModel>(`${this.url}/${id}`, producto);
    }

    Obtener(id:any){
      return this.http.get<ProductoModel>(this.url+'/'+id);
    }


}

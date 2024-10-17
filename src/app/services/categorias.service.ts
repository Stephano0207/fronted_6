import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private url='http://localhost:8000/api/categoria';

  constructor(private http:HttpClient) { }

  ObtenerTodos(){
    return this.http.get<[CategoriaModel]>(this.url);
  }
}

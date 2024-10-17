import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../models/producto.model';
import { ProductosService } from '../services/productos.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  productos:ProductoModel[] | undefined;
  constructor(private service:ProductosService,private modalCtrl:ModalController,private router:Router) { }

  ngOnInit() {
    this.service.ObtenerTodos().subscribe(
      response=>{
      this.productos=response;
      });
  }

  Agregar(){
    this.router.navigate(['/agregarproducto']);
  }

  borrar(id: any) {
    this.service.Eliminar(id).subscribe((res: any) => {
      console.log("BORRADO======", res);
      this.service.ObtenerTodos().subscribe(
        response=>{
        this.productos=response;
        });
    }, (error) => {
      console.log("ERROR======", error);
    }
    )
  }




}

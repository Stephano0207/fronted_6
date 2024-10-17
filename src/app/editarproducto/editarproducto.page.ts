import { ProductoModel } from './../models/producto.model';
import { Component, Input, OnInit } from '@angular/core';
import { CategoriaModel } from '../models/categoria.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.page.html',
  styleUrls: ['./editarproducto.page.scss'],
})
export class EditarproductoPage implements OnInit {

  @Input() producto: ProductoModel | undefined;
  id:any;
  categorias: CategoriaModel[] | undefined;

  datos = {
    descripcion: '',
    idcategoria: '',
    precio: '',
    cantidad: '',
    idproducto:'',
    estado:''
  };

  createFormGroup() {
    return new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
      idcategoria: new FormControl(null, [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
    });
  }

  validation_messages = {
    descripcion: [{ type: 'required', message: 'Escriba Nombre.' }],
    idcategoria: [{ type: 'required', message: 'Seleccione categoria' }],
    precio: [{ type: 'required', message: 'Escriba precio' }],
    cantidad: [{ type: 'required', message: 'Escriba cantidad' }],
  };

  registrarForm: FormGroup;

  constructor(
    private serviceproducto: ProductosService,
    private servicecategoria: CategoriasService,
    public formBuilder: FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.registrarForm = this.createFormGroup();
  }

  ngOnInit() {
    this.servicecategoria.ObtenerTodos().subscribe((response) => {
      this.categorias = response;
    });

    this.route.params.subscribe((param:any)=>{
      this.id=param.id;

    })
  }

  cerrarModal() {
    this.router.navigate(['/producto']);
    // this.modalCtrl.dismiss(null, 'cerrado');
  }

  onSubmit() {

      const producto = this.registrarForm?.value;
      this.serviceproducto.Actualizar(this.id,producto).subscribe((response) => {
        // this.modalCtrl.dismiss(response, 'creado');
        console.log(response);
      });
    }

}

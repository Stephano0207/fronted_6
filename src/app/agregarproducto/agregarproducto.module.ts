import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarproductoPageRoutingModule } from './agregarproducto-routing.module';

import { AgregarproductoPage } from './agregarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarproductoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarproductoPage]
})
export class AgregarproductoPageModule {}

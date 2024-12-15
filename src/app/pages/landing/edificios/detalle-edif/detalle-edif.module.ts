import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleEdifRoutingModule } from './detalle-edif-routing.module';
import { DetalleEdifComponent } from './detalle-edif.component';


@NgModule({
  declarations: [
    DetalleEdifComponent
  ],
  imports: [
    CommonModule,
    DetalleEdifRoutingModule
  ]
})
export class DetalleEdifModule { }

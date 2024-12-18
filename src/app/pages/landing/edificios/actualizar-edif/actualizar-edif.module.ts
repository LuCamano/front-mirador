import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualizarEdifRoutingModule } from './actualizar-edif-routing.module';
import { ActualizarEdifComponent } from './actualizar-edif.component';
import { ComponentsModule } from "../../../../components/components.module";


@NgModule({
  declarations: [
    ActualizarEdifComponent
  ],
  imports: [
    CommonModule,
    ActualizarEdifRoutingModule,
    ComponentsModule
]
})
export class ActualizarEdifModule { }

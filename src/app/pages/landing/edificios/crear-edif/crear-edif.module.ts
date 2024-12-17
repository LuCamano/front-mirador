import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEdifRoutingModule } from './crear-edif-routing.module';
import { CrearEdifComponent } from './crear-edif.component';
import { ComponentsModule } from '../../../../components/components.module';


@NgModule({
  declarations: [
    CrearEdifComponent
  ],
  imports: [
    CommonModule,
    CrearEdifRoutingModule,
    ComponentsModule
  ]
})
export class CrearEdifModule { }

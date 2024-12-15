import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './gastos.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    GastosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GastosRoutingModule
  ]
})
export class GastosModule { }

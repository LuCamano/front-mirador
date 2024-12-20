import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './gastos.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GastosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    GastosRoutingModule
  ]
})
export class GastosModule { }

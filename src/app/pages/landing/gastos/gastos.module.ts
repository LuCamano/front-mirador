import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './gastos.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    GastosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    GastosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class GastosModule { }

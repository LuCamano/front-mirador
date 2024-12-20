import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdificiosRoutingModule } from './edificios-routing.module';
import { EdificiosComponent } from './edificios.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    EdificiosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    EdificiosRoutingModule,
    MatDialogModule
  ]
})
export class EdificiosModule { }

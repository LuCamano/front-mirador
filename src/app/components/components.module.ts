import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdificioFormComponent } from './edificio-form/edificio-form.component';
import { GastoFormComponent } from './gasto-form/gasto-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    EdificioFormComponent,
    GastoFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    EdificioFormComponent,
    GastoFormComponent
  ]
})
export class ComponentsModule { }

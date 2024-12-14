import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdificiosRoutingModule } from './edificios-routing.module';
import { EdificiosComponent } from './edificios.component';


@NgModule({
  declarations: [
    EdificiosComponent
  ],
  imports: [
    CommonModule,
    EdificiosRoutingModule
  ]
})
export class EdificiosModule { }

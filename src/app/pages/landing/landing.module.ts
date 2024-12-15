import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ComponentsModule } from '../../components/components.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    LandingRoutingModule,
    ComponentsModule
  ]
})
export class LandingModule { }

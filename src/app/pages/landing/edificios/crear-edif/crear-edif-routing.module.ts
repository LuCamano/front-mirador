import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEdifComponent } from './crear-edif.component';

const routes: Routes = [
  {
    path: '',
    component: CrearEdifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearEdifRoutingModule { }

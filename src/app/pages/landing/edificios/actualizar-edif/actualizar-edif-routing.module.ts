import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEdifComponent } from './actualizar-edif.component';

const routes: Routes = [
  {
    path: '',
    component: ActualizarEdifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualizarEdifRoutingModule { }

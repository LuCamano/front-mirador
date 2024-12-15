import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEdifComponent } from './detalle-edif.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleEdifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleEdifRoutingModule { }

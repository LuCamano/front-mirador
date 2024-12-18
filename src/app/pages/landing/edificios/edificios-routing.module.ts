import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdificiosComponent } from './edificios.component';

const routes: Routes = [
  {
    path: '',
    component: EdificiosComponent
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle-edif/detalle-edif.module').then(m => m.DetalleEdifModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear-edif/crear-edif.module').then(m => m.CrearEdifModule)
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./actualizar-edif/actualizar-edif.module').then(m => m.ActualizarEdifModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdificiosRoutingModule { }

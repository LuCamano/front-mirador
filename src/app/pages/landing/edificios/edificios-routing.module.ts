import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdificiosComponent } from './edificios.component';

const routes: Routes = [
  {
    path: '',
    component: EdificiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdificiosRoutingModule { }

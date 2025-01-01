import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Gasto, Departamento } from '../../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { GastoFormComponent } from '../../../components/gasto-form/gasto-form.component';

@Component({
  selector: 'app-gastos',
  standalone: false,
  
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.scss'
})
export class GastosComponent implements OnInit {
  // Inyectar servicios
  private apiSvc = inject(ApiService);
  private dialog = inject(MatDialog);

  gastos: Gasto[] = [];

  departamentos: Departamento[] = [];

  ngOnInit(): void { 
    this.getDepartamentos();
    this.getGastos();
  }

  // Método para obtener los gastos
  async getGastos() {
    this.gastos = await this.apiSvc.obtenerGastos();
  }

  async getDepartamentos() {
    this.departamentos = await this.apiSvc.obtenerDepartamentos();
  }

  // Crear un gasto
  formularioCrear() {
    this.dialog.open(GastoFormComponent);
  }

  // Actualizar un gasto
  formularioActualizar(idGasto: number) {
    this.dialog.open(GastoFormComponent, { data: { idGasto } });
  }

  getNroDepa(idDepa: number) {
    return this.departamentos.find(depa => depa.idDepartamento === idDepa)?.numero;
  }
}

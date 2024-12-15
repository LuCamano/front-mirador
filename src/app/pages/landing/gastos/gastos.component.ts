import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Gasto } from '../../../models/models';

@Component({
  selector: 'app-gastos',
  standalone: false,
  
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.scss'
})
export class GastosComponent implements OnInit {
  // Inyectar servicios
  private apiSvc = inject(ApiService);

  gastos: Gasto[] = [];

  ngOnInit(): void { 
    this.getGastos();
  }

  // Método para obtener los gastos
  async getGastos() {
    this.gastos = await this.apiSvc.obtenerGastos();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Edificio } from '../../../models/models';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-edificios',
  standalone: false,
  
  templateUrl: './edificios.component.html',
  styleUrl: './edificios.component.scss'
})
export class EdificiosComponent implements OnInit {
  // Inyectar el servicio de la api
  private apiSvc = inject(ApiService);

  edificios: Edificio[] = [];

  ngOnInit(): void {
    this.obtenerEdificios();
  }

  async obtenerEdificios() {
    this.edificios = await this.apiSvc.obtenerEdificios();
  }
}

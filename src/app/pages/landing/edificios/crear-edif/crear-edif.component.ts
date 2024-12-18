import { Component, inject } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Edificio } from '../../../../models/models';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-crear-edif',
  standalone: false,
  templateUrl: './crear-edif.component.html',
  styleUrl: './crear-edif.component.scss'
})
export class CrearEdifComponent {
  // Inyectar dependencias
  private apiSvc = inject(ApiService);
  private utils = inject(UtilsService);

  crearEdificio = async (edificio: Edificio) => {
    try {
      await this.apiSvc.crearEdificio(edificio);
      this.utils.navigateTo(['/edificios']);
    } catch (error) {
      console.error(error);
    }
  }
}

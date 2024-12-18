import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Edificio } from '../../../../models/models';
import { ApiService } from '../../../../services/api.service';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-actualizar-edif',
  standalone: false,
  
  templateUrl: './actualizar-edif.component.html',
  styleUrl: './actualizar-edif.component.scss'
})
export class ActualizarEdifComponent implements OnInit {
  // Inyectar dependencias
  private route = inject(ActivatedRoute);
  private api = inject(ApiService);
  private utils = inject(UtilsService);

  idEdificio!: number;

  ngOnInit(): void {
    this.idEdificio = Number(this.route.snapshot.paramMap.get('id'));
  }

  // Actualizar edificio
  actualizarEdificio = async (edificio: Edificio) => {
    try {
      await this.api.actualizarEdificio(edificio);
      this.utils.navigateTo(['/edificios']);
    } catch (error) {
      console.error(error);
    }
  }
}

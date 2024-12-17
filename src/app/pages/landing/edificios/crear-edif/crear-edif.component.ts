import { Component, inject } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-edif',
  standalone: false,
  templateUrl: './crear-edif.component.html',
  styleUrl: './crear-edif.component.scss'
})
export class CrearEdifComponent {
  // Inyectar dependencias
  private apiSvc = inject(ApiService);

}

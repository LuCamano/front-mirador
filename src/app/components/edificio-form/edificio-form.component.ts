import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Edificio } from '../../models/models';
import { ApiService } from '../../services/api.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-edificio-form',
  standalone: false,
  
  templateUrl: './edificio-form.component.html',
  styleUrl: './edificio-form.component.scss'
})
export class EdificioFormComponent implements OnInit {
  // Inyectar dependencias
  private api = inject(ApiService);
  private utils = inject(UtilsService);

  // Callback para cuando se hace el submit
  @Input() submitFunc!: (edif: Edificio) => void;

  @Input() idEdificio!: number;

  waiting = this.idEdificio ? true : false;

  // Formulario
  edificioForm = new FormGroup({
    direccion: new FormControl('', [Validators.required, Validators.maxLength(35)]),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    numPisos: new FormControl<number | null>(null, [Validators.required, Validators.min(1), Validators.max(30), Validators.pattern('^[0-9]*$')]),
  });

  ngOnInit(): void {
    if (this.idEdificio) {
      this.api.obtenerEdificio(this.idEdificio).then(edificio => {
        this.edificioForm.setValue({
          direccion: edificio.direccion,
          nombre: edificio.nombre,
          numPisos: edificio.numPisos,
        });
        this.waiting = false;
      }).catch(error => {
        alert('Error al obtener el edificio');
        this.utils.navigateTo(['/edificios']);
      });
    }
  }

  submit() {
    if (this.edificioForm.valid) {
      const edificio = this.edificioForm.value as Edificio;
      if (this.idEdificio) edificio.idEdificio = this.idEdificio;
      if (this.waiting) return;
      this.submitFunc(edificio);
    }
  }
}

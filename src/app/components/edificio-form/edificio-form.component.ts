import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Edificio } from '../../models/models';

@Component({
  selector: 'app-edificio-form',
  standalone: false,
  
  templateUrl: './edificio-form.component.html',
  styleUrl: './edificio-form.component.scss'
})
export class EdificioFormComponent {

  // Formulario
  edificioForm = new FormGroup({
    direccion: new FormControl('', [Validators.required, Validators.maxLength(35)]),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    numPisos: new FormControl('', [Validators.required, Validators.min(1), Validators.max(30), Validators.pattern('^[0-9]*$')]),
  });

  submit() {
    console.log(this.edificioForm.value);
  }
}

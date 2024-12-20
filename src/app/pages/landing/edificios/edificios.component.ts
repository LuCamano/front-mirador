import { Component, inject, OnInit } from '@angular/core';
import { Edificio } from '../../../models/models';
import { ApiService } from '../../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EdificioFormComponent } from '../../../components/edificio-form/edificio-form.component';

@Component({
  selector: 'app-edificios',
  standalone: false,
  
  templateUrl: './edificios.component.html',
  styleUrl: './edificios.component.scss'
})
export class EdificiosComponent implements OnInit {
  // Inyectar el servicio de la api
  private apiSvc = inject(ApiService);
  private dialog = inject(MatDialog);

  edificios: Edificio[] = [];

  ngOnInit(): void {
    this.obtenerEdificios();
  }

  async obtenerEdificios() {
    this.edificios = await this.apiSvc.obtenerEdificios();
  }

  formularioCrear() {
    const formRef = this.dialog.open(EdificioFormComponent);
    formRef.afterClosed().subscribe(() => this.obtenerEdificios());
  }

  formularioEditar(idEdificio: number) {
    const formRef = this.dialog.open(EdificioFormComponent, {
      data: { idEdificio }
    });
    formRef.afterClosed().subscribe(() => this.obtenerEdificios());
  }
}

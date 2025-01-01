import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento, Edificio, Gasto } from '../../models/models';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-gasto-form',
  standalone: false,
  
  templateUrl: './gasto-form.component.html',
  styleUrl: './gasto-form.component.scss'
})
export class GastoFormComponent implements OnInit {
  // Inyectar dependencias
  private api = inject(ApiService);
  data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<GastoFormComponent>);

  // Formulario
  gastoForm = new FormGroup({
    descripcion: new FormControl('', [Validators.required]),
    estado: new FormControl('pendiente'),
    fecha: new FormControl<Date>(new Date(), [Validators.required]),
    edificio: new FormControl<Edificio | null>(null, [Validators.required]),
    idDepartamento: new FormControl<number | null>(null, [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    valor: new FormControl<number | null>(null, [Validators.required, Validators.min(1000)])
  });

  // Variables
  idGasto!: number;
  idEdificio!: number;

  departamentos!: Departamento[];
  depasFiltrados!: Departamento[];
  edificios!: Edificio[];

  btnDisabled = false;

  async ngOnInit() {
    this.getDepartamentos();
    if (this.data) {
      this.idGasto = this.data.idGasto;
      this.idEdificio = this.data.idEdificio;
    }
    if (this.idGasto) {
      this.gastoForm.disable();
      this.btnDisabled = true;
      await this.getEdificios();
      this.api.obtenerGasto(this.idGasto).then(async gasto => {
        console.log(gasto.fecha);
        const depa = await this.api.obtenerDepartamento(gasto.idDepartamento);
        const edif = this.edificios.find(edificio => edificio.idEdificio === depa.idEdificio);
        this.filtrarDepas(edif!.idEdificio!);
        this.gastoForm.setValue({
          descripcion: gasto.descripcion,
          estado: gasto.estado,
          fecha: gasto.fecha,
          edificio: edif!,
          idDepartamento: depa.idDepartamento!,
          tipo: gasto.tipo,
          valor: gasto.valor
        });
        this.gastoForm.enable();
        this.btnDisabled = false;
      });
    } else {
      this.getEdificios();
    }
  }

  async submit() {
    if (this.gastoForm.valid) {
      try {
        let values = {...this.gastoForm.value};
        delete values.edificio;
        const gasto = values as Gasto;
        if (this.idGasto) gasto.idGasto = this.idGasto;
        if (this.btnDisabled) return;
        if (this.idGasto) {
          await this.api.actualizarGasto(gasto);
        } else {
          await this.api.crearGasto(gasto);
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.dialogRef.close();
      }
    }
  }

  async getDepartamentos() {
    this.departamentos = await this.api.obtenerDepartamentos();
  }

  async getEdificios() {
    this.edificios = await this.api.obtenerEdificios();
  }

  filtrarDepas(idE: number) {
    this.depasFiltrados = this.departamentos.filter(depa => depa.idEdificio === idE);
    console.log(this.depasFiltrados);
  }
}

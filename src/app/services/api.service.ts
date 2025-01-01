import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Departamento, Edificio, Gasto, Persona } from '../models/models';
import { lastValueFrom } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Inyectar dependencias
  private http = inject(HttpClient);

  private url = '/api';

  // Método para obtener datos de edificios
  obtenerEdificios() {
    return lastValueFrom(this.http.get<Edificio[]>(this.url + '/edificio/all'));
  }

  // Método para obtener un edificio
  obtenerEdificio(idEdificio: number) {
    return lastValueFrom(this.http.get<Edificio>(this.url + `/edificio/${idEdificio}`));
  }

  // Crear un edificio
  crearEdificio(edificio: Edificio) {
    if (edificio.idEdificio) throw new Error('No se puede crear un edificio con un ID');
    return lastValueFrom(this.http.post<Edificio>(this.url + '/edificio/create', edificio));
  }

  // Actualizar un edificio
  actualizarEdificio(edificio: Edificio) {
    if (!edificio.idEdificio) throw new Error('No se puede actualizar un edificio sin un ID');
    const newEdificio: Edificio = { ...edificio };
    delete newEdificio.idEdificio;
    return lastValueFrom(this.http.put<Edificio>(this.url + `/edificio/update/${edificio.idEdificio}`, newEdificio));
  }

  // Método para obtener gastos
  async obtenerGastos() {
    const gastos = await lastValueFrom(this.http.get<Gasto[]>(this.url + '/gasto/all'));
    gastos.map( gasto => {
      gasto.fecha = new Date(gasto.fecha);
    });
    return gastos;
  }

  // Método para obtener un gasto
  async obtenerGasto(idGasto: number) {
    const gasto = await lastValueFrom(this.http.get<Gasto>(this.url + `/gasto/${idGasto}`));
    gasto.fecha = new Date(gasto.fecha);
    return gasto;
  }

  // Método para crear un gasto
  async crearGasto(gasto: Gasto) {
    if (gasto.idGasto) throw new Error('No se puede crear un gasto con un ID');
    let fechaFormateada = formatDate(gasto.fecha, 'dd-MM-yyyy', 'en-US');
    const newGasto = { ...gasto, fecha: fechaFormateada };
    const resp = await lastValueFrom(this.http.post<Gasto>(this.url + '/gasto/create', newGasto));
    resp.fecha = new Date(resp.fecha);
    return resp;
  }

  // Método para actualizar un gasto
  async actualizarGasto(gasto: Gasto) {
    if (!gasto.idGasto) throw new Error('No se puede actualizar un gasto sin un ID');
    const newGasto: Gasto = { ...gasto };
    delete newGasto.idGasto;
    const resp = await lastValueFrom(this.http.put<Gasto>(this.url + `/gasto/update/${gasto.idGasto}`, newGasto));
    resp.fecha = new Date(resp.fecha);
    return resp;
  }

  // Método para obtener a los inquilinos
  obtenerInquilinos() {
    return lastValueFrom(this.http.get<Persona[]>(this.url + '/persona/all'));
  }

  // Método para obtener los departamentos
  obtenerDepartamentos() {
    return lastValueFrom(this.http.get<Departamento[]>(this.url + '/departamento/all'));
  }

  // Método para obtener un departamento
  obtenerDepartamento(idDepartamento: number) {
    return lastValueFrom(this.http.get<Departamento>(this.url + `/departamento/${idDepartamento}`));
  }
}

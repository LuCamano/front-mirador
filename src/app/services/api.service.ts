import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Edificio, Gasto } from '../models/models';
import { lastValueFrom } from 'rxjs';

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
  obtenerGastos() {
    return lastValueFrom(this.http.get<Gasto[]>(this.url + '/gasto/all'));
  }

  // Método para obtener a los inquilinos
  obtenerInquilinos() {
    return lastValueFrom(this.http.get(this.url + '/persona/all'));
  }
}

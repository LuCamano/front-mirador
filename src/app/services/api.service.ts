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

  // Método para obtener gastos
  obtenerGastos() {
    return lastValueFrom(this.http.get<Gasto[]>(this.url + '/gasto/all'));
  }

  // Método para obtener a los inquilinos
  obtenerInquilinos() {
    return lastValueFrom(this.http.get(this.url + '/persona/all'));
  }
}

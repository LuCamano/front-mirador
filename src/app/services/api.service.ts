import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Edificio } from '../models/models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Inyectar dependencias
  private http = inject(HttpClient);

  private url = '/api';

  // Método para obtener datos
  obtenerEdificios() {
    return lastValueFrom(this.http.get<Edificio[]>(this.url + '/edificio/all'));
  }
}

import { inject, Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  // Inyectar dependencias
  private router = inject(Router);

  navigateTo(route: string, extras?: NavigationExtras) {
    this.router.navigate([route], extras);
  }

  getQueryParams() {
    return this.router.parseUrl(this.router.url).queryParams;
  }
}

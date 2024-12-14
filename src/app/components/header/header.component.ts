import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  edificios = [
    { nombre: 'Edificio A', direccion: 'Calle 123' },
    { nombre: 'Edificio B', direccion: 'Calle 1234' },
  ]
}

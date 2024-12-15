import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements OnInit{
  // Inyectar las dependencias
  private router = inject(Router);

  navbar = true;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.navbar = !this.router.url.includes('/login');
    });
  }
}

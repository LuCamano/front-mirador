import { Component, inject, OnInit } from '@angular/core';
import { Edificio } from '../../models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  ngOnInit() { }
}

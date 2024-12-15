import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-edif',
  standalone: false,
  
  templateUrl: './detalle-edif.component.html',
  styleUrl: './detalle-edif.component.scss'
})
export class DetalleEdifComponent implements OnInit {

  private utils = inject(UtilsService);
  private route = inject(ActivatedRoute);

  id!: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
}

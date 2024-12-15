import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEdifComponent } from './detalle-edif.component';

describe('DetalleEdifComponent', () => {
  let component: DetalleEdifComponent;
  let fixture: ComponentFixture<DetalleEdifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleEdifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEdifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

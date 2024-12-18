import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEdifComponent } from './actualizar-edif.component';

describe('ActualizarEdifComponent', () => {
  let component: ActualizarEdifComponent;
  let fixture: ComponentFixture<ActualizarEdifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarEdifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEdifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

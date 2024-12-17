import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEdifComponent } from './crear-edif.component';

describe('CrearEdifComponent', () => {
  let component: CrearEdifComponent;
  let fixture: ComponentFixture<CrearEdifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearEdifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEdifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

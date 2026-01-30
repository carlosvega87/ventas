import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movimientoinventario } from './movimientoinventario';

describe('Movimientoinventario', () => {
  let component: Movimientoinventario;
  let fixture: ComponentFixture<Movimientoinventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Movimientoinventario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movimientoinventario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Movimientoinventario } from './movimientoinventario';

describe('Movimientoinventario', () => {
  let service: Movimientoinventario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Movimientoinventario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

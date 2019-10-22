import { TestBed } from '@angular/core/testing';

import { ServiceMantenimientoService } from './service-mantenimiento.service';

describe('ServiceMantenimientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceMantenimientoService = TestBed.get(ServiceMantenimientoService);
    expect(service).toBeTruthy();
  });
});

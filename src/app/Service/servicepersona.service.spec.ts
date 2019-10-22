import { TestBed } from '@angular/core/testing';

import { ServicepersonaService } from './servicepersona.service';

describe('ServicepersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicepersonaService = TestBed.get(ServicepersonaService);
    expect(service).toBeTruthy();
  });
});

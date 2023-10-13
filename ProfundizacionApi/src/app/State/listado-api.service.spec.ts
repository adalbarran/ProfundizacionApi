import { TestBed } from '@angular/core/testing';

import { ListadoApiService } from './listado-api.service';

describe('ListadoApiService', () => {
  let service: ListadoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

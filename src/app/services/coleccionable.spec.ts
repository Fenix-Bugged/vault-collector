import { TestBed } from '@angular/core/testing';

import { Coleccionable } from './coleccionable';

describe('Coleccionable', () => {
  let service: Coleccionable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Coleccionable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

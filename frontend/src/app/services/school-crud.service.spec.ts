import { TestBed } from '@angular/core/testing';

import { SchoolCrudService } from './school-crud.service';

describe('SchoolCrudService', () => {
  let service: SchoolCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

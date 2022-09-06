import { TestBed } from '@angular/core/testing';

import { CreateCatchService } from './create-edit-delete-catch.service';

describe('CreateCatchService', () => {
  let service: CreateCatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

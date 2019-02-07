import { TestBed, inject } from '@angular/core/testing';

import { ShowDeleteService } from './show-delete.service';

describe('ShowDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowDeleteService]
    });
  });

  it('should be created', inject([ShowDeleteService], (service: ShowDeleteService) => {
    expect(service).toBeTruthy();
  }));
});

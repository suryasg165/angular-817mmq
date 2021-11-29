import { TestBed } from '@angular/core/testing';

import { ItemsUtilityService } from './items-utility.service';

describe('ItemsUtilityService', () => {
  let service: ItemsUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

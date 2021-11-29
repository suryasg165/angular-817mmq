import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ItemTypeEffects } from './item-type.effects';

describe('ItemTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: ItemTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ItemTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ItemDetailsEffects } from './item-details.effects';

describe('ItemDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: ItemDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ItemDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

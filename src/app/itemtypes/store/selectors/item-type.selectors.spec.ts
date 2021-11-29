import * as fromItemType from '../reducers/item-type.reducer';
import { getItemTypeState } from './item-type.selectors';

describe('ItemType Selectors', () => {
  it('should select the feature state', () => {
    const result = getItemTypeState({
    });

    expect(result).toEqual({});
  });
});

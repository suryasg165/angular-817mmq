import * as fromItemDetails from '../reducers/item-details.reducer';
import { getItemDetailsState } from './item-details.selectors';

describe('ItemDetails Selectors', () => {
  it('should select the feature state', () => {
    const result = getItemDetailsState({
      
    });

    expect(result).toEqual({});
  });
});

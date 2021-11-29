import * as ItemDetailsActions from './item-details.actions';

describe('ItemDetails', () => {
  it('should create an instance', () => {
    expect(new ItemDetailsActions.LoadItemDetails({})).toBeTruthy();
  });
});

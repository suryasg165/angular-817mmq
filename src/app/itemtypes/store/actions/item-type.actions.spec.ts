import * as ItemTypeActions from './item-type.actions';

describe('ItemType', () => {
  it('should create an instance', () => {
    expect(new ItemTypeActions.LoadItemTypes({})).toBeTruthy();
  });
});

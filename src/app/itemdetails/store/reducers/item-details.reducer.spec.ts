import { itemDetailsReducer,InitialItemTypeState } from './item-details.reducer';

describe('ItemDetails Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = itemDetailsReducer(InitialItemTypeState, action);

      expect(result).toBe(InitialItemTypeState);
    });
  });
});

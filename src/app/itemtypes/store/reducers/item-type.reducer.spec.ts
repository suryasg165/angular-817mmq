import { InitialItemTypeState, itemTypeReducer } from './item-type.reducer';

describe('ItemType Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = itemTypeReducer(InitialItemTypeState, action);

      expect(result).toBe(InitialItemTypeState);
    });
  });
});

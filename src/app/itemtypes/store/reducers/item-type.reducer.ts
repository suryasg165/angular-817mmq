import { DefaultItemState } from 'src/app/constant/items-constant';
import { ItemTypeActions, ItemTypeActionTypes } from '../actions/item-type.actions';

export const InitialItemTypeState = {
  item: [DefaultItemState]
};
export function itemTypeReducer(
  state: any = InitialItemTypeState,
  action: ItemTypeActions
): any {

  switch (action.type) {
    case ItemTypeActionTypes.LoadTopStories:
      return {
        ...state
      };
    case ItemTypeActionTypes.LoadTopStoriesError: {
      return {
        ...state
      };
    }
    case ItemTypeActionTypes.LoadStoriesByIdSuccess: {
      const payload = action.payload;
      return { 
        ...state,
        item:[...state.item, payload]
      };
    }
    case ItemTypeActionTypes.DeleteStoriesDetails:{
      return {
        ...state,
        item:[]
      };
    }

    default: {
      return state;
    }
  }
}

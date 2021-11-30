import { Action } from '@ngrx/store';
import { DefaultItemState } from '../../../constant/items-constant';
import {
  ItemDetailsActions,
  ItemDetailsActionTypes,
} from '../actions/item-details.actions';

export const InitialItemTypeState = {
  item: [DefaultItemState],
};
export function itemDetailsReducer(
  state: any = InitialItemTypeState,
  action: ItemDetailsActions
): any {
  switch (action.type) {
    case ItemDetailsActionTypes.LoadItemDetails: {
      return {
        ...state,
      };
    }
    case ItemDetailsActionTypes.LoadItemDetailsByIdSuccess: {
      const payload = action.payload;
      return {
        ...state,
        item: [...state.item, payload],
      };
    }
    case ItemDetailsActionTypes.LoadItemDetailsError: {
      return {
        ...state,
      };
    }
    case ItemDetailsActionTypes.LoadItemDetailsSuccess: {
      return {
        ...state,
      };
    }
    case ItemDetailsActionTypes.DeleteItemDetails: {
      return {
        ...state,
        item: [],
      };
    }

    default: {
      return state;
    }
  }
}

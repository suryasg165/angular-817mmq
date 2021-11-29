import {ActionReducerMap} from '@ngrx/store';
import { itemTypeReducer } from './item-type.reducer';
  export interface State {
  
  }
  export const itemTypeFeatureKey = 'itemType';
  export const ItemTypeReducers: ActionReducerMap<State> = {
    itemTypeReducer: itemTypeReducer,
  };
  
  
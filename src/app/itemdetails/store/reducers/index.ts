import {ActionReducerMap} from '@ngrx/store';
import { itemDetailsReducer } from './item-details.reducer';
  export interface State {
  
  }
  export const itemTypeFeatureKey = 'itemDetails';
  export const ItemDetailsReducers: ActionReducerMap<State> = {
    itemDetailsReducer: itemDetailsReducer
  };
  
  
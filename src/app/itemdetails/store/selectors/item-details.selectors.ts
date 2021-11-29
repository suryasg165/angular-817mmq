// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as fromItemDetails from '../reducers/item-details.reducer';

// export const selectItemDetailsState = createFeatureSelector<fromItemDetails.State>(
//   fromItemDetails.itemDetailsFeatureKey
// );

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getItemDetailsState = createFeatureSelector<any>('itemDetails');

export const getItemDetailsReducerState = createSelector(getItemDetailsState, (state) => state.itemDetailsReducer);

export const getItemDetailsDataState = createSelector(
  getItemDetailsReducerState,
  (state: any) => state.item
);
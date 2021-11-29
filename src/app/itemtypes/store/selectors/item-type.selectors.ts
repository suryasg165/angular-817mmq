import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getItemTypeState = createFeatureSelector<any>('itemType');

export const getItemTypeReducerState = createSelector(getItemTypeState, (state) => state.itemTypeReducer);

export const getItemState = createSelector(
  getItemTypeReducerState,
  (state: any) => state.item
);
import { Action } from '@ngrx/store';

export enum ItemDetailsActionTypes {
  LoadItemDetails = '[GET ItemDetails] Load ItemDetails',
  LoadItemDetailsSuccess = '[GET ItemDetails] Load ItemDetails Success',
  LoadItemDetailsError = '[GET ItemDetails] Load ItemDetails Error',
  LoadItemDetailsByIdSuccess = '[GET ItemDetails] Load ItemDetails By Id Success',
  DeleteItemDetails = '[DELETE ItemDetails]  DELETE ItemDetails',
}

export class LoadItemDetails implements Action {
  readonly type = ItemDetailsActionTypes.LoadItemDetails;
  constructor(public payload: any) { }
}
export class LoadItemDetailsSuccess implements Action {
  readonly type = ItemDetailsActionTypes.LoadItemDetailsSuccess;
  constructor(public payload: any) { }
}
export class LoadItemDetailsError implements Action {
  readonly type = ItemDetailsActionTypes.LoadItemDetailsError;
  constructor(public payload: any) { }
}
export class LoadItemDetailsByIdSuccess implements Action {
  readonly type = ItemDetailsActionTypes.LoadItemDetailsByIdSuccess;
  constructor(public payload: any) { }
}
export class DeleteItemDetails implements Action {
  readonly type = ItemDetailsActionTypes.DeleteItemDetails;
  constructor() { }
}
export type ItemDetailsActions = LoadItemDetails
  | LoadItemDetailsSuccess
  | LoadItemDetailsError
  | LoadItemDetailsByIdSuccess
  | DeleteItemDetails;


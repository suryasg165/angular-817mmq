import { Action } from '@ngrx/store';

export enum ItemTypeActionTypes {
  LoadTopStories = '[ItemType] LoadTopStories Item',
  LoadTopStoriesSuccess = '[ItemType] LoadTopStories Item Success',
  LoadTopStoriesError = '[ItemType] LoadTopStories Item Error',
  LoadStoriesByIdSuccess = '[ItemType] LoadStoriesById Item Success',
  DeleteStoriesDetails = '[DELETE ItemType] DELETE stories details',
}

export class LoadTopStories implements Action {
  readonly type = ItemTypeActionTypes.LoadTopStories;
  constructor() { }
}
export class LoadTopStoriesSuccess implements Action {
  readonly type = ItemTypeActionTypes.LoadTopStoriesSuccess;
  constructor(public payload: any) { }
}
export class LoadTopStoriesError implements Action {
  readonly type = ItemTypeActionTypes.LoadTopStoriesError;
  constructor(public payload: any) { }
}
export class LoadStoriesByIdSuccess implements Action {
  readonly type = ItemTypeActionTypes.LoadStoriesByIdSuccess;
  constructor(public payload: any) { }
}
export class DeleteStoriesDetails implements Action {
  readonly type = ItemTypeActionTypes.DeleteStoriesDetails;
  constructor() { }
}
export type ItemTypeActions = LoadTopStories
  | LoadTopStoriesSuccess
  | LoadTopStoriesError
  | LoadStoriesByIdSuccess
  | DeleteStoriesDetails;


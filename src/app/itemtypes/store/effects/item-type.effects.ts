import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ItemsDataService } from '../../../services/items-data.service';
import {
  ItemTypeActionTypes,
  LoadStoriesByIdSuccess,
  LoadTopStoriesError,
  LoadTopStoriesSuccess,
} from '../actions/item-type.actions';

@Injectable()
export class ItemTypeEffects {
  getStoriesDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemTypeActionTypes.LoadTopStories),
      switchMap((action: any) =>
        this.itemsDataService.getTopStoriesData().pipe(
          map((topStoryIds: any) => {
            return new LoadTopStoriesSuccess(topStoryIds);
          }),
          catchError((errorMessage) =>
            of(new LoadTopStoriesError({ error: errorMessage }))
          )
        )
      )
    )
  );

  getItemDetailsById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemTypeActionTypes.LoadTopStoriesSuccess),
      mergeMap((action: any) => action.payload),
      mergeMap((action: any) => this.itemsDataService.getStoryData(action)),
      map((storiesItem) => new LoadStoriesByIdSuccess(storiesItem)),
      catchError((errorMessage) =>
        of(new LoadTopStoriesError({ error: errorMessage }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private itemsDataService: ItemsDataService
  ) {}
}

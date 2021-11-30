import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ItemsDataService } from '../../../services/items-data.service';
import {
  ItemDetailsActions,
  ItemDetailsActionTypes,
  LoadItemDetails,
  LoadItemDetailsByIdSuccess,
  LoadItemDetailsError,
  LoadItemDetailsSuccess,
} from '../actions/item-details.actions';
import { ItemsUtilityService } from '../../../services/items-utility.service';

@Injectable()
export class ItemDetailsEffects {
  getItemDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemDetailsActionTypes.LoadItemDetails),
      switchMap((action: any) =>
        this.itemsDataService.getStoryData(action.payload).pipe(
          map((res: any) => {
            return new LoadItemDetailsSuccess(res.kids);
          }),
          catchError((errorMessage) =>
            of(new LoadItemDetailsError({ error: errorMessage }))
          )
        )
      )
    )
  );

  getItemDetailsById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemDetailsActionTypes.LoadItemDetailsSuccess),
      mergeMap((action: any) => action.payload),
      mergeMap((action: any) => this.itemsDataService.getStoryData(action)),
      filter((itemData) =>
        this.itemsUtilityService.filterItemDataBasedOnTimeIntervalConfiguration(
          itemData
        )
      ),
      map(
        (filteredItemData) => new LoadItemDetailsByIdSuccess(filteredItemData)
      ),
      catchError((errorMessage) =>
        of(new LoadItemDetailsError({ error: errorMessage }))
      )
    )
  );

  constructor(
    private actions$: Actions<ItemDetailsActions>,
    private store: Store<any>,
    private itemsDataService: ItemsDataService,
    private itemsUtilityService: ItemsUtilityService
  ) {}
}

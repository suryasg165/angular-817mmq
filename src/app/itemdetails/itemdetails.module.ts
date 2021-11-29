import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromItemDetails from './store/reducers/item-details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemDetailsEffects } from './store/effects/item-details.effects';
import {ItemDetailsReducers, itemTypeFeatureKey} from './store/reducers/index';
import { ItemDetailsContainerComponent } from './components/item-details-container/item-details-container.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component:ItemDetailsContainerComponent
  }
];

@NgModule({
  declarations: [
    ItemDetailsContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(itemTypeFeatureKey, ItemDetailsReducers),
    EffectsModule.forFeature([ItemDetailsEffects]),
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ItemdetailsModule { }

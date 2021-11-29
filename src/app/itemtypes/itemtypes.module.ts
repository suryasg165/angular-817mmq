import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromItemType from './store/reducers/index'
import { EffectsModule } from '@ngrx/effects';
import { ItemTypeEffects } from './store/effects/item-type.effects';
import { ItemTypeContainerComponent } from './components/item-type-container/item-type-container.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component:ItemTypeContainerComponent
  }
];

@NgModule({
  declarations: [
    ItemTypeContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromItemType.itemTypeFeatureKey, fromItemType.ItemTypeReducers),
    EffectsModule.forFeature([ItemTypeEffects]),
    [RouterModule.forChild(routes)],
    SharedModule
  ]
})
export class ItemtypesModule { }

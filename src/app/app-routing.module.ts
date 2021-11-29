import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'item-type', pathMatch: 'full'
  },
  {
    path: 'item-type',
    loadChildren: () => import('./itemtypes/itemtypes.module').then((module) => module.ItemtypesModule),
  },
  {
    path: 'item-details/:id',
    loadChildren: () => import('./itemdetails/itemdetails.module').then((module) => module.ItemdetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

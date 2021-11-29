import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemsComponent } from './card-items/card-items.component';


import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CardItemsComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    /** Material Modules */
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSelectModule
  ],
  exports: [CardItemsComponent,SelectComponent]
})
export class SharedModule { }

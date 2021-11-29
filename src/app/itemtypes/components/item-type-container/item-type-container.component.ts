import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeleteStoriesDetails, LoadTopStories } from '../../store/actions/item-type.actions';
import { getItemState } from '../../store/selectors/item-type.selectors';
import { listOfItemTypes } from 'src/app/constant/items-constant';
import { ItemTypeState } from 'src/app/models/items-models';

@Component({
  selector: 'app-item-type-container',
  templateUrl: './item-type-container.component.html',
  styleUrls: ['./item-type-container.component.scss']
})
export class ItemTypeContainerComponent implements OnInit {
  listOfItemTypes: ItemTypeState[] =listOfItemTypes;
  itemType$: Observable<ItemTypeState[]> | undefined;
  isItemSelected: boolean = false;
  constructor(private store: Store<any>,
    private router: Router) { }

  ngOnInit(): void {
    this.itemType$ = this.store.select(getItemState);
    this.store.dispatch(new DeleteStoriesDetails());
    this.store.dispatch(new LoadTopStories());
  }
  
  onNavigatePath(selectedItem:any){
    this.router.navigate(['/item-details', selectedItem.id]);
  }

}

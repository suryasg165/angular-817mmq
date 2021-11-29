import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DeleteItemDetails, LoadItemDetails } from '../../store/actions/item-details.actions';
import { getItemDetailsDataState } from '../../store/selectors/item-details.selectors';

@Component({
  selector: 'app-item-details-container',
  templateUrl: './item-details-container.component.html',
  styleUrls: ['./item-details-container.component.scss']
})
export class ItemDetailsContainerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  paramId: any;
  itemDetailsData$: Observable<any[]> | undefined;
  filterItemList: any = [];
  constructor(private route: ActivatedRoute, private store: Store<any>,) { }

  ngOnInit(): void {
    
    this.subscriptions.push(this.route.params.subscribe(params => {
      this.paramId = params['id'];
    }));

    this.store.dispatch(new DeleteItemDetails());
    this.store.dispatch(new LoadItemDetails(this.paramId));
    this.itemDetailsData$ = this.store.select(getItemDetailsDataState);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

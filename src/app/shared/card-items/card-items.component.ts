import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss']
})
export class CardItemsComponent implements OnInit, OnDestroy {
  @Input() cardItems: any = [];
  @Output() navigatePath = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    if (!Array.isArray(this.cardItems)) {
      this.cardItems = [this.cardItems];
    }
  }
  onSelection(selectedItem: any) {
    this.navigatePath.emit(selectedItem);
  }
  ngOnDestroy(): void {
  }

}

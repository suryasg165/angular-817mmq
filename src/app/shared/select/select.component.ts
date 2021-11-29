import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
@Input() itemsList:any=[];
@Output() selectionChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSelectionChange(selectedItem:any){
    this.selectionChange.emit(selectedItem);

  }

}

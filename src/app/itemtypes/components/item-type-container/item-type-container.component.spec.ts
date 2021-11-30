import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemTypeContainerComponent } from './item-type-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SharedModule } from '../../../shared/shared.module';
import {
  DefaultItemState,
  listOfItemTypes,
} from '../../constant/items-constant';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getItemState } from '../../store/selectors/item-type.selectors';

describe('ItemTypeContainerComponent', () => {
  let component: ItemTypeContainerComponent;
  let fixture: ComponentFixture<ItemTypeContainerComponent>;
  const initialState = DefaultItemState;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
      declarations: [ItemTypeContainerComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: getItemState, value: [DefaultItemState] }],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });
  beforeEach(() => {
    component.listOfItemTypes = listOfItemTypes;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check ngOninit toBeUndefined', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});

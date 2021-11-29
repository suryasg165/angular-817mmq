import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardItemsComponent } from './card-items.component';

describe('CardItemsComponent', () => {
  let component: CardItemsComponent;
  let fixture: ComponentFixture<CardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create card components', () => {
    expect(component).toBeTruthy();
  });

  
});

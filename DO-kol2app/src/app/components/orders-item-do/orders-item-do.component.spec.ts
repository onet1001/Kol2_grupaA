import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDOComponent } from './orders-item-do.component';

describe('OrdersItemDOComponent', () => {
  let component: OrdersItemDOComponent;
  let fixture: ComponentFixture<OrdersItemDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

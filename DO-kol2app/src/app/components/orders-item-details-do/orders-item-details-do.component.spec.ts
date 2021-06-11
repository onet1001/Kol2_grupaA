import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDetailsDOComponent } from './orders-item-details-do.component';

describe('OrdersItemDetailsDOComponent', () => {
  let component: OrdersItemDetailsDOComponent;
  let fixture: ComponentFixture<OrdersItemDetailsDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemDetailsDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDetailsDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

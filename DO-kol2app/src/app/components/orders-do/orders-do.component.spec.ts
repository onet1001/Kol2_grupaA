import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDOComponent } from './orders-do.component';

describe('OrdersDOComponent', () => {
  let component: OrdersDOComponent;
  let fixture: ComponentFixture<OrdersDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseStatusComponent } from './purchase-status.component';

describe('PurchaseStatusComponent', () => {
  let component: PurchaseStatusComponent;
  let fixture: ComponentFixture<PurchaseStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseStatusComponent]
    });
    fixture = TestBed.createComponent(PurchaseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInformationsComponent } from './shipping-informations.component';

describe('ShippingInformationsComponent', () => {
  let component: ShippingInformationsComponent;
  let fixture: ComponentFixture<ShippingInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingInformationsComponent]
    });
    fixture = TestBed.createComponent(ShippingInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

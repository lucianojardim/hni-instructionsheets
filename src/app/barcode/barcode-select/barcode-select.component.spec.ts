import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BarcodeSelectComponent} from './barcode-select.component';

describe('BarcodeSelectComponent', () => {
  let component: BarcodeSelectComponent;
  let fixture: ComponentFixture<BarcodeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodeSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

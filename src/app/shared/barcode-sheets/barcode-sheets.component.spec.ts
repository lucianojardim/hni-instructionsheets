import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BarcodeSheetsComponent} from './barcode-sheets.component';

describe('BarcodeSheetsComponent', () => {
  let component: BarcodeSheetsComponent;
  let fixture: ComponentFixture<BarcodeSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodeSheetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

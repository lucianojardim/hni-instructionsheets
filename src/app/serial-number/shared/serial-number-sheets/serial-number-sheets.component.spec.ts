import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SerialNumberSheetsComponent} from './serial-number-sheets.component';

describe('SerialNumberSheetsComponent', () => {
  let component: SerialNumberSheetsComponent;
  let fixture: ComponentFixture<SerialNumberSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerialNumberSheetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumberSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

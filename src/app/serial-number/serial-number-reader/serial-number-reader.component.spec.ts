import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SerialNumberReaderComponent} from './serial-number-reader.component';

describe('SerialNumberReaderComponent', () => {
  let component: SerialNumberReaderComponent;
  let fixture: ComponentFixture<SerialNumberReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerialNumberReaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumberReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

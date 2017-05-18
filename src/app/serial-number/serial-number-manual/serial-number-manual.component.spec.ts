import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SerialNumberManualComponent} from './serial-number-manual.component';

describe('SerialNumberManualComponent', () => {
  let component: SerialNumberManualComponent;
  let fixture: ComponentFixture<SerialNumberManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerialNumberManualComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumberManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

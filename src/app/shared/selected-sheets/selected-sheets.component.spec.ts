import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectedSheetsComponent} from './selected-sheets.component';

describe('SelectedSheetsComponent', () => {
  let component: SelectedSheetsComponent;
  let fixture: ComponentFixture<SelectedSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedSheetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

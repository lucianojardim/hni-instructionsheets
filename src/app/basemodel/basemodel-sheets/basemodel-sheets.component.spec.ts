import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasemodelSheetsComponent} from './basemodel-sheets.component';

describe('BasemodelSheetsComponent', () => {
  let component: BasemodelSheetsComponent;
  let fixture: ComponentFixture<BasemodelSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasemodelSheetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemodelSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

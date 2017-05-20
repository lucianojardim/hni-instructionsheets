import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionSheetComponent } from './instruction-sheet.component';

describe('InstructionSheetComponent', () => {
  let component: InstructionSheetComponent;
  let fixture: ComponentFixture<InstructionSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

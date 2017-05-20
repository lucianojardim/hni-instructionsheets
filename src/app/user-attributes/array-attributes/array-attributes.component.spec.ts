import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArrayAttributesComponent} from './array-attributes.component';

describe('ArrayAttributesComponent', () => {
  let component: ArrayAttributesComponent;
  let fixture: ComponentFixture<ArrayAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayAttributesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

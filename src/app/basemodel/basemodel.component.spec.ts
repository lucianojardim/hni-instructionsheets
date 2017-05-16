import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasemodelComponent} from './basemodel.component';

describe('BasemodelComponent', () => {
  let component: BasemodelComponent;
  let fixture: ComponentFixture<BasemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasemodelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

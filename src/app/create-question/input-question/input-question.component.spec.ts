import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuestionComponent } from './input-question.component';

describe('InputQuestionComponent', () => {
  let component: InputQuestionComponent;
  let fixture: ComponentFixture<InputQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionQuestionComponent } from './session-question.component';

describe('SessionQuestionComponent', () => {
  let component: SessionQuestionComponent;
  let fixture: ComponentFixture<SessionQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

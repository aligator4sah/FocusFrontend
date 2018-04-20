import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoQuestionComponent } from './demo-question.component';

describe('DemoQuestionComponent', () => {
  let component: DemoQuestionComponent;
  let fixture: ComponentFixture<DemoQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

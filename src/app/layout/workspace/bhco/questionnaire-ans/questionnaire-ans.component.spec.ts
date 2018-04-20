import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAnsComponent } from './questionnaire-ans.component';

describe('QuestionnaireAnsComponent', () => {
  let component: QuestionnaireAnsComponent;
  let fixture: ComponentFixture<QuestionnaireAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

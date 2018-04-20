import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAnsTableComponent } from './questionnaire-ans-table.component';

describe('QuestionnaireAnsTableComponent', () => {
  let component: QuestionnaireAnsTableComponent;
  let fixture: ComponentFixture<QuestionnaireAnsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireAnsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAnsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAnalysisComponent } from './individual-analysis.component';

describe('IndividualAnalysisComponent', () => {
  let component: IndividualAnalysisComponent;
  let fixture: ComponentFixture<IndividualAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

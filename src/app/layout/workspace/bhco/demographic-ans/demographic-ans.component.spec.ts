import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicAnsComponent } from './demographic-ans.component';

describe('DemographicAnsComponent', () => {
  let component: DemographicAnsComponent;
  let fixture: ComponentFixture<DemographicAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioralDomainComponent } from './behavioral-domain.component';

describe('BehavioralDomainComponent', () => {
  let component: BehavioralDomainComponent;
  let fixture: ComponentFixture<BehavioralDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehavioralDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehavioralDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

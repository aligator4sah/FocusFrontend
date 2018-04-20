import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalDomainComponent } from './physical-domain.component';

describe('PhysicalDomainComponent', () => {
  let component: PhysicalDomainComponent;
  let fixture: ComponentFixture<PhysicalDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

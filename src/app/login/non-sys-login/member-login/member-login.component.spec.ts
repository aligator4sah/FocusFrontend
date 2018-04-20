import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLoginComponent } from './member-login.component';

describe('MemberLoginComponent', () => {
  let component: MemberLoginComponent;
  let fixture: ComponentFixture<MemberLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

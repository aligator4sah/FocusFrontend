import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhcoLoginComponent } from './bhco-login.component';

describe('BhcoLoginComponent', () => {
  let component: BhcoLoginComponent;
  let fixture: ComponentFixture<BhcoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhcoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhcoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

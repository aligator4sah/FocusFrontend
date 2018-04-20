import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLoginComponent } from './sys-login.component';

describe('SysLoginComponent', () => {
  let component: SysLoginComponent;
  let fixture: ComponentFixture<SysLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

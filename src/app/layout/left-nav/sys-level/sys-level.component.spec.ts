import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLevelComponent } from './sys-level.component';

describe('SysLevelComponent', () => {
  let component: SysLevelComponent;
  let fixture: ComponentFixture<SysLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

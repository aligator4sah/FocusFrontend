import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemLevelComponent } from './mem-level.component';

describe('MemLevelComponent', () => {
  let component: MemLevelComponent;
  let fixture: ComponentFixture<MemLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLevelComponent } from './com-level.component';

describe('ComLevelComponent', () => {
  let component: ComLevelComponent;
  let fixture: ComponentFixture<ComLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

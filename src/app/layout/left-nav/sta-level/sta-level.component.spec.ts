import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaLevelComponent } from './sta-level.component';

describe('StaLevelComponent', () => {
  let component: StaLevelComponent;
  let fixture: ComponentFixture<StaLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

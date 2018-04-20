import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhcoLevelComponent } from './bhco-level.component';

describe('BhcoLevelComponent', () => {
  let component: BhcoLevelComponent;
  let fixture: ComponentFixture<BhcoLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhcoLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhcoLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

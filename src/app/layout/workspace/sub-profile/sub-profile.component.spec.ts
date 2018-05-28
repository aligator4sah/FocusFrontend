import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProfileComponent } from './sub-profile.component';

describe('SubProfileComponent', () => {
  let component: SubProfileComponent;
  let fixture: ComponentFixture<SubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

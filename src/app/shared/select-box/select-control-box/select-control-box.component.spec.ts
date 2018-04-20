import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectControlBoxComponent } from './select-control-box.component';

describe('SelectControlBoxComponent', () => {
  let component: SelectControlBoxComponent;
  let fixture: ComponentFixture<SelectControlBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectControlBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectControlBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

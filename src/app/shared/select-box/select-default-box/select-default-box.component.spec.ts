import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDefaultBoxComponent } from './select-default-box.component';

describe('SelectDefaultBoxComponent', () => {
  let component: SelectDefaultBoxComponent;
  let fixture: ComponentFixture<SelectDefaultBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDefaultBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDefaultBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateBoxComponent } from './input-date-box.component';

describe('InputDateBoxComponent', () => {
  let component: InputDateBoxComponent;
  let fixture: ComponentFixture<InputDateBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDateBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

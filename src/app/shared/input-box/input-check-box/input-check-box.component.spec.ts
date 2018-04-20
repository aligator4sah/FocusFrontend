import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckBoxComponent } from './input-check-box.component';

describe('InputCheckBoxComponent', () => {
  let component: InputCheckBoxComponent;
  let fixture: ComponentFixture<InputCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

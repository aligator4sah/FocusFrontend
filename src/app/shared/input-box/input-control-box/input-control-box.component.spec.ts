import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlBoxComponent } from './input-control-box.component';

describe('InputControlBoxComponent', () => {
  let component: InputControlBoxComponent;
  let fixture: ComponentFixture<InputControlBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputControlBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputControlBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

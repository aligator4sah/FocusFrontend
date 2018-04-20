import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDefaultBoxComponent } from './input-default-box.component';

describe('InputDefaultBoxComponent', () => {
  let component: InputDefaultBoxComponent;
  let fixture: ComponentFixture<InputDefaultBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDefaultBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDefaultBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

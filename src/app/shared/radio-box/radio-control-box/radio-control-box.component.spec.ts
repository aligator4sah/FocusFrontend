import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioControlBoxComponent } from './radio-control-box.component';

describe('RadioControlBoxComponent', () => {
  let component: RadioControlBoxComponent;
  let fixture: ComponentFixture<RadioControlBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioControlBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioControlBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

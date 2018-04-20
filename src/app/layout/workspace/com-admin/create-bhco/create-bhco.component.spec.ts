import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBhcoComponent } from './create-bhco.component';

describe('CreateBhcoComponent', () => {
  let component: CreateBhcoComponent;
  let fixture: ComponentFixture<CreateBhcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBhcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBhcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

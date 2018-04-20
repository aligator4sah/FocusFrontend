import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComComponent } from './create-com.component';

describe('CreateComComponent', () => {
  let component: CreateComComponent;
  let fixture: ComponentFixture<CreateComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

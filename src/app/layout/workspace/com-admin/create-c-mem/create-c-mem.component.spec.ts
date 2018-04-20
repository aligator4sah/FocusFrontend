import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCMemComponent } from './create-c-mem.component';

describe('CreateCMemComponent', () => {
  let component: CreateCMemComponent;
  let fixture: ComponentFixture<CreateCMemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCMemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

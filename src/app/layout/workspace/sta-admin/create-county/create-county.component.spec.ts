import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCountyComponent } from './create-county.component';

describe('CreateCountyComponent', () => {
  let component: CreateCountyComponent;
  let fixture: ComponentFixture<CreateCountyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCountyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

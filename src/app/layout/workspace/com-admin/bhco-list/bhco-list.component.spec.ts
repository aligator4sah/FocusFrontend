import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhcoListComponent } from './bhco-list.component';

describe('BhcoListComponent', () => {
  let component: BhcoListComponent;
  let fixture: ComponentFixture<BhcoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhcoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhcoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

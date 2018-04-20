import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAdminListComponent } from './state-admin-list.component';

describe('StateAdminListComponent', () => {
  let component: StateAdminListComponent;
  let fixture: ComponentFixture<StateAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

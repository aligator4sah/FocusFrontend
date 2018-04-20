import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAdminListComponent } from './com-admin-list.component';

describe('ComAdminListComponent', () => {
  let component: ComAdminListComponent;
  let fixture: ComponentFixture<ComAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

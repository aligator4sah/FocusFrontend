import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkAnswerGroupComponent } from './social-network-answer-group.component';

describe('SocialNetworkAnswerGroupComponent', () => {
  let component: SocialNetworkAnswerGroupComponent;
  let fixture: ComponentFixture<SocialNetworkAnswerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkAnswerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkAnswerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

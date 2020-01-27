import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyEnrollingComponent } from './currently-enrolling.component';

describe('CurrentlyEnrollingComponent', () => {
  let component: CurrentlyEnrollingComponent;
  let fixture: ComponentFixture<CurrentlyEnrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentlyEnrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyEnrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

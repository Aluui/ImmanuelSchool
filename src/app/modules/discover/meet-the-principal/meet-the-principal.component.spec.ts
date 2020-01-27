import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetThePrincipalComponent } from './meet-the-principal.component';

describe('MeetThePrincipalComponent', () => {
  let component: MeetThePrincipalComponent;
  let fixture: ComponentFixture<MeetThePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetThePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetThePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

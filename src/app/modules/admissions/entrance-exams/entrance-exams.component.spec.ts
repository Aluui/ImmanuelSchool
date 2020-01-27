import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceExamsComponent } from './entrance-exams.component';

describe('EntranceExamsComponent', () => {
  let component: EntranceExamsComponent;
  let fixture: ComponentFixture<EntranceExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

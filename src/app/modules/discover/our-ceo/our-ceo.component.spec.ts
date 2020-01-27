import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCeoComponent } from './our-ceo.component';

describe('OurCeoComponent', () => {
  let component: OurCeoComponent;
  let fixture: ComponentFixture<OurCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

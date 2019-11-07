import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredLayoutComponent } from './secured-layout.component';

describe('SecuredLayoutComponent', () => {
  let component: SecuredLayoutComponent;
  let fixture: ComponentFixture<SecuredLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

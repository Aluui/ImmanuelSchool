import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinksColumnComponent } from './footer-links-column.component';

describe('FooterLinksColumnComponent', () => {
  let component: FooterLinksColumnComponent;
  let fixture: ComponentFixture<FooterLinksColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLinksColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLinksColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

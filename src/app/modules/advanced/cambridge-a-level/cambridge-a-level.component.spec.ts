import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambridgeALevelComponent } from './cambridge-a-level.component';

describe('CambridgeALevelComponent', () => {
  let component: CambridgeALevelComponent;
  let fixture: ComponentFixture<CambridgeALevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambridgeALevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambridgeALevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

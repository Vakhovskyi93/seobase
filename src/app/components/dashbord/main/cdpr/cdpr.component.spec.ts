import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdprComponent } from './cdpr.component';

describe('CdprComponent', () => {
  let component: CdprComponent;
  let fixture: ComponentFixture<CdprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

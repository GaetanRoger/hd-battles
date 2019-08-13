import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensComponent } from './sens.component';

describe('SensComponent', () => {
  let component: SensComponent;
  let fixture: ComponentFixture<SensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

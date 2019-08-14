import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstreCaracsComponent } from './monstre-caracs.component';

describe('MonstreCaracsComponent', () => {
  let component: MonstreCaracsComponent;
  let fixture: ComponentFixture<MonstreCaracsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstreCaracsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstreCaracsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

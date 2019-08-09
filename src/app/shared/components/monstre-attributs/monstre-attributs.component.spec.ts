import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstreAttributsComponent } from './monstre-attributs.component';

describe('MonstreAttributsComponent', () => {
  let component: MonstreAttributsComponent;
  let fixture: ComponentFixture<MonstreAttributsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstreAttributsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstreAttributsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

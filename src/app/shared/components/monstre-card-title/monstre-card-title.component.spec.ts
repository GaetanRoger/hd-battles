import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstreCardTitleComponent } from './monstre-card-title.component';

describe('MonstreCardTitleComponent', () => {
  let component: MonstreCardTitleComponent;
  let fixture: ComponentFixture<MonstreCardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstreCardTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstreCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedievalIconComponent } from './medieval-icon.component';

describe('MedievalIconComponent', () => {
  let component: MedievalIconComponent;
  let fixture: ComponentFixture<MedievalIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedievalIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedievalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

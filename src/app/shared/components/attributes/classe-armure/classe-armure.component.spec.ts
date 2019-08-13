import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseArmureComponent } from './classe-armure.component';

describe('ClasseArmureComponent', () => {
  let component: ClasseArmureComponent;
  let fixture: ComponentFixture<ClasseArmureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseArmureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseArmureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

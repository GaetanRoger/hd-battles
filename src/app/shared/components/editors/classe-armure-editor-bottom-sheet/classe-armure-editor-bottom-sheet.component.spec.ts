import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseArmureEditorBottomSheetComponent } from './classe-armure-editor-bottom-sheet.component';

describe('ClasseArmureEditorBottomSheetComponent', () => {
  let component: ClasseArmureEditorBottomSheetComponent;
  let fixture: ComponentFixture<ClasseArmureEditorBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseArmureEditorBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseArmureEditorBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

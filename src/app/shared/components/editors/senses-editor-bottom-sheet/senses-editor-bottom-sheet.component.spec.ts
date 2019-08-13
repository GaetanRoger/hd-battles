import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensesEditorBottomSheetComponent } from './senses-editor-bottom-sheet.component';

describe('SensesEditorBottomSheetComponent', () => {
  let component: SensesEditorBottomSheetComponent;
  let fixture: ComponentFixture<SensesEditorBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensesEditorBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensesEditorBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

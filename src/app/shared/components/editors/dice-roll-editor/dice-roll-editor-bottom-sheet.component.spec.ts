import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollEditorBottomSheetComponent } from './dice-roll-editor-bottom-sheet.component';

describe('DiceRollEditorBottomSheetComponent', () => {
  let component: DiceRollEditorBottomSheetComponent;
  let fixture: ComponentFixture<DiceRollEditorBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollEditorBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollEditorBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

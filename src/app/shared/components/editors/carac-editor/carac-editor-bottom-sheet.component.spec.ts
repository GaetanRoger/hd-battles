import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracEditorBottomSheetComponent } from './carac-editor-bottom-sheet.component';

describe('CaracEditorBottomSheetComponent', () => {
  let component: CaracEditorBottomSheetComponent;
  let fixture: ComponentFixture<CaracEditorBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracEditorBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracEditorBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

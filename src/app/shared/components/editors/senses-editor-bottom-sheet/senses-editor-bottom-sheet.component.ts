import { FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Sens } from 'src/app/models/sens';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-senses-editor-bottom-sheet',
  templateUrl: './senses-editor-bottom-sheet.component.html',
  styleUrls: ['./senses-editor-bottom-sheet.component.scss']
})
export class SensesEditorBottomSheetComponent implements OnInit {
  sensesFormArray: FormArray;

  constructor(
    private readonly bottomSheetRef: MatBottomSheetRef<SensesEditorBottomSheetComponent, Sens[]>,
    @Inject(MAT_BOTTOM_SHEET_DATA) private readonly initialValues: Sens[],
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.sensesFormArray = this.fb.array([], this.atLeastOneSensValidator);

    this.initialValues.forEach(v => this.addToSensFormArray(v));
  }


  addToSensFormArray(initialValue?: Sens): void {
    const newGroup = this.fb.group({
      type: this.fb.control(null, Validators.required),
      value: this.fb.control(null, Validators.required),
      description: this.fb.control(null)
    });

    if (initialValue) {
      newGroup.setValue({
        ...initialValue,
        description: initialValue.description || null
      });
    }

    this.sensesFormArray.push(newGroup);
  }

  removeFromSensFormArrayAt(i: number): void {
    this.sensesFormArray.removeAt(i);
  }

  closeWithoutSending() {
    this.bottomSheetRef.dismiss();
  }

  closeAndSend(): void {
    this.bottomSheetRef.dismiss(this.sensesFormArray.value);
  }

  private atLeastOneSensValidator(array: FormArray): ValidationErrors | null {
    if (array.controls.length > 0) {
      return null;
    }

    return {
      atLeastOneSens: 'false'
    };
  }
}

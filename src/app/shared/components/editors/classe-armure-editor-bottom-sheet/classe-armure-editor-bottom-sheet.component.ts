import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { ClasseArmure } from '../../../../models/classe-armure';

@Component({
  selector: 'app-classe-armure-editor-bottom-sheet',
  templateUrl: './classe-armure-editor-bottom-sheet.component.html',
  styleUrls: ['./classe-armure-editor-bottom-sheet.component.scss']
})
export class ClasseArmureEditorBottomSheetComponent implements OnInit {
  classeArmureFromGroup: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly bottomSheetRef: MatBottomSheetRef<ClasseArmureEditorBottomSheetComponent, ClasseArmure>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private readonly initialValues: ClasseArmure) { }

  get othersArray(): FormArray {
    return this.classeArmureFromGroup.get('others') as FormArray;
  }

  ngOnInit() {
    this.classeArmureFromGroup = this.fb.group({
      default: this.fb.group({
        value: this.fb.control(this.initialValues.default.value, [Validators.required, Validators.min(0)]),
        description: this.fb.control(this.initialValues.default.description)
      }),
      others: this.fb.array([])
    });

    this.initialValues.others.forEach(o => this.addToOthersFormArray(o));
  }

  addToOthersFormArray(otherClasseArmure?: { value: number, description: string }): void {
    const group: FormGroup = this.fb.group({
      value: this.fb.control(null, [Validators.required, Validators.min(0)]),
      description: this.fb.control(null, Validators.required)
    });

    if (otherClasseArmure) {
      group.setValue({
        value: otherClasseArmure.value,
        description: otherClasseArmure.description
      });
    }

    this.othersArray.push(group);
  }

  removeOtherAt(i: number) {
    this.othersArray.removeAt(i);
  }

  closeWithoutSending() {
    this.bottomSheetRef.dismiss();
  }

  closeAndSend() {
    this.bottomSheetRef.dismiss(this.classeArmureFromGroup.value);
  }
}

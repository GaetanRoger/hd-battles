import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Carac } from '../../../../models/carac';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carac-editor',
  templateUrl: './carac-editor-bottom-sheet.component.html',
  styleUrls: ['./carac-editor-bottom-sheet.component.scss']
})
export class CaracEditorBottomSheetComponent implements OnInit {
  caracFormGroup: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly bottomSheetRef: MatBottomSheetRef<CaracEditorBottomSheetComponent, Carac>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private readonly initialValues: Carac) { }

  ngOnInit() {
    this.caracFormGroup = this.fb.group({
      value: this.fb.control(this.initialValues.value, [Validators.required, Validators.min(0)]),
      modifier: this.fb.control(this.initialValues.modifier, [Validators.required])
    });
  }

  closeWithoutSending(): void {
    this.bottomSheetRef.dismiss();
  }

  closeAndSend(): void {
    this.bottomSheetRef.dismiss(this.caracFormGroup.value);
  }

}

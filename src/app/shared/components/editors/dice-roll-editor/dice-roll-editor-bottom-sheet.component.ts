import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DiceRoll } from '../../../../models/dice-roll';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DiceRollerService } from '../../../services/dice-roller/dice-roller.service';
import { Subscription } from 'rxjs';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-dice-roll-editor',
  templateUrl: './dice-roll-editor-bottom-sheet.component.html',
  styleUrls: ['./dice-roll-editor-bottom-sheet.component.scss']
})
export class DiceRollEditorBottomSheetComponent implements OnInit {
  valueFormGroup: FormGroup;

  get temp(): number {
    return this.valueFormGroup.get('diceSize').value;
  }

  set temp(v: number) {
    this.valueFormGroup.get('diceSize').setValue(v);
  }

  constructor(private readonly fb: FormBuilder,
              private readonly roller: DiceRollerService,
              private readonly bottomSheetRef: MatBottomSheetRef<DiceRollEditorBottomSheetComponent, DiceRoll>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private readonly initialValues: DiceRoll) { }

  @Input() set value(v: DiceRoll) {
    this.valueFormGroup.setValue({
      diceCount: v.diceCount,
      diceSize: v.diceSize,
      modifier: v.modifier
    });
  }

  ngOnInit() {

    this.valueFormGroup = this.fb.group({
      diceCount: this.fb.control(this.initialValues.diceCount, [Validators.required, Validators.min(1)]),
      diceSize: this.fb.control(this.initialValues.diceSize, [Validators.required, Validators.min(4), Validators.max(20)]),
      modifier: this.fb.control(this.initialValues.modifier, [Validators.required])
    });
  }

  closeWithoutSending() {
    this.bottomSheetRef.dismiss();
  }

  closeAndSend(): void {
    const formValue: Partial<DiceRoll> = this.valueFormGroup.value;

    this.bottomSheetRef.dismiss({
      diceSize: formValue.diceSize,
      diceCount: formValue.diceCount,
      modifier: formValue.modifier,
      mean: this.roller.meanOf(formValue)
    });
  }

}

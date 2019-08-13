import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sens } from 'src/app/models/sens';
import { MatBottomSheet } from '@angular/material';
import { SensesEditorBottomSheetComponent } from '../editors/senses-editor-bottom-sheet/senses-editor-bottom-sheet.component';

@Component({
  selector: 'app-sens',
  templateUrl: './sens.component.html',
  styleUrls: ['./sens.component.scss']
})
export class SensComponent implements OnInit {
  private readonly SENS_METERS = ['vision dans le noir', 'vision parfaite', 'perception des vibrations', 'vision aveugle'];

  @Input() value: Sens[];
  @Input() editable: boolean;
  @Output() valueChange = new EventEmitter<Sens[]>();

  constructor(private readonly bottomSheet: MatBottomSheet) { }

  get tooltipText(): string {
    return this.editable
      ? 'Cliquez pour modifier la valeur'
      : undefined;
  }

  toSensString(sens: Sens): string {
    let unit = '';
    let description = '';

    if (this.SENS_METERS.includes(sens.type)) {
      unit = ' m';
    }
    if (sens.description) {
      description = ` (${sens.description})`;
    }

    const upperCasesSensType = sens.type.slice(0, 1).toUpperCase() + sens.type.slice(1);

    return `${upperCasesSensType} ${sens.value}${unit}${description}`;
  }


  ngOnInit() {
  }

  async openSheet() {
    if (!this.editable) {
      return;
    }

    const results = await this.bottomSheet.open<SensesEditorBottomSheetComponent, Sens[], Sens[]>(
      SensesEditorBottomSheetComponent,
      {
        data: this.value,
        autoFocus: true
      }
    )
      .afterDismissed()
      .toPromise();

    if (results) {
      this.value = results;
      this.valueChange.emit(results);
    }
  }

}

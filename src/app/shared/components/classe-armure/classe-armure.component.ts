import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClasseArmure } from '../../../models/classe-armure';
import { MatBottomSheet } from '@angular/material';
import { ClasseArmureEditorBottomSheetComponent } from '../editors/classe-armure-editor-bottom-sheet/classe-armure-editor-bottom-sheet.component';

@Component({
  selector: 'app-classe-armure',
  templateUrl: './classe-armure.component.html',
  styleUrls: ['./classe-armure.component.scss']
})
export class ClasseArmureComponent implements OnInit {
  @Input() value: ClasseArmure;
  @Input() editable = false;

  @Output() valueChange = new EventEmitter<ClasseArmure>();

  constructor(private readonly bottomSheet: MatBottomSheet) { }

  get tooltipText(): string {
    return this.editable
      ? 'Cliquez pour modifier la valeur'
      : undefined;
  }

  get classeArmureStr(): string {
    if (this.value.default.description) {
      return `${this.value.default.value} (${this.value.default.description})`;
    } else {
      return this.value.default.value.toString();
    }
  }

  get classeArmureOthersStr(): string {
    if (!this.value || !this.value.others || this.value.others.length === 0) {
      return '';
    }

    return 'Ou ' + this.value.others
      .map(o => `${o.value} (${o.description})`)
      .join(' ou ');
  }

  ngOnInit() {
  }

  async openBottomSheet() {
    if (!this.editable) {
      return;
    }
    const results = await this.bottomSheet.open<ClasseArmureEditorBottomSheetComponent, ClasseArmure, ClasseArmure>(
      ClasseArmureEditorBottomSheetComponent,
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

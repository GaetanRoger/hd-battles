import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Carac } from '../../../../models/carac';
import { CaracEditorBottomSheetComponent } from '../../editors/carac-editor/carac-editor-bottom-sheet.component';

@Component({
  selector: 'app-carac',
  templateUrl: './carac.component.html',
  styleUrls: ['./carac.component.scss']
})
export class CaracComponent implements OnInit {
  @Input() carac: Carac;
  @Input() editable = false;
  @Output() caracChange = new EventEmitter<Carac>();

  constructor(private readonly bottomSheet: MatBottomSheet) { }

  get tooltipText(): string {
    return this.editable
      ? 'Cliquez pour modifier la valeur'
      : undefined;
  }

  get caracStr(): string {
    const modifierSymb = this.carac.modifier >= 0 ? '+' : '';
    return `${this.carac.value} (${modifierSymb}${this.carac.modifier})`;
  }

  ngOnInit() {
  }

  async openSheet() {
    if (!this.editable) {
      return;
    }

    const results = await this.bottomSheet.open<CaracEditorBottomSheetComponent, Carac, Carac>(
      CaracEditorBottomSheetComponent,
      {
        data: this.carac,
        autoFocus: true
      }
    )
      .afterDismissed()
      .toPromise();

    if (results) {
      this.carac = results;
      this.caracChange.emit(results);
    }
  }
}

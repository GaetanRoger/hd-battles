import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiceRoll } from '../../../models/dice-roll';
import { InfoParserService } from '../../services/info-parser/info-parser.service';
import { MatBottomSheet } from '@angular/material';
import { DiceRollEditorBottomSheetComponent } from '../editors/dice-roll-editor/dice-roll-editor-bottom-sheet.component';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {
  @Input() dice: DiceRoll;
  @Input() random: boolean;
  @Input() editable = false;

  @Output() diceChange = new EventEmitter<DiceRoll>();

  print: string;

  constructor(private readonly infoParser: InfoParserService,
              private readonly bottomSheet: MatBottomSheet) { }

  get tooltipText(): string {
    return this.editable
      ? 'Cliquez pour modifier la valeur'
      : undefined;
  }

  ngOnInit() {
    this.updatePrint();
  }

  async openEditor() {
    if (!this.editable) {
      return;
    }

    const results: DiceRoll = await this.bottomSheet.open<DiceRollEditorBottomSheetComponent, DiceRoll, DiceRoll>(
      DiceRollEditorBottomSheetComponent,
      {
        data: this.dice,
      })
      .afterDismissed()
      .toPromise();

    if (!!results) {
      this.dice = results;
      this.diceChange.emit(this.dice);
      this.updatePrint();
    }
  }

  private updatePrint() {
    const modifier = this.dice.modifier >= 0
      ? ('+' + this.dice.modifier)
      : this.dice.modifier.toString();

    this.print = this.random
      ? `${this.dice.diceCount}d${this.dice.diceSize}${modifier}`
      : this.dice.mean.toString();
  }
}

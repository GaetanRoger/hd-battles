import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiceRoll } from '../../../models/dice-roll';
import { InfoParserService } from '../../services/info-parser/info-parser.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {
  @Input() dice: DiceRoll;
  @Input() rawDice: string;
  @Input() random = true;
  @Input() rollButton = false;
  @Input() editable = false;

  @Output() rolledValue = new EventEmitter<number>();

  print: string;

  constructor(private readonly infoParser: InfoParserService) { }

  ngOnInit() {
    if (this.rawDice) {
      this.dice = this.infoParser.parseDiceRoll(this.rawDice);
    }

    const modifier = this.dice.modifier >= 0
      ? ('+' + this.dice.modifier)
      : this.dice.modifier.toString();

    this.print = this.random
      ? `${this.dice.diceCount}d${this.dice.diceSize}${modifier}`
      : this.dice.mean.toString();
  }

}

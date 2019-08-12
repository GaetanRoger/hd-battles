import { Injectable } from '@angular/core';
import { DiceRoll } from '../../../models/dice-roll';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {
  roll(diceRoll: DiceRoll): number {
    let diceResults = 0;

    for (let i = 0; i < diceRoll.diceCount; ++i) {
      const diceResult = Math.floor(Math.random() * diceRoll.diceSize);
      diceResults += diceResult;
    }

    return diceResults + diceRoll.modifier;
  }

  meanOf(diceRoll: Partial<DiceRoll>): number {
    if (this.not(diceRoll.diceCount) || this.not(diceRoll.diceSize) || this.not(diceRoll.modifier)) {
      throw new Error('To compute mean, needs dice count, dice size and modifier.');
    }

    return Math.ceil((diceRoll.diceSize * diceRoll.diceCount + diceRoll.modifier) / 2);
  }

  private not(value: any): boolean {
    return value === undefined || value === null;
  }
}

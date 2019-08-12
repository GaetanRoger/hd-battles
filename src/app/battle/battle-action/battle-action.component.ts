import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Battle } from '../../models/battle';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { InfoParserService } from '../../shared/services/info-parser/info-parser.service';
import { DiceRollerService } from '../../shared/services/dice-roller/dice-roller.service';
import { DiceRoll } from '../../models/dice-roll';
import { BattleIndividual } from '../../models/battle-individual';

@Component({
  selector: 'app-battle-action',
  templateUrl: './battle-action.component.html',
  styleUrls: ['./battle-action.component.scss']
})
export class BattleActionComponent implements OnInit {
  builtBattle: Battle;
  round = 1;
  individuals: BattleIndividual[];
  active = 0;

  constructor(private readonly route: ActivatedRoute,
              private readonly localStorage: LocalStorageService,
              private readonly infoParser: InfoParserService,
              private readonly roller: DiceRollerService) { }

  ngOnInit() {
    const battleId = this.route.snapshot.params.id;
    this.builtBattle = this.localStorage.retrieveFromStoredMap('built-battles', battleId);
    this.individuals = this.rollInitiativesAdHp();
  }

  nextIndividual(): void {
    this.active++;
    if (this.active >= this.individuals.length) {
      this.active = 0;
      this.round++;
    }
  }

  removeHp(individualIndex: number, individualHpIndex: number): void {
    this.individuals[individualIndex].hp[individualHpIndex]--;

    if (this.individuals[individualIndex].hp[individualHpIndex] === 0) {
      this.individuals[individualIndex].hp.splice(individualHpIndex, 1);
      this.individuals[individualIndex].maxHp.splice(individualHpIndex, 1);
    }
  }

  private rollInitiativesAdHp(): BattleIndividual[] {
    const monstres = this.builtBattle.monstres;
    const characters = this.builtBattle.characters;

    const monstresInitiative: number[] = monstres
      .map(monstre => monstre.monstre.header.monster.dex)
      .map(dex => this.infoParser.parseCarac(dex))
      .map(dex => dex.modifier)
      .map(modifier => this.roller.roll({modifier, diceCount: 1, diceSize: 20}));

    const monstresHp: number[][] = monstres
      .map(monstre => ([monstre.monstre.header.monster.hp, monstre.randomHp, monstre.quantity]))
      .map(([hp, random, quatity]: [string, boolean, number]) => ([this.infoParser.parseDiceRoll(hp), random, quatity]))
      .map(([hp, random, quantity]: [DiceRoll, boolean, number]) => {
        const values: number[] = [];
        for (let i = 0; i < quantity; ++i) {
          if (random) {
            values.push(this.roller.roll(hp));
          } else {
            values.push(hp.mean);
          }
        }

        return values;
      });

    const monstresCarac = monstres.map((monstre, i) => ({
      monstre,
      initiative: monstresInitiative[i],
      hp: monstresHp[i],
      maxHp: [...monstresHp[i]]
    }));

    return monstresCarac.sort((i1, i2) => i2.initiative - i1.initiative);
  }
}

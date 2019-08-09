import { Component, OnInit } from '@angular/core';
import { Battle } from '../../models/battle';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { BestiaireService } from '../../shared/services/bestiaire/bestiaire.service';
import { BattleMonstre } from '../../models/battle-monstre';

@Component({
  selector: 'app-battle-recap',
  templateUrl: './battle-recap.component.html',
  styleUrls: ['./battle-recap.component.scss']
})
export class BattleRecapComponent implements OnInit {
  battle: Battle;

  constructor(private readonly route: ActivatedRoute,
              private readonly localStorage: LocalStorageService,
              private readonly bestiaire: BestiaireService,
              private readonly router: Router) { }

  ngOnInit() {
    const battleId: string = this.route.snapshot.params.id;
    this.battle = this.localStorage.retrieveFromStoredMap<Battle>('built-battles', battleId);
  }

  getHp(battleMonstre: BattleMonstre): string {
    const hp = this.bestiaire.parseHp(battleMonstre.monstre);
    const modifier = hp.modifier >= 0 ? ('+' + hp.modifier) : hp.modifier.toString();

    if (battleMonstre.randomHp) {
      return `${hp.diceCount}d${hp.diceSize}${modifier}`;
    } else {
      hp.mean.toString();
    }

  }

  vc($event: any) {
    console.log($event);
  }

  save() {
    this.localStorage.updateValueFromStoredMap<Battle>('built-battles', this.battle.id, this.battle);
  }

  go() {
    this.save();
    this.router.navigate(['/battle/action', this.battle.id]);
  }
}

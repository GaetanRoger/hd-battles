import { Component, OnInit } from '@angular/core';
import { Battle } from '../../models/battle';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { BestiaireService } from '../../shared/services/bestiaire/bestiaire.service';
import { PreparedMonstre } from '../../models/prepared-monstre';
import { MonstreContent } from '../../models/monstre-content';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-battle-recap',
  templateUrl: './battle-recap.component.html',
  styleUrls: ['./battle-recap.component.scss']
})
export class BattleRecapComponent implements OnInit {
  battle: Battle;

  hidden = {
    capacties: true,
    actions: true,
    actionsLegendaires: true,
    reactions: true
  };

  constructor(private readonly route: ActivatedRoute,
              private readonly localStorage: LocalStorageService,
              private readonly bestiaire: BestiaireService,
              private readonly router: Router) { }

  ngOnInit() {
    const battleId: string = this.route.snapshot.params.id;
    this.battle = this.localStorage.retrieveFromStoredMap<Battle>('built-battles', battleId);
  }

  save() {
    this.localStorage.updateValueFromStoredMap<Battle>('built-battles', this.battle.id, this.battle);
  }

  go() {
    this.save();
    this.router.navigate(['/battle/action', this.battle.id]);
  }

  getMonstreContent(monstre: PreparedMonstre): MonstreContent {
    return this.bestiaire.parseContent(monstre.monstre);
  }
}

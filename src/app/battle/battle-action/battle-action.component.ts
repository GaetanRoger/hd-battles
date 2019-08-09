import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Battle } from '../../models/battle';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-battle-action',
  templateUrl: './battle-action.component.html',
  styleUrls: ['./battle-action.component.scss']
})
export class BattleActionComponent implements OnInit {
  battle: Battle;
  round = 1;

  active = null;

  constructor(private readonly route: ActivatedRoute,
              private readonly localStorage: LocalStorageService) { }

  ngOnInit() {
    const battleId = this.route.snapshot.params.id;
    this.battle = this.localStorage.retrieveFromStoredMap('built-battles', battleId);
  }

}

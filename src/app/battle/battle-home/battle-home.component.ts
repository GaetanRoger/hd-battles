import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Battle } from '../../models/battle';

@Component({
  selector: 'app-battle-home',
  templateUrl: './battle-home.component.html',
  styleUrls: ['./battle-home.component.scss']
})
export class BattleHomeComponent implements OnInit {
  battles: Battle[];

  constructor(private readonly localStorage: LocalStorageService) { }

  ngOnInit() {
    this.battles = Object.values(this.localStorage.retrieveStoredMap<Battle>('built-battles'));
  }

}

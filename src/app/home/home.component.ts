import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';
import { Battle } from '../models/battle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  battles: Battle[];

  constructor(private readonly localStorage: LocalStorageService) { }

  ngOnInit() {
    this.battles = Object.values(this.localStorage.retrieveStoredMap<Battle>('built-battles'));
  }

}

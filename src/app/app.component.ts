import { BestiaireService } from './shared/services/bestiaire/bestiaire.service';
import { Component, OnInit } from '@angular/core';
import { Speed } from './models/speed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pv: any[];

  constructor(private readonly bestiaire: BestiaireService) { }

  ngOnInit(): void {
    this.pv = this.bestiaire.getAll()
      .map(b => [b.challenge, b.header.monster.px]).sort();

  }
}

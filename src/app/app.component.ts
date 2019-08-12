import { BestiaireService } from './shared/services/bestiaire/bestiaire.service';
import { Component, OnInit } from '@angular/core';
import { InfoParserService } from './shared/services/info-parser/info-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pv: any[];

  constructor() {}

  ngOnInit(): void {
  }

}

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

  constructor(private readonly bestiaire: BestiaireService,
              private readonly parser: InfoParserService) {}

  ngOnInit(): void {
    const reactionRegexGroup2 = /<h2 id="reactions">Réactions<\/h2>\n<p>(((?!h2)(.|\n))*)<\/p>/m;
    const actionsRegexGroup2 = /<h2 id="actions">Actions<\/h2>\n<p>(((?!h2)(.|\n))*)<\/p>/m;
    const capacitesRegexGroup2 = /<h2 id="capacites">Capacités<\/h2>\n<p>(((?!h2)(.|\n))*)<\/p>/m;
    const actionsLegendairesRegexGroup2 = /<h2 id="actions-legendaires">Actions légendaires<\/h2>\n<p>(((?!h2)(.|\n))*)<\/p>/m;

    this.pv = this.bestiaire.getAll()
      .map(monstre => monstre.content)
      // .filter(p => actionsRegexGroup2.test(p))
      // .map(p => actionsRegexGroup2.exec(p)[1])
      .map(p => this.parser.parseContent(p))
      .sort();
  }

}

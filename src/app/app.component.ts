import { BestiaireService } from './shared/services/bestiaire/bestiaire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pv: any[];

  constructor(private readonly bestiaire: BestiaireService) {}

  ngOnInit(): void {
    this.pv = this.bestiaire.getAll()
      .filter(b => !b.parsed.ac);
  }

  private parseAc(ac: string) {
    const regex = /^([1-9][0-9]*)( \(([a-zA-Zéèëêïîâç ,'\-]+)\))?$/;

    const results = regex.exec(ac);
    if (!results) {
      return null;
    }

    return {
      default: {
        value: Number(results[1]),
        description: results[3],
      },
      others: []
    };
  }
}

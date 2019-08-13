import { BestiaireService } from './shared/services/bestiaire/bestiaire.service';
import { Component, OnInit } from '@angular/core';

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
      .filter(b => !b.parsed.senses)
      .sort();
  }

  private parseSenses(s: string[]) {
    const senses = [];
    let error = false;

    s.forEach(sens => {
      if (sens.startsWith('vision parfaite')) {
        const regex = /^vision parfaite ([1-9][0-9]*) m$/;
        const regexResults = regex.exec(sens);
        if (!regexResults) {
          error = true;
        } else {
          senses.push({
            type: 'vision parfaite',
            value: Number(regexResults[1])
          });
        }
      } else if (sens.startsWith('vision dans le noir')) {
        const regex = /^vision dans le noir ([1-9][0-9]*) m$/;
        const regexResults = regex.exec(sens);
        if (!regexResults) {
          error = true;
        } else {
          senses.push({
            type: 'vision dans le noir',
            value: Number(regexResults[1])
          });
        }
      } else if (sens.startsWith('perception passive')) {
        const regex = /^perception passive ([1-9][0-9]*)$/;
        const regexResults = regex.exec(sens);
        if (!regexResults) {
          error = true;
        } else {
          senses.push({
            type: 'perception passive',
            value: Number(regexResults[1])
          });
        }
      } else if (sens.startsWith('vision aveugle')) {
        const regex = /^vision aveugle ([1-9][0-9]*) m$/;
        const regexResults = regex.exec(sens);
        if (!regexResults) {
          error = true;
        } else {
          senses.push({
            type: 'vision aveugle',
            value: Number(regexResults[1])
          });
        }
      } else if (sens.startsWith('perception des vibrations')) {
        const regex = /^perception des vibrations ([1-9][0-9]*) m$/;
        const regexResults = regex.exec(sens);
        if (!regexResults) {
          error = true;
        } else {
          senses.push({
            type: 'perception des vibrations',
            value: Number(regexResults[1])
          });
        }
      } else {
        error = true;
      }
    });

    if (error) { return null; }
    else { return senses; }
  }
}

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
      .map(b => {
        const speed = b.header.monster.speed
          .replace(';', '')
          .split(', ')
          .map(s => s.trim());

        return {
          ...b,
          parsed: {
            ...b.parsed,
            speed: this.parseSpeed(speed)
          }
        }
      });
  }
  parseSpeed(speeds: string[]): Speed[] {
    let error = false;
    let parsed: Speed[] = [];

    speeds.forEach(speed => {
      if (speed.startsWith('vol')) {
        const regex = /^vol ([1-9],?[0-9]*) m( \(([a-zA-Zàâçéèêëîïôûùüÿñæœ \-']+)\))?$/;
        const regexResults = regex.exec(speed);

        if (!regexResults) {
          error = true;
        } else {
          parsed.push({
            type: 'vol',
            value: Number(regexResults[1].replace(',', '.')),
            description: regexResults[3]
          });
        }
      } else if (speed.startsWith('nage')) {
        const regex = /^nage ([1-9],?[0-9]*) m( \(([a-zA-Zàâçéèêëîïôûùüÿñæœ \-']+)\))?$/;
        const regexResults = regex.exec(speed);

        if (!regexResults) {
          error = true;
        } else {
          parsed.push({
            type: 'nage',
            value: Number(regexResults[1].replace(',', '.')),
            description: regexResults[3]
          });
        }
      } else if (speed.startsWith('escalade')) {
        const regex = /^escalade ([1-9],?[0-9]*) m( \(([a-zA-Zàâçéèêëîïôûùüÿñæœ \-']+)\))?$/;
        const regexResults = regex.exec(speed);

        if (!regexResults) {
          error = true;
        } else {
          parsed.push({
            type: 'escalade',
            value: Number(regexResults[1].replace(',', '.')),
            description: regexResults[3]
          });
        }
      } else if (speed.startsWith('fouissement')) {
        const regex = /^fouissement ([1-9],?[0-9]*) m( \(([a-zA-Zàâçéèêëîïôûùüÿñæœ \-']+)\))?$/;
        const regexResults = regex.exec(speed);

        if (!regexResults) {
          error = true;
        } else {
          parsed.push({
            type: 'fouissement',
            value: Number(regexResults[1].replace(',', '.')),
            description: regexResults[3]
          });
        }
      } else if (/^([0-9],?[0-9]*) m( \(([a-zA-Zàâçéèêëîïôûùüÿñæœ0-9 \-']+)\))?$/.test(speed)) {
        const regex = /^([0-9],?[0-9]*) m( \(([a-zA-Zàâçéèêëîïôûùüÿñæœ0-9 \-']+)\))?$/;
        const regexResults = regex.exec(speed);

        if (!regexResults) {
          error = true;
        } else {
          parsed.push({
            type: 'sol',
            value: Number(regexResults[1].replace(',', '.')),
            description: regexResults[3]
          });
        }
      }
    });

    if (error || parsed.length === 0) {
      return null;
    } else {
      return parsed;
    }
  }
}

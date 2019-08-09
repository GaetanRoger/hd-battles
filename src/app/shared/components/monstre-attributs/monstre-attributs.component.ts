import { Component, Input, OnInit } from '@angular/core';
import { Monstre } from '../../../models/monstre.interface';

@Component({
  selector: 'app-monstre-attributs',
  templateUrl: './monstre-attributs.component.html',
  styleUrls: ['./monstre-attributs.component.scss']
})
export class MonstreAttributsComponent implements OnInit {
  @Input() monstre: Monstre;

  attributs: { name: string; value: any }[] = [];

  ngOnInit(): void {
    this.attributs = [
      {
        name: 'Force',
        value: this.monstre.header.monster.str
      },
      {
        name: 'Dextérité',
        value: this.monstre.header.monster.dex
      }, {
        name: 'Constitution',
        value: this.monstre.header.monster.con
      }, {
        name: 'Intelligence',
        value: this.monstre.header.monster.str
      }, {
        name: 'Sagesse',
        value: this.monstre.header.monster.wis
      }, {
        name: 'Charisme',
        value: this.monstre.header.monster.cha
      }
    ];
  }
}

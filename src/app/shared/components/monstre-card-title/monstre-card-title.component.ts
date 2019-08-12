import { Component, Input, OnInit } from '@angular/core';
import { PreparedMonstre } from '../../../models/prepared-monstre';

@Component({
  selector: 'app-monstre-card-title',
  templateUrl: './monstre-card-title.component.html',
  styleUrls: ['./monstre-card-title.component.scss']
})
export class MonstreCardTitleComponent implements OnInit {
  @Input() monstre: PreparedMonstre;

  constructor() { }

  ngOnInit() {
  }

}

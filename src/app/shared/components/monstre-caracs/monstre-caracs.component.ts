import { PreparedMonstre } from './../../../models/prepared-monstre';
import { Component, OnInit, Input } from '@angular/core';
import { Monstre } from 'src/app/models/monstre';

@Component({
  selector: 'app-monstre-caracs',
  templateUrl: './monstre-caracs.component.html',
  styleUrls: ['./monstre-caracs.component.scss']
})
export class MonstreCaracsComponent implements OnInit {
  @Input() preparedMonstre: PreparedMonstre;
  @Input() editable: boolean;

  constructor() { }

  ngOnInit() {
  }

}

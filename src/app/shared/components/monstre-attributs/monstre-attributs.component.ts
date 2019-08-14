import { Component, Input, OnInit } from '@angular/core';
import { Monstre } from '../../../models/monstre';

@Component({
  selector: 'app-monstre-attributs',
  templateUrl: './monstre-attributs.component.html',
  styleUrls: ['./monstre-attributs.component.scss']
})
export class MonstreAttributsComponent {
  @Input() monstre: Monstre;
  @Input() editable = false;
}

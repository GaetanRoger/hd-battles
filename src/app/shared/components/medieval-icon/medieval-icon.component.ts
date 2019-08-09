import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medieval-icon',
  templateUrl: './medieval-icon.component.html',
  styleUrls: ['./medieval-icon.component.scss']
})
export class MedievalIconComponent implements OnInit {
  @Input() icon: string;

  src: string;

  constructor() { }

  ngOnInit() {
    this.src = `/assets/medieval-icons/${this.icon}.svg`;
  }

}

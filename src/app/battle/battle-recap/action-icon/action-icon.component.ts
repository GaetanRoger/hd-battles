import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {
  @Input() type: 'cac' | 'd' | 'cacd' | 'other';
  @Input() typeFull: string;

  get icon(): string {
    switch (this.type) {
      case 'cac':
        return 'sword-1';
      case 'd':
        return 'archery';
      case 'cacd':
        return 'sword-1';
      default:
        return 'scroll';
    }
  }

  ngOnInit(): void {
    console.log('type', this.type, 'full', this.typeFull, 'geticon', this.icon);
  }
}
